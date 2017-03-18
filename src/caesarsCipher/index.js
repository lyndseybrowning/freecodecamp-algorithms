const getCharCode = (char) => {
  return char.charCodeAt(0);
};

const convertCharCode = (code) => {
  return String.fromCharCode(code);
};

export default function cipher(str) {
  const shift = 13;
  const mid = getCharCode('N');

  const ciphered = str.split('').map((char) => {
    if (/[A-Z]/.test(char)) {
      const charCode = getCharCode(char);
      const shifted = (charCode < mid) ? charCode + shift : charCode - shift;

      return convertCharCode(shifted);
    }
    return char;
  });

  return ciphered.join('');
}
