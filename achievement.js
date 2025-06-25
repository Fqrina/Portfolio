document.addEventListener('DOMContentLoaded', async () => {
  const achievementList = document.getElementById('achievementList');
  const yearSpan = document.getElementById('year');

  yearSpan.textContent = new Date().getFullYear();

  // Initialize API
  const api = new DataAPI();
  let achievements = await api.loadData('achievements');
  renderAchievements();

  function renderAchievements() {
    achievementList.innerHTML = '';
    if (achievements.length === 0) {
      achievementList.innerHTML = '<p style="color: var(--text-secondary);">No achievements available.</p>';
      return;
    }
    [...achievements].reverse().forEach((ach) => {
      const card = document.createElement('div');
      card.className = 'achievement-card';
      card.innerHTML = `
        <div class="achievement-title">${ach.title}</div>
        <div class="achievement-issuer">issued by: ${ach.issuer}</div>
        <div class="achievement-desc">${ach.desc.replace(/\n/g, '<br>')}</div>
      `;
      achievementList.appendChild(card);
    });
  }
}); 