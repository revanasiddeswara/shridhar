// Get that hamburger menu cookin' //

document.addEventListener("DOMContentLoaded", function() {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function($el) {
      $el.addEventListener("click", function() {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

// Smooth Anchor Scrolling
$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});

// When the user scrolls down 20px from the top of the document, show the scroll up button
window.onscroll = function() {
  scrollFunction();
};
var music = document.getElementById("bgMusic");
var playIcon = document.getElementById("playIcon");
var pauseIcon = document.getElementById("pauseIcon");

// Play background music when the page loads
window.onload = function() {
  music.play();
  playIcon.style.display = "none"; // Hide play icon
  pauseIcon.style.display = "inline"; // Display pause icon
};

function toggleMusic() {
  if (music.paused) {
    music.play();
    playIcon.style.display = "none"; // Hide play icon
    pauseIcon.style.display = "inline"; // Display pause icon
  } else {
    music.pause();
    playIcon.style.display = "inline"; // Display play icon
    pauseIcon.style.display = "none"; // Hide pause icon
  }
}

console.log("Script loaded");
document.addEventListener('DOMContentLoaded', function() {
  console.log("DOMContentLoaded event fired"); // Add this line to check if the event is firing

  const form = document.getElementById('orderForm');
  const confirmationMsg = document.getElementById('confirmation');

  form.addEventListener('submit', function(event) {
      console.log("Form submitted"); // Add this line to check if the form submission event is firing
      event.preventDefault(); // Prevent default form submission
      const formData = new FormData(form);
      const formDataObject = {};
      formData.forEach((value, key) => {
          formDataObject[key] = value;
      });
      console.log("Form data:", formDataObject); // Add this line to check the form data
      sendFormData(formDataObject);
      confirmationMsg.style.display = 'block';
      form.reset();
  });


  function sendFormData(formData) {
      const { name, email, tel, messages } = formData;
      const message = `Hi Sid's PixelVows\n\nName: ${name}\nEmail: ${email}\nContact: ${tel}\nMessage: ${messages}`;
      console.log("WhatsApp message:", message); // Add this line to check the WhatsApp message
      // Replace '6362041773' with the correct phone number
      const whatsappLink = `https://wa.me/6362041773/?text=${encodeURIComponent(message)}`;
      console.log("WhatsApp link:", whatsappLink); // Add this line to check the WhatsApp link
      window.open(whatsappLink, '_blank');
  }
});
console.log("Script loadedsss");


function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("toTop").style.display = "block";
  } else {
    document.getElementById("toTop").style.display = "none";
  }
}

// Preloader
$(document).ready(function($) {
  $(".preloader-wrapper").fadeOut();
  $("body").removeClass("preloader-site");
});
$(window).load(function() {
  var Body = $("body");
  Body.addClass("preloader-site");
});

