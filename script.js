document.addEventListener('DOMContentLoaded', () => {
  const projectForm = document.getElementById('projectForm');
  const projectList = document.getElementById('projectList');
  const yearSpan = document.getElementById('year');

  // Set current year
  yearSpan.textContent = new Date().getFullYear();

  // Load projects from localStorage
  let projects = JSON.parse(localStorage.getItem('projects')) || [];
  renderProjects();

  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('projectTitle').value.trim();
    const link = document.getElementById('projectLink').value.trim();
    const desc = document.getElementById('projectDesc').value.trim();
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
    projects.forEach((project, idx) => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <a href="${project.link}" class="project-title" target="_blank" rel="noopener">${project.title}</a>
        <p class="project-desc">${project.desc}</p>
        <button class="delete-btn" data-idx="${idx}">Delete</button>
      `;
      card.querySelector('.delete-btn').addEventListener('click', () => {
        projects.splice(idx, 1);
        localStorage.setItem('projects', JSON.stringify(projects));
        renderProjects();
      });
      projectList.appendChild(card);
    });
  }
}); 