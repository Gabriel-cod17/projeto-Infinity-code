export function google() {
  const banner = document.getElementById("cookie-banner");
  const accept = document.getElementById("accept-cookies");
  const reject = document.getElementById("reject-cookies");

  const consent = localStorage.getItem("cookieConsent");

  if (!consent) {
    banner.style.display = "flex";
  } else {
    banner.style.display = "none";
    if (consent === "aceito") {
      loadGoogleAnalytics();
    }
  }

  accept.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "aceito");
    banner.style.display = "none";
    loadGoogleAnalytics();
  });

  reject.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "Rejeitado");
    banner.style.display = "none";
  });

  function loadGoogleAnalytics() {
    if (window.gaLoaded) return;
    window.gaLoaded = true;

    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-9893024MK8";
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-9893024MK8");
  }
}
