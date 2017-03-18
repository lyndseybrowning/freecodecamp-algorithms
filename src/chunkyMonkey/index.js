export default function chunkArrayInGroups(arr, size) {
  let subGroup = [];

  const groups = arr.reduce((group, current, index) => {
    if (index % size === 0) {
      subGroup = [];
      group.push(subGroup);
    }
    subGroup.push(current);

    return group;
  }, []);

  return groups;
}
