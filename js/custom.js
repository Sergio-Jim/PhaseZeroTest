(function () {

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

  // Select required elements
  const body = document.body;
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLink = document.querySelectorAll(".nav-link");
  const header = document.querySelector(".header");

  // Active State
  // Function to set the active link
  function setActiveLink() {
    navLink.forEach(link => {
      // Remove active class from all links
      link.classList.remove("active");

      // Add active class if link's href matches the current URL
      if (link.href === window.location.href) {
        link.classList.add("active");
      }
    });
  }

  // Call setActiveLink on page load
  window.addEventListener("DOMContentLoaded", setActiveLink);

  // Mobile View
  // Function to toggle mobile menu and prevent scroll
  function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    // Prevent scrolling when menu is active
    if (navMenu.classList.contains("active")) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }
  }

  // Function to close the menu
  function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    body.classList.remove("no-scroll"); // Allow scrolling again
  }

  // Event listeners for hamburger menu and navigation links
  hamburger.addEventListener("click", mobileMenu);
  navLink.forEach(n => n.addEventListener("click", closeMenu));

  // Variables to track scroll direction
  let lastScrollY = window.scrollY;

  // Scroll event to hide or show the header
  window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
      // User is scrolling down
      header.style.top = "-80px"; // Adjust the value to hide the navbar completely
    } else {
      // User is scrolling up
      header.style.top = "0";
    }
    lastScrollY = window.scrollY;
  });


})();