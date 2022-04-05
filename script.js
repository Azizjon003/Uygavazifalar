"use strick";
let norma = document.querySelectorAll(".rasm");
let hisob = 0;
for (let i = 0; i < norma.length; i++) {
  norma[i].addEventListener("click", () => {
    if (true) {
      norma[i].classList.add("kattalashtir");
      hisob = i;
    }
    for (let j = 0; j < norma.length; j++) {
      if (hisob !== j) {
        norma[j].classList.remove("kattalashtir");
      }
    }
  });
}
