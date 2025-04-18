const body = document.querySelector('body');
const toggleBtn = document.querySelector('.dark-toggle');

function setDarkMode(isDark) {
  if (isDark) {
    body.classList.add('dark-mode');
    toggleBtn.textContent = '🌞';  // Chế độ sáng
    localStorage.setItem('darkMode', 'enabled');
  } else {
    body.classList.remove('dark-mode');
    toggleBtn.textContent = '🌓';  // Chế độ tối
    localStorage.setItem('darkMode', 'disabled');
  }
}

const savedMode = localStorage.getItem('darkMode');
if (savedMode === 'enabled') {
  setDarkMode(true);
}

toggleBtn.addEventListener('click', () => {
  const isDark = body.classList.contains('dark-mode');
  setDarkMode(!isDark);
});
