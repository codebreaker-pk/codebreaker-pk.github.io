// dark-mode.js - Dark mode toggle functionality

document.addEventListener('DOMContentLoaded', function() {
    initDarkMode();
  });
  
  function initDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const htmlElement = document.documentElement;
    
    // Check for saved theme preference or use the system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      htmlElement.setAttribute('data-theme', savedTheme);
    } else if (systemPrefersDark) {
      htmlElement.setAttribute('data-theme', 'dark');
    }
    
    // Toggle theme when button is clicked
    darkModeToggle.addEventListener('click', function() {
      const currentTheme = htmlElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      htmlElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      // Optional: Add transition effects when switching themes
      document.body.classList.add('theme-transition');
      setTimeout(() => {
        document.body.classList.remove('theme-transition');
      }, 500);
    });
  }