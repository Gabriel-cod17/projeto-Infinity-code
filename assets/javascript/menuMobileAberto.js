export function MenuAberto() {
  const menu_Aberto = document.getElementById("menu_Aberto");
  const header_Mobile = document.getElementById("header_Mobile");

  menu_Aberto.addEventListener("click", () => {
    if (header_Mobile.classList.contains("header_Mobile_Entrou")) {
      header_Mobile.classList.remove("header_Mobile_Entrou");
      menu_Aberto.src = "../img/menu-aberto.png";
      menu_Aberto.classList.add("menu_aberto");
      menu_Aberto.classList.remove("menu_Fechado");
    } else {
      header_Mobile.classList.add("header_Mobile_Entrou");
      menu_Aberto.src = "../img/x.png";
      menu_Aberto.classList.add("menu_Fechado");
      menu_Aberto.classList.remove("menu_aberto");
    }
  });
}
