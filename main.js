const dynamicText = new Typed('#dynamicText', {
    strings: ['Certified Accountant', 'Graphic Designer','Data entry operator',],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 10,
    loop: true
});

document.getElementById("menu-icon").addEventListener("click", function(){
    document.querySelector(".navbar").classList.toggle("active");
});

ScrollReveal().reveal('.home-content, .heading', {
    origin: 'top',
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.homeimage, .services-container, .portfolio-box, .contact form', {
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content h1, .about-img', {
    origin: 'left',
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content p, .about-content', {
    origin: 'right',
    distance: '80px',
    duration: 2000,
    delay: 200
});
