document
  .getElementById("contact-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        document.getElementById("response-msg").textContent =
          "Thanks for your message!";
        form.reset();
      } else {
        document.getElementById("response-msg").textContent =
          "Oops! Something went wrong.";
      }
    } catch (error) {
      document.getElementById("response-msg").textContent =
        "Network error. Try again later.";
    }
  });
