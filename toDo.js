// Keraklilar
let inputKir = document.querySelector(".input1");
let bos = document.querySelector(".submit1");
let arr = [];
let sana = 1;
///create element
let yangi = document.createElement("div");
let textCont = document.createElement("p");
let textDelete = document.createElement("p");
// class list add
textCont.classList.add("sana");
textDelete.classList.add("delete");
yangi.classList.add("qoshilgan");
// Functions
let chiqar = bos.addEventListener("click", (e) => {
  e.preventDefault();
  let val = inputKir.value;
  arr.push(val);
  textCont.innerHTML = `${sana++}:${arr[arr.length - 1]}`;
  textDelete.innerHTML = "Delete";
  yangi.prepend(textCont);
  yangi.append(textDelete);
  document.querySelector("main").append(yangi.cloneNode(true));

  inputKir.value = "";
});

setInterval(() => {
  document.querySelector("main").addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
      e.target.parentElement.remove();
    }
  });
}, 3000);
