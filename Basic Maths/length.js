let n = 7789;
let count = 0;
while (n > 0) {
  n = Math.floor(n / 10);
  count++;
}
console.log(count);
