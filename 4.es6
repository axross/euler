// 左右どちらから読んでも同じ値になる数を回文数という. 2桁の数の積で表される回文数のうち, 最大のものは 9009 = 91 × 99 である.
// では, 3桁の数の積で表される回文数の最大値を求めよ.

const isPalindromic = value => {
  for (let i = 0; i < Math.ceil(value.length / 2); ++i) {
    if (value[i] !== value[value.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

const cadentingProductGenerator = function*(first) {
  for (let a = first; a > Math.floor(first / 2); --a) {
    for (let b = first; b > Math.floor(first / 2); --b) {
      yield a * b;
    }
  }
};

const main = digits => {
  const palindromics = [];
  const gen = cadentingProductGenerator(Math.pow(10, digits) - 1);

  while (true) {
    const result = gen.next();
    const value = result.value;

    if (isPalindromic(String(value)) && palindromics.indexOf(value) === -1) {
      palindromics.push(value);
    }

    if (result.done) break;
  }

  return palindromics.reduce((a, b) => {
    return b > a ? b : a;
  }, 0);
};

const result = main(3);

console.log(result);
