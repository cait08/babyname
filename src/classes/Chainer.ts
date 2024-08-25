import { ChainNode } from "./ChainNode";

export class Chainer {

    nodeRoot = new ChainNode();

    addText(text: string){
        this.nodeRoot.addText(text);
    }
}