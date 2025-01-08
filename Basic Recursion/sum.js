var sum = 0;

function print(n) {
  if (n > 0) {
    sum += n;
    print(n - 1);
  }
}

print(5);
console.log(sum);
