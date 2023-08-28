function printPrimeFactorialization(n) {
  let factor = 2;

  while (n > 1) {
    if (n % factor === 0) {
      process.stdout.write(factor.toString() + " ");
      n /= factor;
    } else {
      if (factor === 2) {
        factor = factor + 1;
      } else factor += 2;
    }
  }
}

printPrimeFactorialization(100);
