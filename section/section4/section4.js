function echoDiv(e, g) {
  const syou = Math.floor(e / g);
  const amari = e % g;
  return "商: " + syou + ", 余り: " + amari;
}

function reply(text) {
  if (!text) {
    if (text === "") {
      return text;
    }
    return "返信なし";
  } else {
    return text;
  }
}

module.exports = { echoDiv, reply };
