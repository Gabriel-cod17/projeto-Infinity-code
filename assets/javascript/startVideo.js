export function startVideo() {
  const video = document.getElementById("video");

  video.muted = true;
  video.onplay().catch(() => {});
  document.removeEventListener("touchstart", startVideo);
}
