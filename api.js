// Simple API for loading data from JSON files
class DataAPI {
  constructor() {
    this.baseURL = window.location.origin;
  }

  // Load projects from JSON file
  async loadProjects() {
    try {
      const response = await fetch('data/projects.json');
      if (!response.ok) {
        throw new Error(`Failed to load projects: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      console.log('Projects loaded:', data);
      return data;
    } catch (error) {
      console.error('Error loading projects:', error);
      return [];
    }
  }

  // Load achievements from JSON file
  async loadAchievements() {
    try {
      const response = await fetch('data/achievements.json');
      if (!response.ok) {
        throw new Error(`Failed to load achievements: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      console.log('Achievements loaded:', data);
      return data;
    } catch (error) {
      console.error('Error loading achievements:', error);
      return [];
    }
  }

  // Generic load data method
  async loadData(type) {
    if (type === 'projects') {
      return await this.loadProjects();
    } else if (type === 'achievements') {
      return await this.loadAchievements();
    }
    return [];
  }
}

// Export for use in other files
window.DataAPI = DataAPI; 