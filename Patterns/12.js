for (let i = 1; i <= 4; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += j;
  }
  for (let j = 1; j <= 2 * (4 - i); j++) {
    line += " ";
  }
  for (let l = i; l >= 1; l--) {
    line += l;
  }
  console.log(line);
}
