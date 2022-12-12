let qObject = {};
let qNum = 0;
let dayNum = 1;

let playerStat = {
  money: 300,
  health: 15,
  relationship: 15,
  learning: 15,
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
  qNum++;
  dayNum = Math.floor((qNum - 1) / 3) + 1;
  countPlayerStat(obj);
  if ("exec" in obj) {
    obj.exec();
  }
  qObject = sampleString(questionArray);
  if (
    qNum == 4 ||
    qNum == 7 ||
    qNum == 10 ||
    qNum == 13 ||
    qNum == 16 ||
    qNum == 19
  ) {
    canvasState = "BUILDOUT";
    setTimeout(() => {
      canvasState = "DAYEND";
    }, 2000);
    setTimeout(() => {
      canvasState = "IDLE";
      choicesDisplayArr = [];
      qShow();
    }, 4000);
  } else if (
    qNum == 21 ||
    playerStat.money <= 0 ||
    playerStat.health <= 0 ||
    playerStat.relationship <= 0 ||
    playerStat.learning <= 0
  ) {
    canvasState = "END";
  } else {
    canvasState = "BUILDOUT";
    setTimeout(() => {
      canvasState = "IDLE";
      choicesDisplayArr = [];
      qShow();
    }, 2000);
  }
}

qObject = qPerk;
qShow();
