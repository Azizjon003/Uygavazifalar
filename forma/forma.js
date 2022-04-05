let kun = document.querySelector(".kun");
let soat = document.querySelector(".soat");
let minut = document.querySelector(".minut");
let sekund = document.querySelector(".sekund");
let taymer = prompt("Day hour minut sekund");
let arr = taymer.split(" ").map((val) => {
  return Number(val);
});
let son = arr[3],
  min = arr[2],
  hour = arr[1],
  day = arr[0];
sekund.textContent = `${arr[3]}`;
minut.textContent = `${arr[2]}`;
soat.textContent = `${arr[1]}`;
kun.textContent = `${arr[1]}`;
let toxtat = setInterval(() => {
  sekund.textContent = `${son--}`;
  if (son == -1) {
    minut.textContent = `${min--}`;
    son = 60;
    if (min == -1) {
      min = 60;
      soat.textContent = `${hour--}`;
    }
    if (hour == -1) {
      hour = 60;
      kun.textContent = `${day--}`;
    }
    if (day == -1) {
      clearInterval(toxtat);
      minut.textContent = `${0}`;
      soat.textContent = `${0}`;
      sekund.textContent = `${0}`;
    }
  }
}, 1);
