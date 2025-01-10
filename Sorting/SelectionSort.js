function SelectionSort(arr, n) {
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
}
let arr = [2, 1, 6, 3, 4];
console.log("* * Selection Sorting * *");
console.log("Before Sorting :", arr);
SelectionSort(arr, 5);
console.log("After Sorting :", arr);
