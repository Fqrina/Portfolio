document.addEventListener('DOMContentLoaded', () => {
  const achievementForm = document.getElementById('achievementForm');
  const achievementList = document.getElementById('achievementList');
  const yearSpan = document.getElementById('year');

  yearSpan.textContent = new Date().getFullYear();

  // Auto-expand textarea
  const descArea = document.getElementById('achDesc');
  if (descArea) {
    descArea.addEventListener('input', function() {
      this.style.height = 'auto';
      this.style.height = (this.scrollHeight) + 'px';
    });
  }

  let achievements = JSON.parse(localStorage.getItem('achievements')) || [];
  renderAchievements();

  achievementForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('achTitle').value.trim();
    const issuer = document.getElementById('achIssuer').value.trim();
    const desc = document.getElementById('achDesc').value.trim();
    const pass = document.getElementById('achPasscode').value.trim();
    if (pass !== 'add') {
      alert('Passcode incorrect.');
      return;
    }
    if (!title || !issuer || !desc) return;
    const achievement = { title, issuer, desc };
    achievements.push(achievement);
    localStorage.setItem('achievements', JSON.stringify(achievements));
    renderAchievements();
    achievementForm.reset();
    descArea.style.height = 'auto';
  });

  function renderAchievements() {
    achievementList.innerHTML = '';
    if (achievements.length === 0) {
      achievementList.innerHTML = '<p style="color: var(--text-secondary);">No achievements yet. Add one above!</p>';
      return;
    }
    [...achievements].reverse().forEach((ach) => {
      const card = document.createElement('div');
      card.className = 'achievement-card';
      card.innerHTML = `
        <div class="achievement-title">${ach.title}</div>
        <div class="achievement-issuer">issued by: ${ach.issuer}</div>
        <div class="achievement-desc">${ach.desc}</div>
      `;
      achievementList.appendChild(card);
    });
  }
}); 