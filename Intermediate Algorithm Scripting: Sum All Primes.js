function sumPrimes(num) {
  let newArray = [];

  for (let i = 1; i <= num; i++) {
    newArray.push(i);
  }

  const isPrime = num => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  };

  return newArray.filter(isPrime).reduce((a, b) => a + b, 0);
}

sumPrimes(977);
