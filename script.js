function sayHello() {
  alert("Thanks for visiting my portfolio 😊");
}
function toggleMenu() {
  const nav = document.getElementById("navLinks");

  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
}
