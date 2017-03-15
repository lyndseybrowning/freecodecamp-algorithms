export default function titleCase(str) {
  const mapped = str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substring(1));

  return mapped.join(' ');
};
