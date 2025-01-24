// Bruteforce approach
function removeDuplicates(arr) {
  let temp = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      temp.push(arr[i]);
    }
  }
  console.log(temp);
}
removeDuplicates([1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 8, 8, 9]);

// Optimized approach
function removeDuplicatesO(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
const arr = [1, 1, 2, 2, 2, 3, 3];
const k = removeDuplicatesO(arr);

console.log("The array after removing duplicate elements is:");
for (let i = 0; i < k; i++) {
  console.log(arr[i]);
}
