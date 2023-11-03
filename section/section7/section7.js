const character = {
  id: 1,
  name: "スライム",
  hp: 50,
};

const addMP = (n) => {
  return { ...character, mp: n };
};

function updateHP() {
  const uh = (character.hp -= 15);
  return { ...character, hp: uh };
}

function LookUpName() {
  return character.name;
}

module.exports = { character, addMP, updateHP, LookUpName };
