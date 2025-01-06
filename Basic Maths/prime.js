let n = 3;
let flag = 0;
for (let i = 1; i * i <= n; i++) {
  if (n % i == 0) {
    flag++;
    if (n / i !== i) flag++;
  }
}
if (flag == 2) console.log("Prime");
else console.log("Not Prime");
