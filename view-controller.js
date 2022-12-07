import { createApp, reactive } from "https://unpkg.com/petite-vue?module";

const viewStore = reactive({
  qObjectView: {},
  playerStatView: {},
});

const reloadView = () => {
  viewStore.playerStatView = playerStatString();
  viewStore.qObjectView = qObject;
};

reloadView();

const exec = (obj, index) => {
  qAnswered(obj);
  choicesDisplayArr[index].isChoosed = true;
  setTimeout(() => {
    reloadView();
  }, 1000);
};

createApp({
  viewStore,
  exec,
}).mount();
