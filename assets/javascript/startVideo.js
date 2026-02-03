export function startVideo() {
  const video = document.getElementById("video");
  document.body.addEventListener("touchstart", () => {
    video.muted = true;
    video.play();
  });
}
