// フィボナッチ数列の項は前の2つの項の和である. 最初の2項を 1, 2 とすれば, 最初の10項は以下の通りである.
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// 数列の項の値が400万以下の, 偶数値の項の総和を求めよ.
// Note:この問題は最近更新されました. お使いのパラメータが正しいかどうか確認してください.

const fibonacciGenerator = function*(init = [0, 1]) {
  let currentA = init[0];
  let currentB = init[1];

  while (true) {
    const a = currentA;
    const b = currentB;
    const result = a + b;

    currentA = b;
    currentB = result;

    yield { a, b, result };
  }
};

const main = (max, init) => {
  const gen = fibonacciGenerator(init);
  let result = 0;

  while (true) {
    const value = gen.next().value;

    if (value.a > max) break;
    if (value.a % 2 === 0) {
      result += value.a;
    }
  }

  return result;
};

const result = main(4000000, [1, 2]);

console.log(result);
