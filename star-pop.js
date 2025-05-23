document.addEventListener("DOMContentLoaded", () => {
  const burstContainer = document.getElementById("burst-container");

  const burstImages = [
    "main-image/diamond.png",
    "main-image/lightning.png",
    "main-image/wings.png",
    "main-image/dice.png"
  ];

  const popSequence = [
    "main-image/star-pop1.png",
    "main-image/star-pop2.png",
    "main-image/star-pop3.png"
  ];

  const popSound = document.getElementById("pop-sound");

  function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = `${Math.random() * window.innerWidth}px`;
    star.style.bottom = `0px`;
    star.style.backgroundImage = `url(${popSequence[0]})`;

    // Random delay & duration
    const delay = Math.random() * 5;
    const duration = 6 + Math.random() * 4;

    star.style.animationDelay = `${delay}s`;
    star.style.animationDuration = `${duration}s, ${duration}s`;

    star.addEventListener("click", () => {
      playPopAnimation(star);
    });

    burstContainer.appendChild(star);

    // Remove star after it floats off
    setTimeout(() => {
      if (burstContainer.contains(star)) {
        star.remove();
        createStar();
      }
    }, (delay + duration + 1) * 1000); // buffer time
  }

  function playPopAnimation(star) {
    // Play pop sound here on pop start
    if (popSound) {
      popSound.currentTime = 0;
      popSound.play().catch(e => {
        // handle autoplay restrictions silently
        console.warn("Pop sound play failed:", e);
      });
    }

    let frame = 0;
    const interval = setInterval(() => {
      if (frame < popSequence.length) {
        star.style.backgroundImage = `url(${popSequence[frame]})`;
        frame++;
      } else {
        clearInterval(interval);
        showBurst(star);
      }
    }, 100);
  }

  function showBurst(star) {
    const burst = document.createElement("div");
    burst.classList.add("burst");
    burst.style.left = star.style.left;
    burst.style.top = star.getBoundingClientRect().top + "px";
    burst.style.backgroundImage = `url(${burstImages[Math.floor(Math.random() * burstImages.length)]})`;

    burstContainer.appendChild(burst);
    star.remove();

    setTimeout(() => {
      burst.remove();
      createStar();
    }, 3000); // 3 seconds display
  }

  // Create initial stars
  for (let i = 0; i < 8; i++) {
    setTimeout(createStar, Math.random() * 5000);
  }
});
