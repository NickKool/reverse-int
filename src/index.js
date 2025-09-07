module.exports = function reverse(x) {
  const numStr = x.toString();

  const reversedStr = numStr.split('').reverse().join('');

  const reversedNum = parseInt(reversedStr, 10);

  return reversedNum;
};
