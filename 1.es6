// 10未満の自然数のうち, 3 もしくは 5 の倍数になっているものは 3, 5, 6, 9 の4つがあり, これらの合計は 23 になる.
// 同じようにして, 1000 未満の 3 か 5 の倍数になっている数字の合計を求めよ.

const main = limit => {
  let total = 0;

  for (let i = 1; i < limit; ++i) {
    if (i % 5 === 0) {
      total += i;
    } else if (i % 3 === 0) {
      total += i;
    }
  }

  return total;
};

const result = main(1000);

console.log(result);
