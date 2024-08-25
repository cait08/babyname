
import { Chainer } from "./classes/Chainer";

import fs from 'fs';

import Papa from 'papaparse';



async function setup() {


    console.log('hello world');

    const file = './data/yob1880.txt';

    console.log(file);


    const csvText = fs.readFileSync(file);

    const data = Papa.parse(csvText.toString());


    const names = data.data.map((d: any) => {
        return d[0]
    });

    

    const chainer = new Chainer();

    names.slice(0, 10).forEach(name => chainer.addText(name));

    console.log(chainer);


}

setup();