function LeftRotateByOne(arr) {
  let temp = arr[0];
  for (i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = temp;
  console.log("Left Shift Array : ", arr);
}
LeftRotateByOne([1, 2, 3, 4, 5]);
