import reverseString from '../reverseAString';

export default function palindrome(str) {
  const input = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const reversed = reverseString(input);

  return reversed === input;
};
