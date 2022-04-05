// let Person = function (name, age, surname) {
//   this.name = name;
//   this.age = age;
//   this.surname = surname;
// };

// Person.prototype.Birthday = function () {
//   return 2022 - this.age;
// };
// let Teacher = function (name, age, surname, fan, oylik) {
//   Person.call(this, name, age, surname);
//   this.fan = fan;
//   this.oylik = oylik;
// };

// Teacher.prototype = Object.create(Person.prototype);

// Teacher.prototype.calcOylik = function () {
//   return this.oylik / 11500;
// };

// console.log(L);
// console.log(L.Birthday());
// console.log(L.calcOylik());

// class Person {
//   constructor(name, age, surname, salom) {
//     this.name = name;
//     this.age = age;
//     this.surname = surname;
//     this.salom = salom;
//     this.utkazmalar = [];
//   }
//   Birthday() {
//     return 2022 - this.age;
//   }
// }
// class Teacher extends Person {
//   constructor(name, age, surname, fan, oylik) {
//     super(name, age, surname);
//     this.fan = fan;
//     this.oylik = oylik;
//   }
//   calcOylik() {
//     return this.oylik / 11500;
//   }
//   uzgar() {
//     this.utkazmalar = [2, 45, 65];
//   }
// }
// let l = new Teacher("Umid", 25, "Rustamov", "Dasturash", 4000000);
// l.uzgar();
// console.log(l);
// console.log(L.Birthday());
// console.log(L.calcOylik());

/// Object create method
let Person = {
  hisobla() {
    return 2022 - this.yosh;
  },
  qosh(ism, yosh) {
    this.ism = ism;
    this.yosh = yosh;
    return this.yosh;
  },
};

const Student = Object.create(Person);
console.log(Student.qosh("Javlon", 23));
console.log(Student);
Student.qosh = function (ism, yosh, fakultet) {
  Person.qosh.call(this, ism, yosh);
  this.fakultet = fakultet;
  return this.ism;
};

let aziz = Object.create(Student);
// aziz.qosh("Aziz", 19, "AX");
console.log(aziz.qosh("Aziz", 19, "AX"));
console.log(aziz);
console.log(aziz.hisobla());

class univers {
  #name;
  constructor(name, soni) {
    this.#name = name;
    this.soni = soni;
    this.pin = 1596;
  }
  #parolniUzagrtir(val) {
    this.#name = val;
  }

  parolniUzgartirU(val) {
    this.#parolniUzagrtir(val);
  }
}
class universT extends univers {
  constructor(name, soni, tili) {
    super(name, soni);
    this.tili = tili;
  }
}
let tatu = new univers("TATU", 1000);
let tatuT = new universT("TATU", 1000, "uzbek");
tatu.parolniUzgartirU(1258);
tatuT.parolniUzgartirU("TUIT158965");
tatuT.name = "salom";
console.log(tatu);
console.log(tatuT);
