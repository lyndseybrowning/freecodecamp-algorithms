export default function reverseString(string) {
  if (typeof string !== 'string') {
    throw new Error('reverseString expects a string');
  }

  return string.split('').reverse().join('');
}
