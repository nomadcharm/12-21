
// load

let tl = gsap.timeline();

  tl.from('.hero__title', {duration: 1, y: 200, opacity: 0});
  tl.from('.hero__button', {duration: 0.5, y: 100, opacity: 0}, '-=0.9');
  tl.from('.hero__text', {duration: 0.4, opacity: 0});
  tl.from('.photo-one', {duration: 0.4, scale: 0, opacity: 0}, '-=0.1');
  tl.from('.photo-two', {duration: 0.4, scale: 0, opacity: 0});
  tl.from('.photo-three', { duration: 0.4, scale: 0, opacity: 0});
  tl.from('.photos__author', {duration: 0.75, opacity: 0});

// burger

let burger = document.querySelector('.burger');
let close = document.querySelector('.close');
let menuLinks = document.querySelectorAll('.navigation__link');
let subLinks = document.querySelectorAll('.sub-menu__link');
let socialLinks = document.querySelectorAll('.socials__link');

let time = new gsap.timeline({paused: true});

  time.to('.menu', {duration: 0.0001, display: 'block', y: 0});
  time.from('.menu__top', {duration: 0.6, y: -100, opacity: 0.3}, '-=0.0001');
  time.fromTo('.menu__main', {y: 500, opacity: 0.3}, {duration: 0.5, y: 0, opacity: 1}, '-=0.5');
  time.from('.navigation__list', {duration: 0.5, y: 50, opacity: 0});
  time.from('.sub-menu', {duration: 0.5, y: 50, opacity: 0});
  time.from('.socials', {duration: 0.5, y: 50, opacity: 0}, '-=0.5');

  burger.addEventListener('click', function() {
    time.play()
  });

  close.addEventListener('click', function() {
    time.reverse()
  });

  menuLinks.forEach(function(menuLink) {
    menuLink.addEventListener('click', function() {
      time.reverse()
    })
  });

  subLinks.forEach(function(subLink) {
    subLink.addEventListener('click', function() {
      time.reverse()
    })
  });

  socialLinks.forEach(function(socials) {
    socials.addEventListener('click', function() {
      time.reverse()
    })
  });

