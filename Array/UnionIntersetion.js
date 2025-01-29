// find the union and intersection of two sorted arrays

// Union
const arr1 = [1, 2, 4, 5, 6];
const arr2 = [2, 3, 5, 7, 8];

const n1 = arr1.length;
const n2 = arr2.length;

let i = 0;
let j = 0;

const union = [];
const intersection = [];

// while (i < n1 && j < n2) {
//   if (arr1[i] < arr2[j]) {
//     if (union.length === 0 || union[union.length - 1] !== arr1[i])
//       union.push(arr1[i]);
//     i++;
//   } else {
//     if (union.length === 0 || union[union.length - 1] !== arr2[j])
//       union.push(arr2[j]);
//     j++;
//   }
// }
// while (i < n1) {
//   if (union.length === 0 || union[union.length - 1] !== arr1[i])
//     union.push(arr1[i]);
//   i++;
// }
// while (j < n2) {
//   if (union.length === 0 || union[union.length - 1] !== arr2[j])
//     union.push(arr2[j]);
//   j++;
// }
// console.log("Union:", union);
// time complexity: O(n1 + n2) and space complexity: O(n1 + n2)

// Intersection
while (i < n1 && j < n2) {
  if (arr1[i] === arr2[j]) {
    intersection.push(arr1[i]);
    j++;
  }
  i++;
}
console.log("Intersection:", intersection);
