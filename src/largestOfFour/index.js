export default function largestOfFour(arr) {
  const largest = arr.map((subArray) => {
    const sorted = subArray.sort((a, b) => a - b);
    return subArray.pop();
  });

  return largest;
}
