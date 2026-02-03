export function startVideo() {
  const video = document.getElementById("video");

  video.addEventListener("DOMContentLoaded", () => {
    video.muted = true;
    video.play().catch(() => {});
  });
}
