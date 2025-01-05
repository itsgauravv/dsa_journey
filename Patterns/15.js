for (let i = 1; i <= 5; i++) {
  let line = "";
  for (let j = 1; j <= 5 - i + 1; j++) {
    line += String.fromCharCode(64 + j);
  }
  console.log(line);
}
