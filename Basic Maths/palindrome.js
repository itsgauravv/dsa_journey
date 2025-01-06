let n = 122121;
let z = n;
let num = 0;
while (n > 0) {
  let digit = n % 10;
  num = num * 10 + digit;
  n = Math.floor(n / 10);
}
if (z === num) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}
