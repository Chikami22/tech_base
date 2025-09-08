// お気に入り用Cookie関数
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days*24*60*60*1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}

function getCookie(name) {
  const cname = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(cname) == 0) return c.substring(cname.length, c.length);
  }
  return "";
}

// 国の配列
var countries = ["日本","ニュージーランド","アメリカ合衆国","中華人民共和国","イギリス","韓国","ロシア連邦","ドイツ","フランス","インドネシア","インド","南アフリカ共和国","ケニア","ブラジル","オーストラリア","カナダ","エジプト"];

// ランダムに国を表示
function countryshow() {
  var number = Math.floor(Math.random() * countries.length);
  var message = countries[number];
  document.getElementById("country").innerText = message;
}

// お気に入りに追加
function addFavorite() {
  const countryName = document.getElementById("country").innerText;
  if (!countryName || countryName === "Let's study!") return;

  let favorites = getCookie("favoriteCountries");
  let favArray = favorites ? favorites.split(",") : [];

  if (!favArray.includes(countryName)) {
    favArray.push(countryName);
  }

  setCookie("favoriteCountries", favArray.join(","), 7);
  document.getElementById("favorite").innerText = "お気に入り: " + favArray.join(", ");
}


function removeFavorite() {
  const countryName = document.getElementById("country").innerText;
  if (!countryName || countryName === "Let's study!") return;

  let favorites = getCookie("favoriteCountries");
  let favArray = favorites ? favorites.split(",") : [];

  // 選ばれた国を削除
  favArray = favArray.filter(item => item !== countryName);

  setCookie("favoriteCountries", favArray.join(","), 7);
  document.getElementById("favorite").innerText = favArray.length > 0 
      ? "お気に入り: " + favArray.join(", ")
      : "お気に入り: なし";
}

// ページ読み込み時にCookieからお気に入り表示
window.onload = function() {
  let favorites = getCookie("favoriteCountries");
  if (favorites) {
    document.getElementById("favorite").innerText = "お気に入り: " + favorites;
  }
}
// お気に入りに追加
function addFavorite() {
  const countryName = document.getElementById("country").innerText;
  if (!countryName || countryName === "Let's study!") return;

  let favorites = getCookie("favoriteCountries");
  let favArray = favorites ? favorites.split(",") : [];

  if (!favArray.includes(countryName)) {
    favArray.push(countryName);
  }

  setCookie("favoriteCountries", favArray.join(","), 7);
  document.getElementById("favorite").innerText = "お気に入り: " + favArray.join(", ");
};