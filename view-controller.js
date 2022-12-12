import { createApp, reactive } from "https://unpkg.com/petite-vue?module";

const viewStore = reactive({
  qObjectView: {},
  playerStatView: {},
  playerPerkView: {},
  dayNumView: 0,
  isCanvasIdle: true,
  isCanvasEnd: false,
});

const reloadView = () => {
  viewStore.playerStatView = playerStatString();
  viewStore.qObjectView = qObject;
  viewStore.playerPerkView = playerPerk;
  viewStore.dayNumView = dayNum;
  viewStore.isCanvasIdle = canvasState == "IDLE";
  viewStore.isCanvasEnd = canvasState == "END";
  setTimeout(() => {
    reloadView();
  }, 100);
};

const choiceNumToString = (numobj) => {
  if (!numobj) {
    return;
  }
  str = "";
  for (i in numobj) {
    if (i != "money") {
      if (numobj[i] > 0) {
        if (numobj[i] < 5) {
          str += "Slightly increses " + i + ". ";
        } else {
          str += "Highly increses " + i + ". ";
        }
      } else {
        if (numobj[i] < -5) {
          str += "Highly decreses " + i + ". ";
        } else {
          str += "Slightly decreses " + i + ". ";
        }
      }
    } else {
      str += "Costs " + -numobj[i];
    }
  }
  return str;
};

reloadView();

const exec = (obj, index) => {
  qAnswered(obj);
  choicesDisplayArr[index].isChoosed = true;
};

createApp({
  viewStore,
  exec,
  choiceNumToString,
}).mount();
