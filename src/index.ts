import fs from 'fs';
import Papa from 'papaparse';
import { ChainNode } from './classes/ChainNode';

async function setup() {
  const file = './data/yob1986.txt';

  const csvText = fs.readFileSync(file);

  const data = Papa.parse(csvText.toString());

  const names = data.data.map((d: any) => {
    return d[0];
  });

  // Root node
  const root = new ChainNode('');

  names.slice(0, 20).forEach((name) => root.addText(name));
}

setup();
