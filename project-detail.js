document.addEventListener('DOMContentLoaded', async () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  // Get index from URL
  const params = new URLSearchParams(window.location.search);
  const index = parseInt(params.get('index'), 10);

  // Fetch projects.json
  const response = await fetch('data/projects.json');
  const projects = await response.json();

  // Defensive: check index
  if (isNaN(index) || index < 0 || index >= projects.length) {
    document.getElementById('projectDetailTitle').textContent = 'Project Not Found';
    document.getElementById('projectDetailDesc').textContent = 'Sorry, the project you are looking for does not exist.';
    document.getElementById('projectDetailImg').src = 'https://placehold.co/1200x320?text=Not+Found';
    document.getElementById('projectDetailLink').style.display = 'none';
    return;
  }

  const project = projects[index];

  // Set content
  document.getElementById('projectDetailTitle').textContent = project.title;
  document.getElementById('projectDetailDesc').textContent = project.desc;
  document.getElementById('projectDetailImg').src = 'https://placehold.co/1200x320?text=Project+Image';
  document.getElementById('projectDetailLink').href = project.link;
  document.getElementById('projectDetailLink').textContent = 'View Project';
}); 