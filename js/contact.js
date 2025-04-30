document.addEventListener('DOMContentLoaded', function() {
  initContactForm();
  initContactAnimation();
});

function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          // Don't prevent default - let the form submit to Formspree
          
          // But we can still validate before submission
          const nameInput = document.getElementById('name');
          const emailInput = document.getElementById('email');
          const messageInput = document.getElementById('message');
          
          if (!nameInput.value.trim() || !emailInput.value.trim() || 
              !isValidEmail(emailInput.value.trim()) || !messageInput.value.trim()) {
              e.preventDefault(); // Stop form submission if validation fails
              
              // Show appropriate validation errors
              if (!nameInput.value.trim()) showFormError(nameInput, 'Please enter your name');
              if (!emailInput.value.trim()) showFormError(emailInput, 'Please enter your email');
              else if (!isValidEmail(emailInput.value.trim())) showFormError(emailInput, 'Please enter a valid email');
              if (!messageInput.value.trim()) showFormError(messageInput, 'Please enter your message');
              
              return;
          }
          
          // If we get here, form is valid and will submit to Formspree
          // Show loading state
          const submitButton = contactForm.querySelector('.btn-submit');
          submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
          submitButton.disabled = true;
      });
  }
  
  // Helper functions remain the same
  function showFormError(inputElement, message) {
      // Implementation unchanged
  }
  
  function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }
}

function initContactAnimation() {
  // Implementation unchanged
}