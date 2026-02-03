export function startVideo() {
  const video = document.getElementById("video");

  window.addEventListener("DOMContentLoaded", () => {
    video.muted = true;
    video.play().catch(() => {});
  });
}
