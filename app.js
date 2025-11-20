// DOM
const header__menu__item = document.querySelectorAll(".header__menu__item");

// menu 버튼 클릭 시 active 클래스 추가/제거
header__menu__item.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.add("active");
    header__menu__item.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });
  });
});
