"use strick";
let tepaga = document.querySelector(".tepaga");
let pastga = document.querySelector(".pastga");
let birinchiQism = document.querySelectorAll(".birinchi_qism");
let ikkinchi_qism = document.querySelectorAll(".ikkinchi_qism");
document.querySelector(".tepaga").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".yashirin1").style.display = "flex";
  document.querySelector(".yashirin").style.display = "none";
  document.querySelector(".yashirin1").style.transform = "tranlateY(-100vh)";
});

document.querySelector(".pastga").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".yashirin3").style.display = "flex";
  document.querySelector(".yashirin").style.display = "none";
  document.querySelector(".yashirin3").style.transform = "tranlateY(0)";
});

let rasm = document.createElement("div");
let classAdd = rasm.classList.add("birinchi_qism");
rasm.innerHTML = `<p> salom Dunyo qalaysan </p>`;
console.log(rasm);
let tanla = document.querySelector(".yashirin");
tanla.prepend(rasm.cloneNode(true));
tanla.append(rasm.cloneNode(true));
document.querySelector(".yashirin3").remove();
let ozgaruvchi = window.getComputedStyle(tanla).height;
console.log(ozgaruvchi);
