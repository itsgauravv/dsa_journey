// quick sort is a divide and conquer algorithm that divides the array into two subarrays and then sorts the subarrays.

function Partition(arr, low, high) {
  const pivot = arr[low];
  let i = low;
  let j = high;
  while (i < j) {
    while (arr[i] <= pivot && i <= high - 1) {
      i++;
    }
    while (arr[j] > pivot && j >= low + 1) {
      j--;
    }
    if (i < j) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  const temp = arr[low];
  arr[low] = arr[j];
  arr[j] = temp;
  return j;
}
function QuickSort(arr, low, high) {
  if (low < high) {
    const pIndex = Partition(arr, low, high);
    QuickSort(arr, low, pIndex - 1);
    QuickSort(arr, pIndex + 1, high);
  }
}
let arr = [2, 1, 6, 3, 4];
console.log("* * Quick Sorting * *");
console.log("Before Sorting :", arr);
QuickSort(arr, 0, arr.length - 1);
console.log("After Sorting :", arr);
