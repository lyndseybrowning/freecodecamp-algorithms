export default function findLongestWord(sentence) {
  const longestWord = sentence.split(' ').reduce((longest, current) => {
    const len = current.length;
    return (len > longest) ? len : longest;
  }, 0);

  return longestWord;
};
