document.addEventListener('DOMContentLoaded', function(){
const nav = document.querySelector('.navbar');
const footerYear = document.querySelector('.footer__year');
const navToggle = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('.navbar-nav')

const addShadow = () => {
    if(window.scrollY >= 20){
        nav.style.backgroundColor = "#282A56"
        nav.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px"
    }else{
        nav.style.backgroundColor = 'transparent'
        nav.style.boxShadow = "none"
    }
}
const showNav = () => {
    if(navToggle.classList.contains('collapsed'))
    {
        nav.style.backgroundColor = "transparent"
    }else{
        nav.style.backgroundColor = "#282A56"
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