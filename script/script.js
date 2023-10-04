window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");

  var header = this.document.querySelector("header");
  var headerTamanho = header.clientHeight;

  if (window.scrollY >= headerTamanho) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});
