function score(num) {
  if (num <= 100 && num >= 80) {
    return "合格";
  } else if (num >= 60 && num < 80) {
    return "追試";
  } else if (num >= 0 && num < 60) {
    return "不合格";
  } else if (!num) {
    return "後日受験";
  } else {
    return "0以上100未満の数字を入れてください";
  }
}

module.exports = { score };
