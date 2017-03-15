export default function repeatString(str, num) {
  if(num <= 0) {
    return '';
  }

  return str.repeat(num);
}
