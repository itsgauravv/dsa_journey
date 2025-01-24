function LeftRotateByD(arr, n, d) {
  d = d % n;
  const temp = [];
  for (let i = 0; i < d; i++) {
    temp.push(arr[i]);
  }
  for (let i = d; i < n; i++) {
    arr[i - d] = arr[i];
  }
  for (let i = n - d; i < n; i++) {
    arr[i] = temp[i - (n - d)];
  }
  console.log(arr);
}
LeftRotateByD([1, 2, 3, 4, 5], 5, 3);

// Here the space complexity is O(d), but if the interviewer says to remove this extra space, then we can use the below approach.
// Just reverse the array from 0 to d-1 i.e. 1,2,3 -> 3,2,1
// Then reverse the remaining elements i.e. 4,5 -> 5,4
// Then reverse the whole array i.e. 3,2,1,5,4 -> 4,5,1,2,3 // Gives the same result as the above approach.
// Time Complexity: O(2n) for this approach and Space Complexity: O(1) which is OPTIMAL!!!
