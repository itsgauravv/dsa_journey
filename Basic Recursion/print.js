var name = "gaurav";

function print(n) {
  if (n > 0) {
    console.log(name);
    print(n - 1);
  }
}

print(5);
