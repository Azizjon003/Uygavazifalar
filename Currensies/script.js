"Use strick";
// fetch(
//   "https://api.currencyapi.com/v3/latest?apikey=py8ale9OJgfyZSYpeq5zY4uq4Mfu2StdAxN86o6k"
// )
//   .then((response) => response.json())
//   .then((res) => {
//     console.log(res);
//   });
btn = document.querySelector(".btn");
fetch("https://api.fastforex.io/fetch-all?api_key=cd819107bf-af7afd5e1e-r9qw6m")
  .then((response) => response.json())
  .then((res) => {
    console.log(res);
    let firstValue = res.results;
    let sana = Object.entries(firstValue);
    let html1 = `<option class="opiton_one"></option>`;
    let nomi, nomi2;
    for (let [key, val] of sana) {
      html1 = `<option class="opiton_one">${key}</option>`;
      document.querySelector(".first").insertAdjacentHTML("afterbegin", html1);
      document.querySelector(".second").insertAdjacentHTML("afterbegin", html1);
    }
    let birinchi = document.querySelector(".birinchi");
    let ikkinchi = document.querySelector(".ikkinchi");
    birinchi.textContent = `1USD = ${firstValue.UZS.toFixed(3)} SUM`;
    ikkinchi.textContent = `1EUR = ${(firstValue.UZS / firstValue.EUR).toFixed(
      3
    )} SUM`;
    document.querySelector(".first").addEventListener("change", () => {
      nomi = document.querySelector(".first").value;
    });
    document.querySelector(".second").addEventListener("change", () => {
      nomi2 = document.querySelector(".second").value;
    });
    document.querySelector(".btn").addEventListener("click", () => {
      let summa = Number(document.querySelector(".valyuta").value);

      document.querySelector(".summa").textContent = `${mainFunction(
        nomi,
        nomi2,
        summa,
        res
      )}`;
    });
  });

function mainFunction(nomi1, nomi2, summa, obj) {
  let obj1 = new Map(Object.entries(obj.results));
  let sana, sana1, umumiy;
  sana = obj1.get(nomi1);
  sana1 = obj1.get(nomi2);
  umumiy = (sana1 / sana) * summa;
  console.log(umumiy);
  return umumiy;
}
