for (let i = 0; i < 7; i++) {
  let space = "";
  for (let j = 0; j < 7 - i - 1; j++) {
    space += " ";
  }
  for (let k = 0; k < i * 2 + 1; k++) {
    space += "*";
  }
  for (let l = 0; l < 7 - i - 1; l++) {
    space += " ";
  }
  console.log(space);
}
