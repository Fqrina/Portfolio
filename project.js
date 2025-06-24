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
        <a href="${project.link}" class="project-title" target="_blank" rel="noopener">${project.title}</a>
        <p class="project-desc">${truncated ? project.desc.slice(0, 120) + '...' : project.desc}</p>
        ${truncated ? '<button class="view-btn">View</button>' : ''}
      `;
      if (truncated) {
        card.querySelector('.view-btn').addEventListener('click', () => {
          alert(`Title: ${project.title}\nLink: ${project.link}\n\n${project.desc}`);
        });
      }
      projectList.appendChild(card);
    });
  }
}); 