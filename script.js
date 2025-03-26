const form = document.getElementById('contact-form');
const responseMessage = document.getElementById('response-message');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = {
    name: document.getElementById('name').value,
    hp: document.getElementById('hp').value,
    email: document.getElementById('email').value,
    car: document.getElementById('car').value,
    message: document.getElementById('message').value
  };

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbzbErEC_L2_-m-rawWBTf7aEYUeck3VuzeqjY6MUbZJ963tt9lAxvZgfU-g5FyGVPjq/exec', {
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
