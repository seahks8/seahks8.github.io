const form = document.getElementById('contact-form');
const responseMessage = document.getElementById('response-message');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = {
    name: document.getElementById('name').value,
    hp: document.getElementById('hp').value,
    email: document.getElementById('email').value,
    address: document.getElementById('address').value,
    subscription: document.getElementById('subscription').value,
    msticker: document.getElementById('msticker').value,
    nmsticker: document.getElementById('nmsticker').value,
    noplate: document.getElementById('noplate').value,
    message: document.getElementById('message').value
  };

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbwHE3h8DAx4LWAsafYzn-eIQCZsjuREFs91VTAIUQO3oUiHVp8Nl1e9RbIpUkS1HbWS/exec', {
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
