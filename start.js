let bos = document.querySelectorAll(".aylana1");
console.log(bos);
let sana = 0,
  sana1 = 1;
document.querySelector(".Next").addEventListener("click", () => {
  bos[sana] = bos[sana].style.borderColor = "blue";
  sana = sana + 2;
  bos[sana1] = bos[sana1].style.backgroundColor = "blue";
  sana1 = sana1 + 2;
  if (sana == bos.length) {
    document.querySelector(".Next").style.visiblite = "Hidden";
  }
});
document.querySelector(".Prev").addEventListener("click", () => {
  sana = sana - 2;
  bos[sana] = bos[sana].style.borderColor = "grey";
  sana1 = sana1 - 2;
  bos[sana1] = bos[sana1].style.backgroundColor = "grey";
});
