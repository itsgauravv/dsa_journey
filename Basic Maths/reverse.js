let n = 1234567;
let num = 0;
while (n > 0) {
  let digit = n % 10;
  num = num * 10 + digit;
  n = Math.floor(n / 10);
}
console.log(num);
