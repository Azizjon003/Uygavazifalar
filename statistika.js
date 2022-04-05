let twit = document.querySelector(".twitter"),
  twitNum = 0;
let you = document.querySelector(".youtube"),
  youNum = 0;
let face = document.querySelector(".facebook"),
  faceNum = 0;

let tops = you.getBoundingClientRect().top;

let toxta = setInterval(() => {
  you.textContent = youNum;
  youNum = youNum + 4;
  if (youNum === 1204) {
    clearInterval(toxta);
  }
}, 1);

let toxta1 = setInterval(() => {
  twit.textContent = twitNum;
  twitNum++;
  if (twitNum === 501) {
    clearInterval(toxta1);
    console.log("toxta");
  }
}, 1);

let toxta2 = setInterval(() => {
  face.textContent = faceNum;
  faceNum = faceNum + 2;
  if (faceNum === 752) {
    clearInterval(toxta2);
  }
}, 1);
