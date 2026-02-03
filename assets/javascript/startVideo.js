export function startVideo() {
  const video = document.getElementById("video");

  window.addEventListener("load", () => {
    video.muted = true;
    video.play().catch(() => {});
  });
}
