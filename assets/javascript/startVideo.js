export function startVideo() {
  const video = document.getElementById("video");
  if (!video) return;

  // Função que toca o vídeo, com fallback
  const playVideo = () => {
    video.muted = true; // garante autoplay permitido
    video.play().catch((error) => {
      console.log(
        "Autoplay bloqueado, esperando interação do usuário...",
        error,
      );

      // fallback: toca após o primeiro clique ou toque
      const userInteract = () => {
        video
          .play()
          .catch((err) =>
            console.log("Ainda não foi possível tocar o vídeo:", err),
          );
        document.removeEventListener("click", userInteract);
        document.removeEventListener("touchstart", userInteract);
      };

      document.addEventListener("click", userInteract);
      document.addEventListener("touchstart", userInteract);
    });
  };

  // Tenta tocar quando o vídeo estiver pronto para reproduzir
  video.addEventListener("canplay", playVideo);
}
