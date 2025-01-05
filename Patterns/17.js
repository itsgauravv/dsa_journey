for (let i = 1; i <= 5; i++) {
  let line = "";
  for (let j = 0; j < 5 - i + 1; j++) {
    line += " ";
  }
  let ch = 65;
  let breakpoint = (2 * i - 1) / 2;
  for (let k = 1; k <= i * 2 - 1; k++) {
    line += `${String.fromCharCode(ch)}`;
    if (k <= breakpoint) {
      ch++;
    } else {
      ch--;
    }
  }
  console.log(line);
}
