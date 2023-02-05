let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    about.classList.remove('active');
}

let about = document.querySelector('.about');

document.querySelector('#about-btn').onclick = () =>{
    navbar.classList.remove('active');
    about.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    about.classList.remove('active');
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });