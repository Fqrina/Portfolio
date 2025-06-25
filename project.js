document.addEventListener('DOMContentLoaded', async () => {
  const projectList = document.getElementById('projectList');
  const yearSpan = document.getElementById('year');

  yearSpan.textContent = new Date().getFullYear();

  console.log('Project page loaded, initializing...');

  // Initialize API
  const api = new DataAPI();
  console.log('API initialized, loading projects...');
  
  let projects = await api.loadData('projects');
  console.log('Projects loaded:', projects);
  
  renderProjects();

  function renderProjects() {
    console.log('Rendering projects:', projects);
    projectList.innerHTML = '';
    if (projects.length === 0) {
      projectList.innerHTML = '<p style="color: var(--text-secondary);">No projects available.</p>';
      return;
    }
    [...projects].reverse().forEach((project, idx) => {
      const card = document.createElement('div');
      card.className = 'project-card frost-glass';
      let truncated = project.desc.length > 120;
      card.innerHTML = `
        <div class="project-title">${project.title}</div>
        <p class="project-desc">${truncated ? project.desc.slice(0, 120) + '...' : project.desc}</p>
      `;
      card.style.cursor = 'pointer';
      card.addEventListener('click', () => {
        // Calculate the original index in the projects array
        const originalIdx = projects.length - 1 - idx;
        window.location.href = `project-detail.html?index=${originalIdx}`;
      });
      projectList.appendChild(card);
    });
  }
}); 