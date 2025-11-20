# Heewon's Portfolio Website

개인 포트폴리오를 소개하는 반응형 원페이지 웹사이트입니다.

## <a href="https://heewonlee2.github.io/MySite/">Git-Pages 확인하기</a>

## 🌟 주요 기능

### 1. 동적 컨텐츠

- **시간별 인사말**: 현재 시간에 따라 "좋은 아침입니다", "좋은 오후입니다", "좋은 저녁입니다" 자동 표시
- **섹션 자동 감지**: Intersection Observer API를 활용하여 현재 보고 있는 섹션을 감지하고 네비게이션 메뉴에 하이라이트 표시

### 2. 프로젝트 필터링 시스템

- 카테고리별 프로젝트 필터링 (All, Front-end, Mobile, Back-end)
- 필터 전환 시 부드러운 fadeIn 애니메이션 적용
- 선택된 카테고리 시각적 표시

### 3. 모달 기능

- 프로젝트 카드 클릭 시 상세 정보 모달 팝업
- 프로젝트별 기술 스택, 기간, 상세 설명 표시
- 다양한 닫기 방법 지원:
  - X 버튼 클릭
  - 모달 배경 클릭
  - ESC 키 입력

### 4. 반응형 디자인

- 모바일 환경을 위한 햄버거 메뉴
- 768px 브레이크포인트 기준 레이아웃 자동 전환
- 그리드 컬럼 수 자동 조정 (데스크톱 4열 → 모바일 2열)

### 5. 스크롤 애니메이션

- AOS(Animate On Scroll) 라이브러리 활용
- 각 섹션별 fade-up, fade-left, fade-right, zoom-in 등 다양한 효과
- 지연 시간(delay)을 활용한 순차적 애니메이션

## 🛠 사용 기술

- **HTML5**: 시맨틱 마크업
- **CSS3**:
  - CSS Variables (사용자 정의 속성)
  - Flexbox & Grid Layout
  - Media Queries (반응형)
  - Keyframe Animations
- **JavaScript (Vanilla JS)**:
  - DOM 조작
  - Intersection Observer API
  - Event Handling
  - 동적 데이터 렌더링
- **외부 라이브러리**:
  - AOS (Animate On Scroll)
  - Font Awesome (아이콘)
  - GMarket Sans (커스텀 폰트)

## 💡 CSS 구현 특징

### 1. CSS 변수 시스템

```css
:root {
  --color-primary: var(--color-black);
  --color-accent: var(--color-blue);
  /* ... */
}
```

일관된 색상 관리

### 2. 그리드 레이아웃

- **프로젝트 섹션**: `grid-template-columns: repeat(4, 1fr)`
- **스킬 섹션**: `grid-template-columns: 6fr 4fr`
- 반응형으로 자동 조정

### 3. 커스텀 애니메이션

```css
@keyframes fadeIn {
  /* ... */
}
@keyframes slideDown {
  /* ... */
}
@keyframes slideUp {
  /* ... */
}
```

### 4. 호버 효과

- 네비게이션 메뉴 하단 border 표시
- 프로젝트 카드 오버레이 opacity 전환
- 버튼 transform 효과

### 5. 모달 스타일링

- 배경 blur 효과 (`backdrop-filter`)
- 커스텀 스크롤바
- 부드러운 slideUp 애니메이션

## 🎯 JavaScript 구현 특징

### 1. Intersection Observer 패턴

```javascript
const sectionObserver = new IntersectionObserver((entries) => {
  // 가장 많이 보이는 섹션 감지 로직
}, observerOptions);
```

- 50% 이상 보이는 섹션 자동 감지

### 2. 이벤트 위임 패턴

```javascript
category_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    // 카테고리 필터링 로직
  });
});
```

### 3. 데이터 기반 렌더링

```javascript
const projectDetails = {
  "Project #1": { tech: "...", period: "...", description: "..." },
  // ...
};
```

JavaScript 객체로 데이터 관리, 확장성 확보

### 4. 모달 관리 시스템

- 배경 스크롤 방지 (`overflow: hidden`)
- 다중 닫기 이벤트 처리
- 동적 컨텐츠 업데이트

## 📁 디렉토리 구조

```
portfolio/
├── index.html
├── app.js
├── css/
│   └── style.css
├── images/
│   ├── my_img.ico
│   ├── my_img.png
│   ├── cat_1.jpg
│   ├── puppy_3.jpg
│   ├── license.jpg
│   └── licens2.jpg
└── portfoli_images/
    ├── React_img.png
    ├── Vue_img.png
    ├── Flutter_img.jpg
    ├── ReactNative_img.png
    ├── Swift_img.jpg
    ├── Kottlin_img.png
    ├── Spring.png
    └── NodeJS_img.png
```

## 🚀 실행 방법

1. 저장소 클론

```bash
git clone [repository-url]
```

2. 브라우저에서 `index.html` 파일 열기

```bash
# Live Server 사용 권장
# 또는 직접 브라우저에서 파일 열기
```

## 📱 반응형 브레이크포인트

- **데스크톱**: > 768px
- **모바일**: ≤ 768px
