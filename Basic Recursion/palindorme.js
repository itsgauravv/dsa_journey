var str = "madem";

function print(l, r) {
  if (l <= r) {
    if (str[l] !== str[r]) {
      console.log("Not a palindrome");
      return;
    }
    print(l + 1, r - 1);
  } else {
    console.log("Palindrome");
  }
}

print(0, str.length - 1);
