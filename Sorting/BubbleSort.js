// bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the
function BubbleSort(arr, n) {
  for (let i = n - 1; i >= 1; i--) {
    let didSwap = 0;
    for (let j = 0; j <= i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        didSwap = 1;
      }
    }
    if (didSwap === 0) { // shows that is at any point of time, no swapping is done, then the array is already sorted. So, we can break the loop.
      return;
    }
  }
}
let arr = [2, 1, 6, 3, 4];
console.log("* * Bubble Sorting * *");
console.log("Before Sorting :", arr);
BubbleSort(arr, 5);
console.log("After Sorting :", arr);
