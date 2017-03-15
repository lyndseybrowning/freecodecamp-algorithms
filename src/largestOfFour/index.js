export default function largestOfFour(arr) {
  const largest = arr.map((subArray) => {
    const sortedArray = subArray.sort((a, b) => a - b);
    return sortedArray.pop();
  });

  return largest;
}
