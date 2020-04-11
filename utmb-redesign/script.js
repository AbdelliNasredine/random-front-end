/**
 * implementing fixed navbar onscroll
 */
(function () {
  var navbar = document.querySelector("nav");
  var jumbotron = document.querySelector(".jumbotron");

  window.onscroll = function (event) {
    var scroll_position = this.scrollY;
    if (scroll_position >= jumbotron.offsetHeight)
      navbar.classList.add("fixed");
    else navbar.classList.remove("fixed");
  };
})();
