export default function truncateString(str, num) {
  const strLen = str.length;

  if (num >= strLen) {
    return str;
  }

  const ending = '...';
  const endingLen = ending.length;
  const truncated = str.substring(0, num);
  const result = truncated + ending;

  if (num <= endingLen) {
    return result;
  }

  return truncated.substring(0, truncated.length - endingLen) + ending;
}
