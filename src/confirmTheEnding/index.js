export default function confirmTheEnding(str, target) {
  const strLen = str.length;
  const strTarget = str.substring(strLen - target.length, strLen);

  return strTarget === target;
}
