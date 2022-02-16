/* abre e fecha o menu quando clicar no icone: hanburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

/* mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
    if(window.scrollY >= navHeight) {
        // scroll é maior que a altur do header
        header.classList.add('scroll')
    } else {
        // menor que a altura do header
        header.classList.remove('scroll')
    }
})

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper',{
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
    },
    mouswheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        },
    }

})

/* Srcoll reveal */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, about .text,
    #service header, #service .card,
    #textimonial header, #textimonial .textimonials,
    #contact .text #contact .links,
    footer .brand, footer .social`
    , {interval: 100 }) 


/* back to top */

const backToTopButtom = document.querySelector('.back-to-top')
window.addEventListener('scroll', function() {
    if(window.scrollY >= 560) {
        backToTopButtom.classList.add('show')
    } else {
        backToTopButtom.classList.remove('show')
    }
})

