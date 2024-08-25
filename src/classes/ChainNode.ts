export class ChainNode {
  weight = 0;
  nodes = new Map<string, ChainNode>();

  public text = '';

  constructor(text: string = '') {
    const parts = this.classify(text.toLowerCase());

    if (!parts.length) {
      return;
    }

    // Get the root of the text that constructed this
    const root = parts.shift();

    // Save it with the class instance
    this.text = root!;

    this.addText(parts.join(''));
  }

  addText(text: string) {
    this.weight++;
    const parts = this.classify(text.toLowerCase());

    if (!parts.length) {
      return;
    }

    // For example, the first letter
    const root = parts.shift();

    this.nodes.set(root!, new ChainNode(parts.join('')));
  }

  classify(text: string): string[] {
    return text.split('');
  }

  getText(textSoFar: string): string {
    console.log(`Text so far: ${textSoFar}`);
    // Handle the end of the string
    if (!this.nodes.size) {
      console.log('reached end of chain');
      return textSoFar;
    }

    const nodes = Array.from(this.nodes.entries()).map((e) => e[1]);
    console.log(nodes);

    // Pick a random node under this node
    const items = Array.from(this.nodes.entries()).map((i) => i[1]);
    const node = items[Math.floor(Math.random() * items.length)];

    return node.getText(`${textSoFar}${this.text}`);
  }
}
