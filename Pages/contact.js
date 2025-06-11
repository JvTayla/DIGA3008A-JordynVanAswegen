const form = document.getElementById("contact-form");
const responseMsg = document.getElementById("response-msg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  const action = form.action;

  fetch(action, {
    method: "POST",
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      responseMsg.textContent = "Thanks! Your message was sent.";
      form.reset();
    } else {
      response.json().then(data => {
        if (data.errors) {
          responseMsg.textContent = data.errors.map(error => error.message).join(", ");
        } else {
          responseMsg.textContent = "Oops! Something went wrong.";
        }
      });
    }
  }).catch(error => {
    responseMsg.textContent = "Oops! Something went wrong.";
    console.error("Error!", error);
  });
});