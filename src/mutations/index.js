export default function mutation(arr) {
  const mapped = arr.map(item => item.toLowerCase());
  const first = mapped[0];
  const second = mapped[1];

  return second.split('').every(item => first.includes(item));
}
