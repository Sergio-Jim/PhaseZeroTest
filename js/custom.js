(function ($) {
  
    "use strict";
  
      // PRE LOADER
      window.addEventListener("load", function () {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
          setTimeout(() => {
            console.log("load")
            preloader.style.transition = 'opacity 0.5s';
            preloader.style.opacity = '0';
      
            // Once the transition is complete, hide the preloader
            preloader.addEventListener('transitionend', () => {
              preloader.style.display = 'none';
            });
          }, 800); // Delay
        }
      });

      // NAVBAR
      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".nav-menu");

      hamburger.addEventListener("click", mobileMenu);

      function mobileMenu() {
          hamburger.classList.toggle("active");
          navMenu.classList.toggle("active");
      }


      // when we click on hamburger icon its close 

      const navLink = document.querySelectorAll(".nav-link");

      navLink.forEach(n => n.addEventListener("click", closeMenu));

      function closeMenu() {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
      }

      // SLIDER
      let slideIndex = 0;
      showSlides();

      function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 6000); // Change image every 2 seconds
      };
    })();
    