document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".jordyn-image");
  let currentIndex = 0;
  const duration = 600; 

  const clickMeButton = document.querySelector('.click-me');
  const popup = document.getElementById('popup-message');
  const closeBtn = document.getElementById('close-popup');
  const flipSound = document.getElementById('flip-sound');

  // Show "Click me" button after 5 seconds
  setTimeout(() => {
    if (clickMeButton) {
      clickMeButton.style.display = 'block';
    }
  }, 5000);

  images.forEach(img => {
    img.addEventListener("click", () => {
      // Prevent clicks during animation
      if (img.classList.contains("flip-out") || img.classList.contains("flip-in")) {
        return;
      }

      // Play flip sound effect
      if (flipSound) {
        flipSound.currentTime = 0; // rewind to start
        flipSound.play();
      }

      // Hide "Click me" button when any image is clicked
      if (clickMeButton) {
        clickMeButton.style.display = 'none';
      }

      const current = images[currentIndex];
      const nextIndex = (currentIndex + 1) % images.length;
      const next = images[nextIndex];

      // Phase 1: flip out current image
      current.classList.remove("showing");
      current.classList.add("flip-out");

      setTimeout(() => {
        current.classList.remove("flip-out");

        // Phase 2: flip in next image
        next.classList.add("flip-in");

        setTimeout(() => {
          next.classList.remove("flip-in");
          next.classList.add("showing");
          currentIndex = nextIndex;
        }, duration);

      }, duration);
    });
  });

  // Show popup when "Click me" button clicked
  if (clickMeButton && popup && closeBtn) {
    clickMeButton.addEventListener('click', () => {
      popup.style.display = 'block';
    });

    // Close popup
    closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  }
});