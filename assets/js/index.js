// Course Slider

$(".bottom-course-slider .owl-carousel").owlCarousel({
  loop: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 5000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 5,
    },
  },
});

// Hero Banner Slider

$(".hero-banner .owl-carousel").owlCarousel({
  loop: true,
  dots: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

// Events Slider

$(".events .owl-carousel").owlCarousel({
  loop: true,
  dots: false,
  autoplay: true,
  nav: true,
  navText: [
    "<i class='ri-skip-left-fill'></i>",
    "<i class='ri-skip-right-fill'></i>",
  ],
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
      nav: true,
      navText: [
        "<i class='ri-skip-left-fill'></i>",
        "<i class='ri-skip-right-fill'></i>",
      ],
    },
  },
});

// Students Slider

$(document).ready(function () {
  $(".students-carousel  .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    navText: [
      "<i class='ri-skip-left-fill'></i>",
      "<i class='ri-skip-right-fill'></i>",
    ],
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  });
});

// CLients Slider

$(document).ready(function () {
  $(".client-slider  .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 5,
      },
    },
  });
});

// NAVBAR TOGGLE

const navbtn = document.querySelector(".navbar-toggle");
const navlist = document.querySelector("nav");
navbtn.addEventListener("click", () => {
  navlist.classList.toggle("active-head");
  navbtn.classList.toggle("active-navbtn");
});


// lightbox

function openLightbox(imageSrc) {
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  lightbox.style.display = 'block';
  lightboxImg.src = imageSrc;
}

function closeLightbox() {
  var lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'none';
}

