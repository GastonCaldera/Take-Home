export const textCut = (str: string, n: number = 40) => {
  if (str?.length > n) {
    let newStr = str?.substring(0, n - 1).trim();
    if (newStr.endsWith('.') || newStr.endsWith(',')) {
      newStr = newStr.slice(0, -1).trim();
      if (newStr.endsWith('.') || newStr.endsWith(',')) {
        newStr = newStr.slice(0, -1).trim();
      }
    }
    newStr = newStr + '...';
    return newStr;
  }
  return str;
};
