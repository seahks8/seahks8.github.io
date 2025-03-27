document.getElementById("subscription").addEventListener("change", calculateTotal);
document.getElementById("msticker").addEventListener("input", calculateTotal);
document.getElementById("nmsticker").addEventListener("input", calculateTotal);

function calculateTotal() {
    let subscription = document.getElementById("subscription").value;
    let msticker = parseInt(document.getElementById("msticker").value) || 0;
    let nmsticker = parseInt(document.getElementById("nmsticker").value) || 0;

    // Extract numeric value from subscription string (e.g., "Jan-Dec RM720" -> 720)
    let subscriptionValue = subscription.match(/\d+/g) ? parseInt(subscription.match(/\d+/g)[0]) : 0;

    let total = subscriptionValue + (5 * msticker) + (15 * nmsticker);
    
    document.getElementById("totalCost").value = "RM " + total;
}

const form = document.getElementById('contact-form');
const responseMessage = document.getElementById('form-response-message');

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
    message: document.getElementById('message').value,
    totalCost: document.getElementById('totalCost').value
  };

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbwHE3h8DAx4LWAsafYzn-eIQCZsjuREFs91VTAIUQO3oUiHVp8Nl1e9RbIpUkS1HbWS/exec', {
      method: 'POST',
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      responseMessage.textContent = 'Thank you! Your message has been sent.';
      form.reset();
      document.getElementById("totalCost").value = ""; // Reset total cost
    } else {
      responseMessage.textContent = 'Error submitting the form. Please try again.';
    }
  } catch (error) {
    responseMessage.textContent = 'An error occurred. Please try again.';
  }
});
