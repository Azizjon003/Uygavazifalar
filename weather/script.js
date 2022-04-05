// fetch(
//   `http://api.weatherstack.com/current?access_key=ebc2c14341b242accc4941b9a5c23bbf&query=navoi`
// )
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });
let inputType = document.querySelector(".search_city");
let button = document.querySelector(".btn");
button.addEventListener("click", (e) => {
  e.preventDefault();
  let type = inputType.value;
  console.log(1);
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=44d37f22c06d4dbba27165419220204&q=${type}&aqi=no`
  )
    .then((response) => response.json())
    .then((data) => {
      document.body.style.backgroundImage = ` ${
        data.current.is_day == 0
          ? "url(./thumb-1920-73592.jpg)"
          : "url(./5be309883ffc0f34b15173382c8f9832.jpg"
      }`;
      console.log(data);
      let html = `<div class="card">
      <h1 class="name_city">${data.location.name} ${
        data.current.is_day == 1 ? "Kun" : "Tun"
      }</h1>
      <h2 class="weather_temp">${data.current.temp_c}C'</h2>
      <img src="${data.current.condition.icon}" alt="" class="wether__icon" />
      <h3 class="location_time">${data.location.localtime}</h3>
    </div>`;
      document.querySelector("main").insertAdjacentHTML("beforeend", html);
    })
    .catch((error) => {
      console.log(error);
    });
});
