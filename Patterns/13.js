let count = 0;
for (let i = 1; i <= 5; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    count++;
    line += `${count} `;
  }
  console.log(line);
}
