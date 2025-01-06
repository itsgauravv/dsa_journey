let n = 400;
let z = n;
let num = 0;
while (n > 0) {
  let digit = n % 10;
  num = digit * digit * digit + num;
  n = Math.floor(n / 10);
}
if (num == z) {
  console.log("Armstrong number");
} else {
  console.log("Not an Armstrong number");
}
