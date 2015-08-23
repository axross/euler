// 13195 の素因数は 5, 7, 13, 29 である.
// 600851475143 の素因数のうち最大のものを求めよ.

const computeMinimumPrimeFactor = number => {
  for (let i = 2; i <= number; ++i) {
    if (number % i === 0) return i;
  }

  return 0;
};

const computeAllPrimeFactors = number => {
  const primes = [];
  let current = number;

  while (true) {
    const prime = computeMinimumPrimeFactor(current);

    if (prime === 0) break;

    current /= prime;
    primes.push(prime);
  }

  return primes;
};

const result = computeAllPrimeFactors(600851475143);

console.log(result[result.length - 1]);
