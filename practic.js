// let Car = function (nomi, rangi, narxi) {

//   this.nomi = nomi;
//   this.rangi = rangi;
//   this.narxi = narxi;
// };
// Car.prototype.narxiSum = function () {
//   console.log(this.narxi * 11500);
// };
// let spark = new Car("spark", "qora", 8000);
// let Cobalt = new Car("Cobalt", "qora", 11858);
// console.log(Cobalt);
// Cobalt.narxiSum();
// console.log(Car.prototype.__proto__);
// class Car {
//   constructor(carName, carColor, carCost) {
//     this.name = carName;
//     this.color = carColor;
//     this.cost = carCost;
//   }
//   DollarToUsz() {
//     return this.cost * 11500;
//   }
// }
// let cobalt = new Car("Cobalt", "Qora", 15000);
// let spark = new Car("Spark", "Oq", 7500);
// console.log(cobalt.DollarToUsz());
// console.log(spark.DollarToUsz());
// console.log(cobalt);
// console.log(spark);

// class bankAccount {
//   #age;
//   #pin;

//   constructor(name, age, pin) {
//     this.name = name;
//     this.#age = age;
//     this.#pin = pin;
//     this.utkazmalar = [];
//   }
//   set #depozit(value) {
//     this.utkazmalar.push(value);
//   }

//   set #yechibOlish(value) {
//     this.utkazmalar.push(-1 * value);
//   }

//   get #qarzOlish() {
//     let sum = 0;
//     for (let i = 0; i < this.utkazmalar.length; i++) {
//       if (this.utkazmalar[i] > 0) sum = this.utkazmalar[i] + sum;
//     }
//     return sum * 0.1;
//   }
//   get PinOlish() {
//     return this.#pin;
//   }
//   get yoshOlish() {
//     return this.#age;
//   }
//   depozitOchish(val) {
//     return (this.#depozit = val);
//   }
//   yechibOlishniOchish(val) {
//     return (this.#yechibOlish = val);
//   }
//   pinniOzgartir(val) {
//     return (this.#pin = val);
//   }
//   qarzOlishniOchish() {
//     return this.#qarzOlish;
//   }
// }

// const azizjon = new bankAccount("Azizjon", 19, 1111);
// console.log(azizjon.name);
// azizjon.depozitOchish(125);
// azizjon.depozitOchish(250);
// azizjon.yechibOlishniOchish(1596);
// console.log(azizjon.utkazmalar);
// azizjon.pinniOzgartir(5555);
// console.log(azizjon.qarzOlishniOchish());
// console.log(azizjon);

// const phone = {
//   init1(name, price) {
//     this.name = name;
//     this.price = price;
//   },
// };
// let nokia = Object.create(phone);
// nokia.name = "nokia 1280";
// nokia.price = 150;
// console.log(nokia);
// const BankAcount = function (name, age, pin, jinsi) {
//   this.name = name;
//   this.age = age;
//   this.jinsi = jinsi;
//   this.pin = pin;
//   this.language = "Uz";
// };
// BankAcount.prototype.pinniOzgartir = function (val) {
//   return (this.pin = val);
// };
// BankAcount.prototype.ismniUzgartir = function (val) {
//   return (this.name = val);
// };
// BankAcount.prototype.jinsiniUzgartir = function (val) {
//   return (this.jinsi = val);
// };
// BankAcount.prototype.birthdayToSeconds = function () {
//   return this.age * 365.25 * 24 * 60 * 60;
// };
// let Azizjon = new BankAcount("Azizjon", 19, 1596, "erkak");
// Azizjon.pinniOzgartir(159678);
// Azizjon.ismniUzgartir("Ma'mura");
// Azizjon.jinsiniUzgartir("ayol");
// console.log(Azizjon.birthdayToSeconds());
// console.log(Azizjon);

// class BankAcount {
//   #surname;
//   #age;
//   #pin;
//   #utkazmalar;
//   constructor(name, surname, age) {
//     this.name = name;
//     this.#surname = surname;
//     this.#age = age;
//     this.#pin = 1596;
//     this.#utkazmalar = [];
//   }
//   get #getSurname() {
//     return this.#surname;
//   }
//   ozgartirSurname(val) {
//     return (this.#surname = val);
//   }
//   get openSurname() {
//     return this.#getSurname;
//   }
//   get #getAgeM() {
//     return this.#age;
//   }
//   uzgartirAge(val) {
//     this.#age = val;
//   }
//   get openAge() {
//     return this.#getAgeM;
//   }
//   get #getPin() {
//     return this.#pin;
//   }
//   UzgartirPin(val) {
//     return (this.#pin = val);
//   }
//   get openPin() {
//     return this.#getPin;
//   }
//   otkazamPushStp(val) {
//     return this.#utkazmalar.push(val);
//   }
//   otkazamPushBnk(val) {
//     return this.#utkazmalar.push(val * -1);
//   }
//   get openUtkazma() {
//     return this.#utkazmalar;
//   }
//   qarzOl() {
//     let sum = 0;
//     for (let i = 0; i < this.#utkazmalar.length; i++) {
//       if (this.#utkazmalar[i] > 0) sum += this.#utkazmalar[i];
//     }
//     return `siz ${sum * -1}so'm miqdorda qarz olaolasiz `;
//   }
// }

// let azizjon = new BankAcount("Azizjon", "Aliqulov", 19);
// azizjon.ozgartirSurname("Aliqulov'");
// azizjon.uzgartirAge(18);
// azizjon.UzgartirPin(2568481596);
// azizjon.otkazamPushStp(517);
// azizjon.otkazamPushStp(517);
// azizjon.otkazamPushStp(517);
// azizjon.otkazamPushStp(517);
// azizjon.otkazamPushBnk(158);
// azizjon.otkazamPushBnk(158);
// azizjon.otkazamPushBnk(158);
// azizjon.otkazamPushBnk(158);
// console.log(azizjon.openUtkazma);
// console.log(azizjon.qarzOl());
// console.log(azizjon.openAge);
// console.log(azizjon.openSurname);
// console.log(azizjon.openPin);
// console.log(azizjon);

////////////////////////////////// dates////////////

///

// let sana = new Date();
// let sana1 = 10 * 86400000 + sana.getTime();
// let options = {
//   day: "numeric",
//   weekday: "long",
//   month: "numeric",
//   year: "numeric",
// };
// let sana2 = new Intl.DateTimeFormat("uz-Uz", options).format();
// console.log(sana2);

// console.log(swap("Salom"));

// function nbDig(n, d) {
//   let kvadrat = 0,
//     counter = 0;
//   let d1 = String(d),
//     kvadrat1 = String(kvadrat);
//   for (let i = 1; i <= n; i++) {
//     kvadrat = i * i;
//     kvadrat1 = String(kvadrat);

//     for (let j = 0; j <= kvadrat1.length; j++) {
//       if (d1 === kvadrat1[j]) {
//         counter++;
//       }
//     }
//   }
//   console.log(counter);
// }
// nbDig(25, 1);
// function filterLongWords(sentence, n) {
//   let filterStr = sentence.split(" ");
//   let arr = [];
//   for (let i = 0; i < filterStr.length; i++) {
//     if (filterStr[i].length > n) arr.push(filterStr[i]);
//   }
//   return arr;
// }
// console.log(filterLongWords("The quick brown fox jumps over the lazy dog", 4));

// function filter_list(l) {
//   let arr = [];
//   for (let i = 0; i < l.length; i++) {
//     if (typeof l[i] === "number" && l[i] >= 0) arr.push(l[i]);
//   }
//   return arr;
// }
// console.log(filter_list([1, 2, "a", "b", 0]));
// function battle(x, y) {
//   let xYig = 0;
//   for (let i = 0; i < x.length; i++) {
//     xYig = xYig + x[i].charCodeAt(x[i]);
//   }
//   // console.log(xYig);
//   let yYig = 0;
//   for (let i = 0; i < y.length; i++) {
//     yYig = yYig + y[i].charCodeAt(y[i]);
//   }
//   if (xYig > yYig) return x;
//   if (xYig < yYig) return y;
//   if (xYig == yYig) return "Tie";
//   // console.log(yYig);
// }
// console.log(battle("ONE", "TWO"));
// let a = 8;
// let b = "";
// let c = String(a);
// if (c.length == 1) {
//   if (a % 4 === 0 && a % 100 !== 0) {
//     b = "12/09/000" + a;
//   } else {
//     if (a % 400 === 0) {
//       b = "12/09/000" + a;
//     } else {
//       b = "13/09/000" + a;
//     }
//   }
// }
// if (c.length == 2) {
//   if (a % 4 === 0 && a % 100 !== 0) {
//     b = "12/09/00" + a;
//   } else {
//     if (a % 400 === 0) {
//       b = "12/09/00" + a;
//     } else {
//       b = "13/09/00" + a;
//     }
//   }
// }

// if (c.length == 3) {
//   if (a % 4 === 0 && a % 100 !== 0) {
//     b = "12/09/0" + a;
//   } else {
//     if (a % 400 === 0) {
//       b = "12/09/0" + a;
//     } else {
//       b = "13/09/0" + a;
//     }
//   }
// }
// if (c.length == 4) {
//   if (a % 4 === 0 && a % 100 !== 0) {
//     b = "12/09/" + a;
//   } else {
//     if (a % 400 === 0) {
//       b = "12/09/" + a;
//     } else {
//       b = "13/09/" + a;
//     }
//   }
// }

// console.log(b);
// let atribut = document.querySelector("img");
// let sana = atribut.getAttribute("src");
// console.log(sana);
// let style = getComputedStyle(atribut).width;
// console.log(style);
// atribut.alt = "Oybek";
// console.log(atribut.alt);
// atribut.className = "Oybek";
// console.log(atribut.className);

// let y = window.pageYOffset;
// let x = window.pageXOffset;
// let width = atribut.clientWidth;
// let height = atribut.clientHeight;
// console.log(width);
// console.log(height);
// console.log(y);
// console.log(x);

// let divImg = document.getElementById("div");
// let bounding = divImg.getBoundingClientRect();
// console.log(bounding);
// let ancer = document.querySelector(".a");
// ancer.addEventListener("mouseenter", () => {
//   // divImg.scrollIntoView({ behavior: "smooth" });
//   ancer.textContent = " salom dunyo  salom dunyo salom dunyo";
// });
// ancer.removeEventListener("mouseenter", () => {
//   ancer.textContent = " bosib Kiring";
// });

// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// let max = arr[0];
// let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   sum = arr[i] + sum;
//   if (max < arr[i]) max = arr[i];
//   if (min > arr[i]) min = arr[i];
// }
// let maxSum = sum - max;
// let minSum = sum - min;

// console.log(`${maxSum} ${minSum}`);
// let arr = [1, 2, 3, 4, 3, 2, 1];
// let n = 3;
// let son = 0;
// let counter = 0;
// for (let i = 0; i <= arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[i] == arr[j] && i == j) {
//       arr.splice(arr[i], 1);
//       arr.splice(arr[j], 1);
//       counter++;
//     }
//   }
// }
// console.log(arr);
// let arr = [3, 5, 5, 2, 2, 3];
// arr.sort((a, b) => b - a);
// let ozgar = arr[1];
// console.log(ozgar);

// let son = 2;
// let counter = 0;
// if (son > 0) {
//   for (let i = 1; i <= son; i++) {
//     if (son % i == 0) {
//       counter++;
//     }
//   }
//   counter = counter * 4;
// } else {
//   son = Math.abs(son);
//   for (let i = 1; i <= son; i++) {
//     if (son % i == 0) {
//       counter++;
//     }
//   }
//   counter = counter * 4;
// }
// let a = 36;
// let sum = 0;
// for (let i = 0; i <= a; i++) {
//   sum += i;
// }
// console.log(sum);

// class Mashina {
//   constructor(name, pull) {
//     this.name = name;
//     this.pull = pull;
//   }
//   nomniOl() {
//     // console.log(this.name);
//     return this;
//   }
//   dollarToUsz() {
//     console.log(this.pull * 11500);
//     return this;
//   }
//   nomniUzgartir(val) {
//     this.name = val;
//     console.log(this.name);
//   }
// }
// let cobalt = new Mashina("Cobalt", 8888);
// cobalt.nomniOl().dollarToUsz().nomniUzgartir("Gentra");
// console.log(cobalt);

let a = "sherzod".split("");
// b = a.reverse();
// console.log(b);
// for (let i = a.length; i >= 0; i--) {
//   if (a[i] == "h" && a[i - 1] == "s") {
//     a[i - 1] = "h";
//     a[i] = "s";
//   }
//   if (a[i] == "g" && a[i - 1] == "n") {
//     a[i - 1] = "g";
//     a[i] = "n";
//   }
//   if (a[i] == "h" && a[i - 1] == "c") {
//     a[i - 1] = "c";
//     a[i] = "h";
//   }
// }
// let b = a.reverse().join("");
// console.log(b);
let n = 75;
let k = 0;
let m = Math.sqrt(n),
  katta;
if (n == 0) {
  katta = -1;
} else {
  n = Math.abs(n);
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      k++;
    }
  }
  if (Number.isInteger(m)) {
    katta = k + 1;
  } else {
    katta = k;
  }
}

console.log(katta);
