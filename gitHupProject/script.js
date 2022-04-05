"use strick";
let search = document.querySelector(".search");
let htmlQush = function (data, array) {
  document.querySelector(".qush").innerHTML = " ";
  document.querySelector(".qush2").innerHTML = " ";
  let hmtl = ` <section class="section__2 section__1">
  <div class="avatar_photo">
    <img
      src="${data.avatar_url}"
      alt=""
    />
    <a href="${data.html_url}" class="a">Profilni ko'ring</a>
  </div>
  <div class="about">
    <div class="statistika">
      <div class="repo">Public Repos:${data.public_repos}</div>
      <div class="repo gets">Public gets:${data.public_gists}</div>
      <div class="repo follovers">Follovers:${data.followers}</div>
      <div class="repo following">Following:${data.following}</div>
    </div>
    <div class="statistika__1">
      <p class="company">Company:${data.company ? data.company : "nomalum"}</p>
      <p class="company">Website/Blog: ${data.blog ? data.blog : "nomalum"}</p>
      <p class="company">Location: ${
        data.location ? data.location : "nomalum"
      }</p>
      <p class="company">Member Since: ${
        data.created_at ? data.created_at : "nomalum"
      }</p>
    </div>
  </div>
</section>`;
  document.querySelector(".qush").insertAdjacentHTML("afterbegin", hmtl);
  for (let key of array) {
    let htmlgaQush = `<div class="section__3 section__1">
 
  <div class="repostary">
    <a href="${key.html_url}" class="href">${key.name}</a>
    <div class="group">
      <div class="rang">Start: ${key.stargazers_count}</div>
      <div class="rang gray1">Watchers: ${key.watchers}</div>
      <div class="rang yashil">Forks: ${key.forks}</div>
    </div>
  </div>
</div>`;
    document
      .querySelector(".qush2")
      .insertAdjacentHTML("afterbegin", htmlgaQush);
  }
};
document.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    let uzgaruvchi = search.value;
    gitHUb(uzgaruvchi);
  }
});
const gitHUb = async function (name) {
  let ol = await fetch(
    `https://api.github.com/users/${name}?client_id=65b44d46d520be1f19c7&client_secret=7287ef205413001a79b30f0fbcc04416153ef797`
  );
  let kodniOch = await ol.json();
  let data = kodniOch;
  // console.log(kodniOch);
  let reponiOl = await fetch(
    `
      https://api.github.com/users/${name}/repos?per_page=created: asc&sort=5&client_id=65b44d46d520be1f19c7&client_secret=7287ef205413001a79b30f0fbcc04416153ef797`
  );
  let och = await reponiOl.json();
  // console.log(och);
  htmlQush(data, och);
};
