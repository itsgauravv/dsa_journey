var fact = 1;

function print(n) {
  if (n > 0) {
    fact *= n;
    print(n - 1);
  }
}

print(3);
console.log(fact);
