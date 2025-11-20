// 시간에 따른 인삿말 표시
function updateGreeting() {
  const greetingElement = document.getElementById("greeting");
  const currentHour = new Date().getHours();

  let greetingMessage = "";

  if (currentHour >= 5 && currentHour < 12) {
    greetingMessage = "좋은 아침입니다";
  } else if (currentHour >= 12 && currentHour < 18) {
    greetingMessage = "좋은 오후입니다";
  } else {
    greetingMessage = "좋은 저녁입니다";
  }

  greetingElement.textContent = greetingMessage;
}

// 페이지 로드 시 인삿말 업데이트
updateGreeting();

// AOS 초기화
AOS.init({
  duration: 700, // 애니메이션 지속 시간 (기본값)
  easing: "ease-in-out", // 애니메이션 효과
  once: false, // 애니메이션을 한 번만 실행할지 여부 (false = 스크롤할 때마다 실행)
  mirror: true, // 스크롤 다운/업 모두에서 애니메이션 실행
  offset: 100, // 요소가 화면에서 얼마나 떨어진 곳에서 애니메이션 시작할지 (px)
});

// DOM
const header__menu__item = document.querySelectorAll(".header__menu__item");
const category_btn = document.querySelectorAll(".category");
const header__toggle = document.querySelector(".header__toggle");
const header__nav = document.querySelector(".header__nav");
const projects = document.querySelectorAll(".project");
const sections = document.querySelectorAll("section[id]");

// Intersection Observer를 이용한 섹션 감지 및 메뉴 하이라이트
const observerOptions = {
  root: null, // viewport 기준
  threshold: 0.5, // 50% 이상 보일 때
  rootMargin: "0px",
};

const sectionObserver = new IntersectionObserver((entries) => {
  // 현재 화면에 보이는 섹션들 중 가장 많이 보이는 것 찾기
  let maxRatio = 0;
  let mostVisibleSection = null;

  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
      maxRatio = entry.intersectionRatio;
      mostVisibleSection = entry.target;
    }
  });

  // 가장 많이 보이는 섹션이 있으면 해당 메뉴 하이라이트
  if (mostVisibleSection) {
    const sectionId = mostVisibleSection.id;
    header__menu__item.forEach((item) => {
      const href = item.getAttribute("href");
      if (href === `#${sectionId}`) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }
}, observerOptions);

// 모든 섹션 관찰 시작
sections.forEach((section) => {
  sectionObserver.observe(section);
});

// 햄버거 메뉴 토글
header__toggle.addEventListener("click", () => {
  header__nav.classList.toggle("open");
});

// menu 버튼 클릭 시 모바일 메뉴 닫기
header__menu__item.forEach((item) => {
  item.addEventListener("click", () => {
    // 모바일에서 메뉴 닫기
    header__nav.classList.remove("open");
  });
});

// category 버튼 클릭 시 프로젝트 필터링
category_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    // category--selected 클래스 관리
    category_btn.forEach((otherBtn) => {
      otherBtn.classList.remove("category--selected");
    });
    btn.classList.add("category--selected");

    // 프로젝트 필터링
    const filter = btn.dataset.category;

    projects.forEach((project) => {
      const projectType = project.dataset.type;

      if (filter === "all" || filter === projectType) {
        // 표시할 프로젝트
        project.classList.remove("invisible");
        // 애니메이션 재시작을 위해 클래스를 제거했다가 다시 추가
        project.style.animation = "none";
        setTimeout(() => {
          project.style.animation = "fadeIn 300ms ease-in";
        }, 10);
      } else {
        // 숨길 프로젝트
        project.classList.add("invisible");
      }
    });
  });
});

// 모달 기능
const modal = document.getElementById("projectModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTech = document.getElementById("modalTech");
const modalPeriod = document.getElementById("modalPeriod");
const modalClose = document.querySelector(".modal__close");

// 프로젝트별 상세 정보
const projectDetails = {
  "Project #1": {
    tech: "HTML, CSS, JavaScript, React",
    period: "2024.01 ~ 2024.03",
    description:
      "React를 활용한 SPA 웹 애플리케이션입니다. 컴포넌트 기반 아키텍처로 설계되어 재사용성과 유지보수성이 뛰어납니다. Redux를 통한 상태 관리와 React Router를 활용한 페이지 라우팅을 구현했습니다.",
  },
  "Project #2": {
    tech: "HTML, CSS, JavaScript, React, Redux",
    period: "2024.02 ~ 2024.04",
    description:
      "React와 Redux를 결합한 고급 웹 애플리케이션입니다. 복잡한 상태 관리와 비동기 처리를 효율적으로 다루며, 사용자 친화적인 UI/UX를 제공합니다.",
  },
  "Project #3": {
    tech: "HTML, CSS, JavaScript, Vue.js",
    period: "2024.03 ~ 2024.05",
    description:
      "Vue.js 프레임워크를 활용한 반응형 웹 애플리케이션입니다. 가볍고 빠른 성능을 자랑하며, 직관적인 문법으로 개발 생산성을 높였습니다.",
  },
  "Project #4": {
    tech: "Dart, Flutter, Firebase",
    period: "2024.04 ~ 2024.06",
    description:
      "Flutter를 이용한 크로스 플랫폼 모바일 앱입니다. 하나의 코드베이스로 iOS와 Android 앱을 동시에 개발하여 개발 시간을 단축했습니다.",
  },
  "Project #5": {
    tech: "Dart, Flutter, SQLite",
    period: "2024.05 ~ 2024.07",
    description:
      "Flutter와 로컬 데이터베이스를 활용한 오프라인 지원 모바일 앱입니다. 네트워크 연결 없이도 완벽하게 작동하며 데이터 동기화 기능을 제공합니다.",
  },
  "Project #6": {
    tech: "JavaScript, React Native, Expo",
    period: "2024.06 ~ 2024.08",
    description:
      "React Native로 개발한 네이티브 모바일 애플리케이션입니다. React의 개발 경험을 모바일로 확장하여 효율적인 개발이 가능합니다.",
  },
  "Project #7": {
    tech: "Swift, UIKit, SwiftUI",
    period: "2024.07 ~ 2024.09",
    description:
      "Swift 언어로 개발한 iOS 네이티브 앱입니다. 애플의 최신 기술 스택을 활용하여 최적화된 성능과 사용자 경험을 제공합니다.",
  },
  "Project #8": {
    tech: "Kotlin, Jetpack Compose",
    period: "2024.08 ~ 2024.10",
    description:
      "Kotlin과 Jetpack Compose로 개발한 Android 네이티브 앱입니다. 선언형 UI로 직관적이고 효율적인 앱 개발을 실현했습니다.",
  },
  "Project #9": {
    tech: "Java, Spring Boot, MySQL",
    period: "2024.09 ~ 2024.11",
    description:
      "Spring Boot 프레임워크로 구축한 RESTful API 서버입니다. 확장 가능한 아키텍처와 효율적인 데이터베이스 설계로 안정적인 서비스를 제공합니다.",
  },
  "Project #10": {
    tech: "JavaScript, Node.js, Express, MongoDB",
    period: "2024.10 ~ 2024.12",
    description:
      "Node.js와 Express로 개발한 백엔드 서버입니다. NoSQL 데이터베이스와 연동하여 유연한 데이터 구조를 지원하며 빠른 응답 속도를 자랑합니다.",
  },
};

// 프로젝트 카드 클릭 이벤트
projects.forEach((project) => {
  const projectCard = project.querySelector(".project__card");
  if (projectCard) {
    projectCard.addEventListener("click", () => {
      const title = project.querySelector(".project__title").textContent;
      const imageSrc = project.querySelector(".project__img").src;
      const details = projectDetails[title] || {
        tech: "HTML, CSS, JavaScript",
        period: "2024.01 ~ 2024.03",
        description: "프로젝트에 대한 상세 설명입니다.",
      };

      // 모달 내용 업데이트
      modalImage.src = imageSrc;
      modalTitle.textContent = title;
      modalDescription.textContent = details.description;
      modalTech.textContent = details.tech;
      modalPeriod.textContent = details.period;

      // 모달 열기
      modal.classList.add("show");
      document.body.style.overflow = "hidden"; // 배경 스크롤 방지
    });
  }
});

// 모달 닫기 - X 버튼
modalClose.addEventListener("click", () => {
  modal.classList.remove("show");
  document.body.style.overflow = "auto";
});

// 모달 닫기 - 배경 클릭
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
    document.body.style.overflow = "auto";
  }
});

// 모달 닫기 - ESC 키
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("show")) {
    modal.classList.remove("show");
    document.body.style.overflow = "auto";
  }
});
