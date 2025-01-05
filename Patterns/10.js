const n = 5;

for (let i = 1; i <= n * 2 - 1; i++) {
  let line = "";
  let condition = i;
  if (i > n) condition = n * 2 - i;
  for (let j = 1; j <= condition; j++) {
    line += "* ";
  }
  console.log(line);
}
