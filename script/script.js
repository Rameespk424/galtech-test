
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("nav-scrolled");
    } else {
      navbar.classList.remove("nav-scrolled");
    }
  });


  $('.spec-carousel').owlCarousel({
  loop: true,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 5
    }
  }
});



$('.best-carousel').owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    0: { items: 1 },
    600: { items: 2 },
    1000: { items: 4 }
  },
  navText: [
    `<span class="custom-arrow">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill="rgb(255,80,0)"/>
        <path d="M14 6l-6 6 6 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>`,
    `<span class="custom-arrow">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill="rgb(255,80,0)"/>
        <path d="M10 6l6 6-6 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>`
  ]
});

