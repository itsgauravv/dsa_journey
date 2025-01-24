function Largest(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log("Largest number is: ", max);
}
Largest([4, 7, 1, 3, 8, 5]);
