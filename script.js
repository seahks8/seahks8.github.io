    const form = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = {
        name: document.getElementById('name').value,
        contact: document.getElementById('contact').value,  
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
      };

      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbyOTdOW-_v7Hws2sTYyfqVl7j9sgL8NZsi2mNvI5W-iIk3JRO39CgbxXWV3Oy-kZHjS/exec', {
          method: 'POST',
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          responseMessage.textContent = 'Thank you! Your message has been sent.';
          form.reset();
        } else {
          responseMessage.textContent = 'Error submitting the form. Please try again.';
        }
      } catch (error) {
        responseMessage.textContent = 'An error occurred. Please try again.';
      }
    });
