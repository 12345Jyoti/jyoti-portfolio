const buttonClick = document.getElementById("btnClck");

const submitHandler = () => {
  // You can add form validation or email logic here if needed
};

$(document).ready(function () {
  // Sticky navbar on scroll
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // Scroll-up button show/hide
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // Slide-up button click
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    $("html").css("scrollBehavior", "auto");
  });

  // Smooth scroll on menu item click
  $(".navbar .menu li a").click(function () {
    $("html").css("scrollBehavior", "smooth");
  });

  // Toggle menu/navbar
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // Typing text animation
  new Typed(".typing", {
    strings: [
      "Java Backend Developer.",
      "Spring Boot Microservices Architect.",
      "REST API & WebSocket Specialist.",
      "Secure Auth & Payment Integration Expert.",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  new Typed(".typing-2", {
    strings: [
      "Java Backend Developer.",
      "Spring Boot Microservices Architect.",
      "REST API & WebSocket Specialist.",
      "Secure Auth & Payment Integration Expert.",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // Owl Carousel for Projects
  $(".projects .owl-carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    nav: true,
    navText: [
      "<i class='fas fa-chevron-left'></i>",
      "<i class='fas fa-chevron-right'></i>",
    ],
    responsive: {
      0: { items: 1, nav: false },
      600: { items: 2, nav: false },
      1000: { items: 3, nav: true },
    },
  });

  // Owl Carousel for Experience
  $(".experience .owl-carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    nav: true,
    navText: [
      "<i class='fas fa-chevron-left'></i>",
      "<i class='fas fa-chevron-right'></i>",
    ],
    responsive: {
      0: { items: 1, nav: false },
      600: { items: 1, nav: false },
      1000: { items: 1, nav: true },
    },
  });
});

