// DOM Elements
const button = document.getElementById('action-btn');
const box = document.getElementById('animated-box');
const darkModeToggle = document.getElementById('dark-mode');

// 1. Trigger Animation on Button Click
button.addEventListener('click', () => {
  box.classList.toggle('spin-animation'); // Toggle spin animation
});

// 2. Store User Preference (Dark Mode)
darkModeToggle.addEventListener('change', (e) => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', e.target.checked); // Save preference
});

// 3. Load Saved Preference on Page Load
window.addEventListener('load', () => {
  const savedDarkMode = localStorage.getItem('darkMode') === 'true';
  darkModeToggle.checked = savedDarkMode;
  if (savedDarkMode) document.body.classList.add('dark-mode');
});