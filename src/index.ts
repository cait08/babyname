import fs from 'fs';
import Papa from 'papaparse';
import { ChainNode } from './classes/ChainNode';

async function setup() {
  const file = './data/yob1886.txt';

  const csvText = fs.readFileSync(file);

  const data = Papa.parse(csvText.toString());

  const names = data.data
    //
    .slice(0, 1000)
    //
    .map((d: any) => {
      return d[0];
    })
    .map((n) => n.toLowerCase());

  // Root node
  const root = new ChainNode('', 0);

  for (const name of names) {
    root.addText(name);
  }

  for (let i = 0; i < 300; i++) {
    const newName = root.getText('');
    if (names.indexOf(newName) === -1) {
      console.log(newName);
    }
  }
}

setup();
