function getCurrentPostNumber() {
  const match = window.location.href.match(/blog-post-(\d+)\.html/);
  return match ? parseInt(match[1]) : null;
}

function goToNextPost() {
  const currentPost = getCurrentPostNumber();
  if (currentPost !== null && currentPost < 10) {
    window.location.href = `blog-post-${currentPost + 1}.html`;
  }
}

function goToPreviousPost() {
  const currentPost = getCurrentPostNumber();
  if (currentPost !== null && currentPost > 1) {
    window.location.href = `blog-post-${currentPost - 1}.html`;
  }
}