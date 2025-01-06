let a = 40;
let b = 20;
while (a > 0 && b > 0) {
  if (a > b) {
    a = a % b;
  } else {
    b = b % a;
  }
}
if (a === 0) {
  console.log(b);
} else {
  console.log(a);
}
