/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


// let ticking = false;

// document.addEventListener('wheel', function(event) {
//   if (!ticking) {
//     ticking = true;
    
//     setTimeout(function() {
//       const direction = event.deltaY > 0 ? 1 : -1;
//       window.scrollBy({ top: direction * window.innerHeight, left: 0, behavior: 'smooth' });
//       ticking = false;
//     }, 100); // Le temps peut être ajusté pour rendre ça plus ou moins smooth
//   }
  
//   event.preventDefault();
// }, { passive: false });


// const sections = document.querySelectorAll('section.resume-section');

// const observerOptions = {
//   threshold: 0.5
// };

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//       });
//     }
//   });
// }, observerOptions);

// sections.forEach(section => {
//   observer.observe(section);
// });