const scriptURL = "https://script.google.com/macros/s/AKfycbzWQaN8_JbcjFDRxl0snOJlbJza3S64u6megyzjtqb-Qjp_yh3KkaYuU4c-evY911TG/exec";

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  fetch(scriptURL, {
    method: "POST",
    body: formData
  })
  .then(response => response.text())
  .then(result => {
    document.getElementById("response-msg").textContent = "Thanks! Your message was sent.";
    form.reset();
  })
  .catch(error => {
    document.getElementById("response-msg").textContent = "Oops! Something went wrong.";
    console.error("Error!", error.message);
  });
});