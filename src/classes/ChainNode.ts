import { splitIntoPhonemes } from './SplitPhonemes';

export class ChainNode {
  nodes: Record<string, ChainNode> = {};

  text: string = '';

  constructor(
    text: string,
    public depth: number,
    public parent?: ChainNode
  ) {
    const items = this.classify(text);

    this.text = items.shift()!;

    if (!this.text) {
      this.text = '';
    }

    if (!items.length) {
      return;
    }

    const remainder = items.join('');

    this.addText(remainder);
  }

  get hasNodes(): boolean {
    return Object.keys(this.nodes).length > 0;
  }

  addText(text: string) {
    if (!text) {
      return;
    }

    const items = this.classify(text);

    if (!items.length) {
      return;
    }

    const root = items.shift();

    const remainder = items.join('');

    if (!this.nodes[root!]) {
      this.nodes[root!] = new ChainNode(text, this.depth + 1, this);
    } else {
      this.nodes[root!].addText(remainder);
    }
  }

  getText(text: string = '') {
    if (Math.random() > 0.95) {
      return this.getParent(100).getText(text);
    }

    if (!this.hasNodes) {
      return `${text}${this.text}`;
    }

    const items = Object.keys(this.nodes).map((key) => this.nodes[key]);
    const randomNode = items[Math.floor(Math.random() * items.length)];

    const newText = `${text}${this.text}`;

    return randomNode.getText(newText);
  }

  getParent(height: number = 1) {
    if (!this.parent) {
      return this;
    }

    if (!height) {
      return this;
    }

    return this.parent.getParent(height - 1);
  }

  classify(text: string): string[] {
    return splitIntoPhonemes(text.toLowerCase());
  }
}
