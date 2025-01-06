let n = 10;
let d = [];

for (let i = 1; i * i <= n; i++) {
  if (n % i == 0) {
    d.push(i);
    if (n / i != i) {
      d.push(n / i);
    }
  }
}
console.log("Divisors of " + n + " are:", ...d.sort((a, b) => a - b));
