function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
if (isSorted([1, 2, 3, 4, 5])) {
  console.log("Array is sorted");
} else {
  console.log("Array is not sorted");
}
