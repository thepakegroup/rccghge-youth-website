export const Truncate = (text: string, length: number) => {
  if (text.length > length) {
    return `${text.slice(0, length)}...`;
  }
  return text;
};
