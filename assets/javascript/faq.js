export function Faq() {
  const faq_Question = document.querySelectorAll(".faq_Question");
  const faq_Answer = document.querySelectorAll(".faq_Answer");

  faq_Question.forEach((botao) => {
    botao.addEventListener("click", () => {
      const resposta = botao.parentElement.nextElementSibling;
      const img_Seta = botao.querySelector(".img_Seta");

      faq_Answer.forEach((ele) => {
        if (ele !== resposta) {
          ele.classList.remove("entrou");
          const outraSeta =
            ele.previousElementSibling.querySelector(".img_Seta");
          if (outraSeta) {
            outraSeta.src = "assets/img/angulo-para-baixo.webp";
          }
        }
      });

      if (resposta.classList.contains("entrou")) {
        resposta.classList.remove("entrou");
        img_Seta.src = "assets/img/angulo-para-baixo.webp";
      } else {
        resposta.classList.add("entrou");
        img_Seta.src = "assets/img/angulo-para-cima.webp";
      }
    });
  });
}
