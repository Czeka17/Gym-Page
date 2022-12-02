document.addEventListener('DOMContentLoaded', function(){
const nav = document.querySelector('.navbar');
const footerYear = document.querySelector('.footer__year');
const navToggle = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('.navbar-nav')

const addShadow = () => {
    if(window.scrollY >= 200){
        nav.style.backgroundColor = "#000000"
    }else{
        nav.style.backgroundColor = 'transparent'
    }
}
const showNav = () => {
    if(navToggle.classList.contains('collapsed'))
    {
        nav.style.backgroundColor = "transparent"
    }else{
        nav.style.backgroundColor = "#000000"
    }
}
const handleYear = () =>{
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}
handleYear()
window.addEventListener('scroll',addShadow)
navToggle.addEventListener('click', showNav)
})