for (let i = 1; i <= 5; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += String.fromCharCode(64 + 5 - i + j);
  }
  console.log(line);
}
