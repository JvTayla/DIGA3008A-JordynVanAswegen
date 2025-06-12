document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.getElementById("backtotopbtn");

  if (backToTopBtn) {
    const backToTopImg = backToTopBtn.querySelector("img");

    // Hover effect using class toggle
    backToTopBtn.addEventListener("mouseenter", () => {
      backToTopBtn.classList.add("hovered");
    });

    backToTopBtn.addEventListener("mouseleave", () => {
      backToTopBtn.classList.remove("hovered");
    });

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
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    });
  } else {
    console.warn("Back to top button not found.");
  }
});