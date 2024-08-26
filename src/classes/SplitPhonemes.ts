export function splitIntoPhonemes(str: string): string[] {
  const phonemes = [
    'th',
    'sh',
    'ch',
    'ph',
    'wh',
    'ck',
    'qu',
    'ng',
    'nk',
    'a',
    'e',
    'i',
    'o',
    'u',
    'b',
    'c',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'm',
    'n',
    'p',
    'r',
    's',
    't',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  let result: string[] = [];
  let i = 0;

  while (i < str.length) {
    let found = false;
    for (let phoneme of phonemes) {
      if (str.startsWith(phoneme, i)) {
        result.push(phoneme);
        i += phoneme.length;
        found = true;
        break;
      }
    }
    if (!found) {
      result.push(str[i]);
      i++;
    }
  }

  return result;
}
