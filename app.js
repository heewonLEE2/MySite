// DOM
const header__menu__item = document.querySelectorAll(".header__menu__item");
const category_btn = document.querySelectorAll(".category");
const header__toggle = document.querySelector(".header__toggle");
const header__nav = document.querySelector(".header__nav");

// 햄버거 메뉴 토글
header__toggle.addEventListener("click", () => {
  header__nav.classList.toggle("open");
});

// 메뉴 항목 클릭 시 모바일에서 메뉴 닫기
header__menu__item.forEach((item) => {
  item.addEventListener("click", () => {
    header__nav.classList.remove("open");
  });
});

// menu 버튼 클릭 시 active 클래스 추가/제거 + 모바일 메뉴 닫기
header__menu__item.forEach((item) => {
  item.addEventListener("click", () => {
    // active 클래스 관리
    item.classList.add("active");
    header__menu__item.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });
    // 모바일에서 메뉴 닫기
    header__nav.classList.remove("open");
  });
});

// category 버튼 클릭 category--selected 클래스 추가/제거
category_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("category--selected");
    category_btn.forEach((otherBtn) => {
      if (otherBtn !== btn) {
        otherBtn.classList.remove("category--selected");
      }
    });
  });
});
