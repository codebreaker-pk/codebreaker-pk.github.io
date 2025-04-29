// contact.js - Contact page specific functionality

document.addEventListener('DOMContentLoaded', function() {
    initContactForm();
    initContactAnimation();
  });
  
  // Contact Form Validation and Submission
  function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form fields
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');
        
        // Basic validation
        if (!nameInput.value.trim()) {
          showFormError(nameInput, 'Please enter your name');
          return;
        }
        
        if (!emailInput.value.trim()) {
          showFormError(emailInput, 'Please enter your email');
          return;
        }
        
        if (!isValidEmail(emailInput.value.trim())) {
          showFormError(emailInput, 'Please enter a valid email address');
          return;
        }
        
        if (!messageInput.value.trim()) {
          showFormError(messageInput, 'Please enter your message');
          return;
        }
        
        // Show loading state
        const submitButton = contactForm.querySelector('.btn-submit');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitButton.disabled = true;
        
        // Simulate form submission (replace with actual formspree implementation)
        setTimeout(() => {
          // Replace this with your actual form submission logic
          const formData = new FormData(contactForm);
          
          fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
              'Accept': 'application/json'
            }
          })
          .then(response => {
            if (response.ok) {
              // Show success message
              contactForm.innerHTML = `
                <div class="form-success">
                  <i class="fas fa-check-circle"></i>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                </div>
              `;
            } else {
              throw new Error('Network response was not ok.');
            }
          })
          .catch(error => {
            // Show error message
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            alert('There was a problem sending your message. Please try again later.');
          });
        }, 1500);
      });
    }
    
    // Helper functions
    function showFormError(inputElement, message) {
      // Add error class to input
      inputElement.classList.add('error');
      
      // Create or update error message
      let errorElement = inputElement.nextElementSibling;
      if (!errorElement || !errorElement.classList.contains('error-message')) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
      }
      errorElement.textContent = message;
      
      // Focus the input
      inputElement.focus();
      
      // Remove error on input change
      inputElement.addEventListener('input', function() {
        inputElement.classList.remove('error');
        if (errorElement) {
          errorElement.remove();
        }
      }, { once: true });
    }
    
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  }
  
  // Animated Background for Contact Page
  function initContactAnimation() {
    const shapes = document.querySelectorAll('.floating-shapes .shape');
    
    // Add random movement to shapes
    shapes.forEach(shape => {
      const randomX = Math.random() * 100 - 50; // -50 to 50
      const randomY = Math.random() * 100 - 50; // -50 to 50
      const randomDelay = Math.random() * 2; // 0 to 2
      const randomDuration = 15 + Math.random() * 10; // 15 to 25
      
      shape.style.animation = `floating ${randomDuration}s infinite ease-in-out ${randomDelay}s`;
      
      // Add additional transform for more variation
      shape.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
  }