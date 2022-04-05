document.querySelector(".search_1").addEventListener("click", (e) => {
  e.preventDefault();
  let search = document.querySelector(".search_meal");
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`NOt found ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then((res) => {
      let data = res.meals;
      console.log(data);
      document.querySelector(".qidiruv_natijalari").innerHTML = "";
      for (let a of data) {
        let htmlgaQush = `  <div class="container">
      <img src="${a.strMealThumb}" alt="${a.strCategory}" />
      <div class="divcha">
        <p class="name">${a.strMeal}</p>
        <button class="btn ${a.idMeal}" id = "">Kuproq kurish</button>
      </div>
    </div>
    `;
        document
          .querySelector(".qidiruv_natijalari")
          .insertAdjacentHTML("afterbegin", htmlgaQush);

        document
          .querySelector(".qidiruv_natijalari")
          .addEventListener("click", (e) => {
            if (e.target.classList.contains(`${a.idMeal}`)) {
              let popupQush = `
              <div class="popup">
      <div class="x ${a.idMeal}">
        <p></p>
        <p>X</p>
      </div><div class="popup_about">
            <h1 class="popup_name">${a.strMeal}</h1>
            <p class="name_popup">${a.strMeal}</p>
            <p class="ins">Instruduction</p>
            <p class="popup_about1">
             ${a.strInstructions}
            </p>
            <img src="${a.strMealThumb}" alt="" />
            <a href="${a.strYoutube}" class="popup_a">Watch Video</a>
          </div>
        </div>`;
              document
                .querySelector(".qidiruv_natijalari")
                .insertAdjacentHTML("beforeend", popupQush);
              console.log(a);
              document.querySelector(".x").addEventListener("click", (e) => {
                console.log("s");
                document.querySelector(".popup").remove();
              });
            }
          });
      }
    })
    .catch((e) => {});
});
