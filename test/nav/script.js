// 選取漢堡圖示和導覽選單
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

// 點擊漢堡圖示時，切換選單的顯示與隱藏
menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
