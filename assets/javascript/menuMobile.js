export function menuMobile() {
  const header_Mobile = document.getElementById("header_Mobile");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header_Mobile.classList.add("scrolled");
    } else {
      header_Mobile.classList.remove("scrolled");
    }
  });
}
