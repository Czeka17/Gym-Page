document.addEventListener('DOMContentLoaded', function(){
const nav = document.querySelector('.navbar');
const footerYear = document.querySelector('.footer__year')

function addShadow () {
    if(window.scrollY >= 200){
        nav.style.backgroundColor = "#000000"
    }else{
        nav.style.backgroundColor = 'transparent'
    }
}
const handleYear = () =>{
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}
handleYear()
window.addEventListener('scroll', addShadow)
})