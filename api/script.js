'Use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////
function renderHtml(data, className) {
  let html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}

// // const getCountryInfo = function (country) {
// //   const request = new XMLHttpRequest();
// //   request.open('GET', `https://restcountries.com/v2/name/${country}`);
// //   request.send();
// //   // console.log(request.responseText);

// //   request.addEventListener('load', function () {
// //     const [data] = JSON.parse(request.responseText);
// //     // console.log(data);
// //     renderHtml(data);
// //     let qushni = data.borders;

// //     for (let i = 0; i < qushni.length; i++) {
// //       let request2 = new XMLHttpRequest();
// //       request2.open(
// //         'GET',
// //         `https://restcountries.com/v2/alpha/${data.borders[i]}`
// //       );
// //       request2.send();
// //       request2.addEventListener('load', () => {
// //         let data1 = JSON.parse(request2.responseText);
// //         renderHtml(data1, 'neighbour');
// //       });
// //     }
// //   });
// // };
// //  getCountryInfo('uzbekistan');
// let errorXaber = function (response, msg) {
//   if (!response.ok) {
//     throw new Error(`${msg}${response.status} ${response.statusText}`);
//   }
// };
// let getJSON = function (url, msg) {
//   return fetch(url).then(response => {
//     errorXaber(response, msg);
//     return response.json();
//   });
// };

// function getCountry(country) {
//   getJSON(
//     `https://restcountries.com/v2/name/${country}`,
//     'davlatni topa olmadim'
//   )
//     .then(res => {
//       let [data] = res;
//       console.log(data);
//       renderHtml(data);
//       let qushni = data.borders[3];
//       return getJSON(
//         `https://restcountries.com/v2/alpha/${qushni}`,
//         'Qushni Davlatni topa olmadim'
//       );
//     })
//     .then(res => {
//       console.log(res);
//       renderHtml(res, 'neighbour');
//     })
//     .catch(function (error) {
//       alert(error);
//     });
// }

// getCountry('uzbekistan');
// // console.time('loop');

// // console.timeEnd('loop');

// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 0);
// console.log(3);
// Promise.resolve('azizjon').then(res => console.log(res));
//
// const tanga = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('urrs');
//     } else reject('error');
//   }, 2000);
// });

// tanga.then(res => console.log(res));
let chegaraniOl = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      e => {
        e.coords;
      },
      er => {
        return er;
      }
    );
  });
};

console.log(chegaraniOl());

const data = async function () {
  try {
    let data2 = await fetch('https://restcountries.com/v2/name/uzbekistan');
    let [JsonData] = await data2.json();
    console.log(JsonData);
    renderHtml(JsonData);
    let qushni = JsonData.borders[2];
    let qushni1 = await fetch(`https://restcountries.com/v2/alpha/${qushni}`);
    let sana = await qushni1.json();
    renderHtml(sana, 'neighbour');
  } catch (error) {
    console.log(error);
    alert(error);
  }
};
data();
