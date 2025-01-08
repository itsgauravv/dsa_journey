var ar = [1, 2, 3, 4, 5];

function print(l, r) {
  if (l <= r) {
    z = ar[l];
    ar[l] = ar[r];
    ar[r] = z;
    print(l + 1, r - 1);
  }
}

print(0, ar.length - 1);

console.log(ar);
