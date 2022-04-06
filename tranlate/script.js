const options = {
  method: "GET",
  headers: {
    "Accept-Encoding": "application/gzip",
    "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    "X-RapidAPI-Key": "d96eedff8amshdd02469b5410f36p180a4fjsn615e157008b4",
  },
};

fetch(
  "https://google-translate1.p.rapidapi.com/language/translate/v2/languages",
  options
)
  .then((response) => response.json())
  .then((response) => {
    let data = response.data.languages;
    for (let key of data) {
      let optin = `<option value="${key.language}">${key.language}</option>`;
      to.insertAdjacentHTML("afterbegin", optin);
      from.insertAdjacentHTML("afterbegin", optin);
    }
  });
document.querySelector(".run__btn").addEventListener("click", () => {
  let from = document.querySelector("#from");
  let to = document.querySelector("#to");

  let to1 = document.querySelector(".from__input").value;
  const encodedParams = new URLSearchParams();
  encodedParams.append("q", `${to1}`);
  encodedParams.append("target", `${to.value}`);
  encodedParams.append("source", `${from.value}`);

  const options1 = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      "X-RapidAPI-Key": "d96eedff8amshdd02469b5410f36p180a4fjsn615e157008b4",
    },
    body: encodedParams,
  };

  fetch(
    "https://google-translate1.p.rapidapi.com/language/translate/v2",
    options1
  )
    .then((response) => response.json())
    .then((response) => {
      document.querySelector(".to__input").value =
        response.data.translations[0].translatedText;
    });
});
