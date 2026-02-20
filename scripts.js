const videos = document.querySelectorAll(".video-card video");

videos.forEach(video => {
  video.parentElement.addEventListener("mouseenter", () => {
    // Stop other videos
    videos.forEach(v => {
      if (v !== video) {
        v.pause();
        v.currentTime = 0;
      }
    });
    video.play();
  });

  video.parentElement.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});
