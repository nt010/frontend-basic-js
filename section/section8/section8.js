const firstIndex = (array) => {
  return array[0];
};
const countArrayLength = (array) => {
  if (!Array.isArray(array)) {
    return "これは配列ではありません";
  } else if (array.length > 0) {
    const arrayNum = array.length;
    return "この配列は" + arrayNum + "個のデータを持っています";
  } else {
    return "この配列は空配列です";
  }
};

const extractArray = (array) => {
  return array.slice(1, 3);
};

function makeMark(mark, number) {
  const array = [];
  for (let i = 0; i <= number - 1; i++) {
    array.push(mark);
  }
  return array;
}

const onlyString = (array) => {
  const newArray = array.filter((currentValue) => {
    return typeof currentValue === "string";
  });
  return newArray;
};

const addNumber = (array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const newString = i + 1 + ": " + array[i];
    newArray.push(newString);
  }

  return newArray;
};

module.exports = {
  firstIndex,
  countArrayLength,
  extractArray,
  makeMark,
  onlyString,
  addNumber,
};

//const addNumber = (array) => {
//  const newArray = [];
//  array.forEach((currentValue, index) => {
//    const newArray = array.with(index, index + 1 + ":" + currentValue);
//  });

//  return newArray;
//};
