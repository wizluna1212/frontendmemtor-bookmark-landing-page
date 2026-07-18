const header = document.querySelector(".header");
const menuButton = document.querySelector(".header__menu-btn");
const menuCloseButton = document.querySelector(".icon-btn--close");

// 開啟手機版導覽選單
menuButton.addEventListener("click", () => {
  header.classList.add("header--open");
});
// 關閉手機版導覽選單
menuCloseButton.addEventListener("click", () => {
  header.classList.remove("header--open");
});
