// Define globally so onclick can access them
function getCurrentPostNumber() {
  const match = window.location.href.match(/blog-post-(\d+)\.html/);
  return match ? parseInt(match[1]) : null;
}

function goToNextPost() {
  const currentPost = getCurrentPostNumber();
  if (currentPost !== null && currentPost < 10) {
    const nextPost = currentPost + 1;
    window.location.href = `blog-post-${nextPost}.html`;
  }
}

function goToPreviousPost() {
  const currentPost = getCurrentPostNumber();
  if (currentPost !== null && currentPost > 1) {
    const prevPost = currentPost - 1;
    window.location.href = `blog-post-${prevPost}.html`;
  }
}

// Optional: Only run something extra once DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // e.g. Disable buttons on first/last posts if needed
});