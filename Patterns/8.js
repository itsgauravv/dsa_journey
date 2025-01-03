for (let i = 0; i < 7; i++) {
  let space = "";
  for (let j = 0; j < i; j++) {
    space += " ";
  }
  for (let k = 0; k < 7 * 2 - i * 2 - 1; k++) {
    space += "*";
  }
  for (let l = 0; l < i; l++) {
    space += " ";
  }
  console.log(space);
}
