document.addEventListener('DOMContentLoaded', () => {
  const projectForm = document.getElementById('projectForm');
  const projectList = document.getElementById('projectList');
  const yearSpan = document.getElementById('year');

  yearSpan.textContent = new Date().getFullYear();

  let projects = JSON.parse(localStorage.getItem('projects')) || [];
  renderProjects();

  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('projectTitle').value.trim();
    const link = document.getElementById('projectLink').value.trim();
    const desc = document.getElementById('projectDesc').value.trim();
    const pass = document.getElementById('projectPasscode').value.trim();
    if (pass !== 'add') {
      alert('Passcode incorrect.');
      return;
    }
    if (!title || !link || !desc) return;
    const project = { title, link, desc };
    projects.push(project);
    localStorage.setItem('projects', JSON.stringify(projects));
    renderProjects();
    projectForm.reset();
  });

  function renderProjects() {
    projectList.innerHTML = '';
    if (projects.length === 0) {
      projectList.innerHTML = '<p style="color: var(--text-secondary);">No projects yet. Add one above!</p>';
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
        <button class="delete-btn" title="Delete">&#128465;</button>
      `;
      if (truncated) {
        card.querySelector('.view-btn').addEventListener('click', () => {
          alert(`Title: ${project.title}\nLink: ${project.link}\n\n${project.desc}`);
        });
      }
      card.querySelector('.delete-btn').addEventListener('click', () => {
        const pass = prompt('Type passcode to delete:');
        if (pass === 'delete') {
          projects.splice(projects.length - 1 - idx, 1);
          localStorage.setItem('projects', JSON.stringify(projects));
          renderProjects();
        } else {
          alert('Passcode incorrect.');
        }
      });
      projectList.appendChild(card);
    });
  }
}); 