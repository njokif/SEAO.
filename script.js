// script.js
document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll("a");
  
    links.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
  
        var targetId = this.hash.substring(1);
        var targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth"
          });
        }
      });
    });
  });
  