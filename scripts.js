// ==========================
// VIDEO HOVER AUTOPLAY
// ==========================

document.addEventListener("DOMContentLoaded", function () {

  const videos = document.querySelectorAll(".video-card video");

  videos.forEach(video => {
    const card = video.closest(".video-card");

    // Desktop hover autoplay
    card.addEventListener("mouseenter", () => {
      videos.forEach(v => {
        if (v !== video) {
          v.pause();
          v.currentTime = 0;
        }
      });

      video.play().catch(() => {});
    });

    card.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });

  });

});
