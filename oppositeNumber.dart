void main() {
  print(opposite(-21));
}

num opposite(num n) {
  // your code here
  if (n != -n) {
    return n *= -1;
  } else {
    return n *= 1;
  }
}
