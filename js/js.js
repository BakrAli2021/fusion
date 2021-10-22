$(function() {
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        autoplay: true,
        dotsEach: true,
        autoplayHoverPause: true,
        autoplaySpeed: 500,
    });
});

let inputs = document.querySelectorAll('section.contact form input');
inputs.forEach((input) => {
    input.addEventListener('focus', () => {
        input.previousElementSibling.classList.add('move');
    });
    input.addEventListener('blur', () => {
        input.previousElementSibling.classList.remove('move');
    });
});
window.onscroll = () => {
    if (window.scrollY > 500) {
        document.querySelector('div.top').style.opacity = '1';
    } else {
        document.querySelector('div.top').style.opacity = '0';
    }
    document.querySelector('div.topscroll').style.width = window.scrollY / 2 + 'px';

}

////// AOS animation
AOS.init();
