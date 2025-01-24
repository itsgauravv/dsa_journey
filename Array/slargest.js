function Largest(arr) {
  let largest = arr[0];
  let slargest = -1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      slargest = largest;
      largest = arr[i];
    }
    if (arr[i] < largest && arr[i] > slargest) {
      slargest = arr[i];
    }
  }
  console.log("Second Largest number is: ", slargest);
}
Largest([4, 7, 1, 3, 8, 5, 14]);
