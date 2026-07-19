const header = document.querySelector(".header");
const menuButton = document.querySelector(".header__menu-btn");
const menuCloseButton = document.querySelector(".icon-btn--close");
const featuresButtons = document.querySelectorAll(".features__tab-item");
const featuresCards = document.querySelectorAll(".features__card");
const faqButtons = document.querySelectorAll(".faq__question");

const subscribeForm = document.querySelector(".subscribe__form");
const subscribeInput = document.querySelector(".subscribe__input");
const subscribeField = document.querySelector(".subscribe__field");
const errorIcon = document.querySelector(".subscribe__error-icon");
const errorMessage = document.querySelector(".subscribe__error");

// 開啟手機版導覽選單
menuButton.addEventListener("click", () => {
  header.classList.add("header--open");
});
// 關閉手機版導覽選單
menuCloseButton.addEventListener("click", () => {
  header.classList.remove("header--open");
});

//切換features分頁內容
featuresButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    featuresButtons.forEach((i) => {
      i.classList.remove("features__tab-item--active");
      i.setAttribute("aria-selected", false);
    });
    featuresCards.forEach((card) => {
      card.classList.remove("features__card--active");
    });
    button.classList.add("features__tab-item--active");
    button.setAttribute("aria-selected", "true");

    featuresCards[index].classList.add("features__card--active");
  });
});

//開啟或關閉FAQ的答案
faqButtons.forEach((buttom) => {
  buttom.addEventListener("click", () => {
    const faqItem = buttom.closest(".faq__item");
    const isOpen = faqItem.classList.toggle("faq__item--open");
    buttom.setAttribute("aria-expanded", String(isOpen));
  });
});

//訂閱信箱驗證＆出現錯誤提示
subscribeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  subscribeInput.value = subscribeInput.value.trim();

  const isValid = subscribeInput.checkValidity();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailFormatValid = emailRegex.test(subscribeInput.value);

  if (!isValid || !isEmailFormatValid) {
    showEmailErorr();
    subscribeInput.focus();
    return;
  }
  clearEmailError();
  console.log("驗證Email輸入框的內容", subscribeInput.value);
});

//信箱輸入錯誤出現錯誤提示
function showEmailErorr() {
  subscribeField.classList.add("subscribe__field--error");
  errorIcon.hidden = false;
  errorMessage.hidden = false;

  subscribeInput.setAttribute("aria-invalid", "true");

  //錯誤訊息內容
  if (subscribeInput.validity.valueMissing) {
    errorMessage.textContent = "Email cannot be empty";
  } else if (subscribeInput.validity.typeMismatch) {
    errorMessage.textContent = "Whoops, make sure it's an email";
  }
}

subscribeInput.addEventListener("input", () => {
  clearEmailError();
});

//清除信箱錯誤內容
function clearEmailError() {
  subscribeInput.classList.remove("subscribe__field--error");
  errorIcon.hidden = true;
  errorMessage.hidden = true;

  subscribeInput.setAttribute("aria-invalid", "false");
}
