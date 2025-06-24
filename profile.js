document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  const dropdownBtn = document.querySelector('.dropdown-btn');
  const dropdown = document.querySelector('.dropdown');
  dropdownBtn.addEventListener('click', () => {
    dropdown.classList.toggle('open');
  });
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target) && dropdown.classList.contains('open')) {
      dropdown.classList.remove('open');
    }
  });
}); 