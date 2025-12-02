console.log("JS funguje");

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

// pokud cookie neexistuje → ukáže banner
if (!getCookie("cookies_accepted")) {
  document.getElementById("cookie-banner").style.display = "block";
}

// kliknutí na "Souhlasím"
document.getElementById("accept-cookies").addEventListener("click", () => {
  document.cookie = "cookies_accepted=true; path=/; max-age=31536000; SameSite=Lax; Secure";
  document.getElementById("cookie-banner").style.display = "none";
});