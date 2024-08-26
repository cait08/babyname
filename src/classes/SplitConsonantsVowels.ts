export const splitConsonantsVowels = (str: string): string[] => {
  const vowels = 'aeiouAEIOU';
  let result: string[] = [];
  let currentGroup = str[0];

  for (let i = 1; i < str.length; i++) {
    if (
      (vowels.includes(str[i]) && vowels.includes(currentGroup[0])) ||
      (!vowels.includes(str[i]) && !vowels.includes(currentGroup[0]))
    ) {
      currentGroup += str[i];
    } else {
      result.push(currentGroup);
      currentGroup = str[i];
    }
  }
  result.push(currentGroup); // Push the last group
  return result;
};
