document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  const aboutMeBtn = document.getElementById('aboutMeBtn');
  const aboutMeCard = document.getElementById('aboutMeCard');

  aboutMeBtn.addEventListener('click', () => {
    const isOpen = aboutMeCard.classList.toggle('open');
    aboutMeBtn.innerHTML = isOpen ? 'More About Me ▲' : 'More About Me ▼';
  });
}); 