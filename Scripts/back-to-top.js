document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.getElementById("backtotopbtn");

  if (backToTopBtn) {
  

    const backToTopImg = backToTopBtn.querySelector("img");
    if (backToTopImg) {
      

      // Add hover effect via JS
      backToTopBtn.addEventListener("mouseenter", () => {
        backToTopImg.style.transform = "scale(1.1)";
      });

      backToTopBtn.addEventListener("mouseleave", () => {
        backToTopImg.style.transform = "scale(1)";
      });
    }

    // Scroll to top on click
    backToTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    // Show/hide the button on scroll
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });
  } else {
    console.warn("Back to top button not found.");
  }
});