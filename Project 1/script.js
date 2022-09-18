// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function () {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}


// Contact Section JS

$(document).ready(function () {
  $('#form').trigger("reset");
  $("form :input").attr("autocomplete", "off");
  $('#form').submit(function (e) {
    e.preventDefault();
    var fname = $('#fullname').val();
    var email = $('#email').val();
    var pass = $('#textarea').val();

    $(".error").remove();

    if (fname.length < 1) {
      $('#fullname').after('<span class="error">Enter your fullname here!</span>');
      $('#fullname').addClass('error-icon');
    } else {

      $('#fullname').removeClass('error-icon');

    }

    if (email.length < 1) {
      $('#email').after('<span class="error">Email cannot be empty</span>');
      $('#email').addClass('error-icon');
    } else {
      var regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        $('#email').after('<span class="error">Looks like this is not an email</span>');
        $('#email').addClass('error-icon');
      } else {

        $('#email').removeClass('error-icon');

      }
    }
    if (pass.length < 1) {
      $('#textarea').after('<span class="error">Type your Request here!</span>');
      $('#textarea').addClass('error-icon');
    } else {

      $('#textarea').removeClass('error-icon');

    }
  });

});









