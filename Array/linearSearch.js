const arr = [6, 7, 8, 4, 1];
const k = 4;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === k) {
    console.log("Element found at index:", i);
    break;
  }
}
