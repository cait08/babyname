export class ChainNode {

    nodes = new Map<string, ChainNode>();

    constructor(
        private text: string = ''
    ) {
        this.addText(this.text);
    }


    addText(text: string) {

        console.log('addText', text);

        const parts = this.classify(text);

        if (!parts.length) {
            return;
        }



        const root = parts.shift();

        this.nodes.set(root!, new ChainNode(parts.join('')));


    }

    classify(text: string): string[] {
        return text.split('');
    }
}