// script.js 파일
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// 햄버거 메뉴 클릭 시
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');  // 햄버거 버튼을 X로 변경
  mobileMenu.classList.toggle('hidden');  // 메뉴 열기/닫기
});
