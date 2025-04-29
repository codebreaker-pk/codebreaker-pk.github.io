// main.js - Main functionality for all pages

// Page Load Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initLoaderAnimation();
    initMobileMenu();
    initStickyHeader();
    initBackToTop();
    initAnimations();
    
    // Start statistics counter on homepage if it exists
    if (document.querySelector('.statistics')) {
      initStatisticsCounter();
    }
  });
  
  // Loading Animation
  function initLoaderAnimation() {
    window.addEventListener('load', function() {
      const loader = document.getElementById('loader-wrapper');
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    });
  }
  
  // Mobile Navigation Menu
  function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
    });
  
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.classList.remove('no-scroll');
      });
    });
  }
  
  // Sticky Header
  function initStickyHeader() {
    window.addEventListener('scroll', function() {
      const header = document.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 0);
    });
  }
  
  // Back to Top Button
  function initBackToTop() {
    const backToTopButton = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTopButton.classList.add('active');
      } else {
        backToTopButton.classList.remove('active');
      }
    });
  
    backToTopButton.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  
  // Statistics Counter on Scroll
  function initStatisticsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    
    // Check if element is in viewport
    function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    
    // Counter animation
    function countUp() {
      stats.forEach(stat => {
        if (isInViewport(stat) && !stat.classList.contains('counted')) {
          stat.classList.add('counted');
          
          const target = parseInt(stat.getAttribute('data-count'));
          let count = 0;
          const increment = target / 30; // Divide by number of steps
          
          const timer = setInterval(() => {
            count += increment;
            stat.textContent = Math.floor(count);
            
            if (count >= target) {
              stat.textContent = target;
              clearInterval(timer);
            }
          }, 30);
        }
      });
    }
    
    // Initial check
    countUp();
    
    // Check on scroll
    window.addEventListener('scroll', countUp);
  }
  
  // General Animations
  function initAnimations() {
    // Add smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]:not(.back-to-top)').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }