var count = 0;

function print(n) {
  if (n > 0) {
    count++;
    console.log(count);
    print(n - 1);
  }
}

print(5);
