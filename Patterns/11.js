for (let i = 1; i <= 5; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    let pat = "0";
    if ((i + j) % 2 === 0) pat = "1";
    line += pat + " ";
  }
  console.log(line);
}
