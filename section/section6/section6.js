function sum(a, b) {
  let result = 0;
  let min, max;

  if (a < b) {
    min = a;
    max = b;
  } else {
    min = b;
    max = a;
  }

  for (let i = min; i <= max; i++) {
    result += i;
  }
  return result;
}

module.exports = { sum };
