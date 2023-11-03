const e = require("express");

const userIdList = (exampleData) => {
  const idArray = exampleData.map((currentValue) => {
    return currentValue.userId;
  });
  const newArray = [];
  idArray.forEach((currentId) => {
    if (!newArray.includes(currentId)) {
      newArray.push(currentId);
    }
  });

  return newArray;
};

const fixData = (exampleData) => {
  const userIds = userIdList(exampleData);
  const array = [];
  //arrayにtitile,body,idをまとめる＋オブジェクト内のuserIdを消す
  userIds.forEach((currentId) => {
    const matchedUserData = exampleData.filter((exampleData) => {
      return exampleData.userId === currentId;
    });
    matchedUserData.forEach((currentData) => {
      delete currentData.userId;
    });
    array.push(matchedUserData);
  });
  //新しい配列resultに[{userId:1,datas:[{title:OO,~}]},{userId:1,datas:[{title:OO,~]}~]のように
  //array[obj{userId:1,datas:array[obj{title:OO,~}]},~]を型として
  //matchedUserDataとuserIdをresultに追加する
  const result = userIds.map((id, index) => {
    return { userId: id, datas: array[index] };
  });
  return result;
};

module.exports = { userIdList, fixData };
