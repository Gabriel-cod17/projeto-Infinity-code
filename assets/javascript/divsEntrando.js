export function Sumiu() {
  const sumiu = document.querySelectorAll(".sumiu");
  const observerSumiu = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("entrouSumiu");
      }
    });
  });

  sumiu.forEach((s) => {
    observerSumiu.observe(s);
  });
}

export function zoom() {
  const zoom = document.querySelectorAll(".zoom");
  const observerZoom = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("entrouZoom");
      }
    });
  });

  zoom.forEach((z) => {
    observerZoom.observe(z);
  });
}

export function eixoY() {
  const cima = document.querySelectorAll(".cima");
  const baixo = document.querySelectorAll(".baixo");

  const observerY = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("entrouY");
      }
    });
  });

  cima.forEach((c) => {
    observerY.observe(c);
  });

  baixo.forEach((b) => {
    observerY.observe(b);
  });
}

export function eixoX() {
  const esquerda = document.querySelectorAll(".esquerda");
  const direita = document.querySelectorAll(".direita");

  const observerX = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("entrouX");
      }
    });
  });

  esquerda.forEach((e) => {
    observerX.observe(e);
  });

  direita.forEach((d) => {
    observerX.observe(d);
  });
}
