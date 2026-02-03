export function startVideo() {
  const video = document.getElementById("video");

  window.addEventListener("load", () => {
    video.muted = true;
    video.play().catch(() => {});
  });

  document.body.addEventListener("touchstart", () => {
    video.muted = true;
    video.play();
  });
}
