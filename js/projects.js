// projects.js - Projects page specific functionality

document.addEventListener('DOMContentLoaded', function() {
    initProjectFilters();
    initProjectModals();
    
    // Initialize particles background if it exists
    if (document.getElementById('particles-js')) {
      initParticlesBackground();
    }
  });
  
  // Project Category Filtering
  function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Get the selected category
        const selectedCategory = this.getAttribute('data-filter');
        
        // Filter projects
        projectCards.forEach(card => {
          if (selectedCategory === 'all' || card.getAttribute('data-category').includes(selectedCategory)) {
            card.style.display = 'block';
            setTimeout(() => {
              card.style.opacity = 1;
              card.style.transform = 'translateY(0)';
            }, 10);
          } else {
            card.style.opacity = 0;
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }
  
  // Project Modal Functionality
  function initProjectModals() {
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    const closeButtons = document.querySelectorAll('.close-modal');
    
    modalTriggers.forEach(trigger => {
      trigger.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetModal = document.querySelector(this.getAttribute('href'));
        targetModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
      
        // Fade in animation
        setTimeout(() => {
          targetModal.style.opacity = 1;
        }, 10);
      });
    });
    
    closeButtons.forEach(button => {
      button.addEventListener('click', function() {
        const modal = this.closest('.modal');
        
        // Fade out animation
        modal.style.opacity = 0;
        
        setTimeout(() => {
          modal.style.display = 'none';
          document.body.style.overflow = 'auto';
        }, 300);
      });
    });
    
    // Close modal if clicking outside content
    window.addEventListener('click', function(e) {
      document.querySelectorAll('.modal').forEach(modal => {
        if (e.target === modal) {
          // Fade out animation
          modal.style.opacity = 0;
          
          setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
          }, 300);
        }
      });
    });
  }
  
  // Particles Background
  function initParticlesBackground() {
    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#6C63FF"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 0.5,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 2,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#6C63FF",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  }