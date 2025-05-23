  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("backToTopBtn");

    // Show or hide the button on scroll
    window.onscroll = function () {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    };

    // Handle click event to scroll to top
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });