// Merge sort is a divide and conquer algorithm that was invented by John von Neumann in 1945.
// It is a comparison-based algorithm that focuses on how to merge together two pre-sorted arrays such that the resulting array is also sorted.
function Merge(arr, low, mid, high) {
  const temp = [];
  let left = low;
  let right = mid + 1;
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}
function MergeSort(arr, low, high) {
  if (low === high) return;
  let mid = Math.floor((low + high) / 2);
  MergeSort(arr, low, mid);
  MergeSort(arr, mid + 1, high);
  Merge(arr, low, mid, high);
}
let arr = [2, 1, 6, 3, 4];
console.log("* * Merge Sorting * *");
console.log("Before Sorting :", arr);
MergeSort(arr, 0, 5);
console.log("After Sorting :", arr);
