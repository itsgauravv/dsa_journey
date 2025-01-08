function print(a, b, n) {
  if (n > 0) {
    console.log(a);
    print(b, a + b, n - 1);
  }
}

print(0, 1, 10);
