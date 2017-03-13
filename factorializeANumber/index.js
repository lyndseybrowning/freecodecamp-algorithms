export default function factorialize(num, sum = 0) {
  if(num === 1) {
    return sum;
  }

  const calc = sum === 0 ? num : sum;
  const next = num - 1;

  return factorialize(next, calc * next);
};
