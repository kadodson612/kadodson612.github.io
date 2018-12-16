$(document).ready(function(){

$(".nav-link").hover(
  function () {
    $(this).addClass('active');
  }, 
  function () {
    $(this).removeClass('active');
  }
);

window.onscroll = function() {myFunction()};

var header = document.getElementById("page-nav");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


});
