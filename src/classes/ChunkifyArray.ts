export const chunkifyArray = <T>(array: T[], chunkSize: number) => {
  let results: T[][] = [];

  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    results.push(chunk);
  }

  return results;
};
