export function startVideo() {
  const video = document.getElementById("video");

  video.addEventListener("canplaythrough", () => {
    video.play().catch(() => {});
  });
}
