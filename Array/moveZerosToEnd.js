// its like we will have 2 pointers one pointing to a zero and other pointing to a non zero element and then iterate over the array and swap the elements at the pointers such that all zeros are swappes at the end

// this is still not the optimal solution as we are iterating over the array twice
const arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
let j = -1;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    j = i;
    break;
  }
}

if (j == -1) return arr;

for (let k = j + 1; k < arr.length; k++) {
  if (arr[k] !== 0) {
    let temp = arr[k];
    arr[k] = arr[j];
    arr[j] = temp;
    j++;
  }
}
// here is the optimal solution ->
// Function to move all zeros in the array to the end while maintaining the relative order of non-zero elements
var moveZeroes = function (nums) {
  let nonzero = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[nonzero]] = [nums[nonzero], nums[i]];
      nonzero++;
    }
  }
};
