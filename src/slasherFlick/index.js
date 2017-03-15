export default function slasher(arr, num) {
  return arr.filter((item, i) => i > num - 1);
}
