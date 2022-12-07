let qObject = {};

let playerStat = {
  money: 2000,
  health: 50,
  relationship: 50,
  learning: 50,
};

let playerPerk = {};

let playerStatString = () => {
  let str = "";
  for (i in playerStat) {
    str += i + ":" + playerStat[i] + "\n";
  }
  return str;
};

let sampleString = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

function countPlayerStat(obj) {
  if ("num" in obj) {
    obj = obj.num;
    for (key in Object.keys(obj)) {
      stat = Object.keys(obj)[key];
      if (stat in playerPerk) {
        if (obj[stat] < 0) {
          playerStat[stat] += -(-obj[stat] * playerPerk[stat]);
        } else {
          playerStat[stat] += obj[stat] * playerPerk[stat];
        }
      } else {
        playerStat[stat] += obj[stat];
      }
    }
  } else {
    return;
  }
}

function qShow() {
  loadChoices(
    qObject.choices.map((element) => {
      return element.emoji;
    })
  );
  canvasState = "BUILDIN";
  setTimeout(() => {
    canvasState = "IDLE";
  }, 1000);
}

function qAnswered(obj) {
  canvasState = "BUILDOUT";
  qObject = sampleString(questionArray);
  countPlayerStat(obj);
  if ("exec" in obj) {
    obj.exec();
  }
  setTimeout(() => {
    canvasState = "IDLE";
    choicesDisplayArr = [];
    qShow();
  }, 1000);
}

qObject = qPerk;
qShow();
