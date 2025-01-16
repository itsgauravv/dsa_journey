// insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time.
function InsertionSort(arr, n) {
  for (let i = 0; i < n; i++) {
    // take the boxes one by one like 1, 2, 3, 4, 5, 6
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      // swap all the boxes numbers between these boxes until every left box is smaller than every right box
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j--;
    }
  }
}
let arr = [2, 1, 6, 3, 4];
console.log("* * Insertion Sorting * *");
console.log("Before Sorting :", arr);
InsertionSort(arr, 5);
console.log("After Sorting :", arr);
