
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
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" version="1.1">
  <path d="M21 12H3m6-6l-6 6 6 6" 
          stroke="#ff5000"
        stroke-width="1" 
        stroke-linecap="round" 
        stroke-linejoin="round"/>
</svg>
    </span>`,
    `  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" version="1.1">
  <path d="M3 12h18M15 6l6 6-6 6" 
        stroke="#ff5000" 
        stroke-width="1" 
        stroke-linecap="round" 
        stroke-linejoin="round"/>
</svg>
    </span>`
  ]
});

