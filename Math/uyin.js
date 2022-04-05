function randomFunc() {
  let a = Math.floor(Math.random() * 10 + 0);
  let b = Math.floor(Math.random() * 10 + 0);
  return [a, b];
}

let one = document.querySelector(".one");
let two = document.querySelector(".two");
let teng = document.querySelector(".natija");
let inputNtj = document.querySelector("input");
let vaqt = document.querySelector(".vaqt");
let shart = 1;
let a = randomFunc();
let uzunligi = 50,
  sana = 10;
let foiz = [];
one.textContent = `${a[0]}`;
two.textContent = `${a[1]}`;
teng.addEventListener("click", (e) => {
  e.preventDefault();
  if (Number(inputNtj.value) === a[0] + a[1]) {
    alert("TAbriklaymiz!!!");
  } else {
    alert(`Tog'ri javob ${a[0] + a[1]}`);
    foiz.push(-1);
  }
  inputNtj.value = "";
  a = randomFunc();
  one.textContent = `${a[0]}`;
  two.textContent = `${a[1]}`;
  uzunligi = 50;
  sana = sana - 1;
});

let funct = setInterval(() => {
  vaqt.style.width = `${(uzunligi = uzunligi - 0.5)}rem`;
  if (uzunligi == 0) {
    if (Number(inputNtj.value) === a[0] + a[1]) {
      alert("TAbriklaymiz!!!");
    } else {
      alert(`Tog'ri javob ${a[0] + a[1]}`);
      foiz.push(-1);
    }
    inputNtj.value = "";
    a = randomFunc();
    one.textContent = `${a[0]}`;
    two.textContent = `${a[1]}`;
    uzunligi = 50;
    sana = sana - 1;
  }
  if (sana == 0) {
    clearInterval(funct);
    teng.disabled = "true";
    alert(`sizning Xatolaringiz ${foiz.length}`);
  }
}, 100);
