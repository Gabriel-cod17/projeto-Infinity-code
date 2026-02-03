export function MenuAberto() {
  const menu_Aberto = document.getElementById("menu_Aberto");
  const header_Mobile = document.getElementById("header_Mobile");

  menu_Aberto.addEventListener("click", () => {
    if (header_Mobile.classList.contains("header_Mobile_Entrou")) {
      header_Mobile.classList.remove("header_Mobile_Entrou");
      menu_Aberto.src = "assets/img/menu-aberto.png";
    } else {
      header_Mobile.classList.add("header_Mobile_Entrou");
      menu_Aberto.src = "assets/img/x.png";
    }
  });
}
