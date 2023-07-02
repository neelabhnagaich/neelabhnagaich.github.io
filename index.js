const themeToggler = document.getElementById('theme-toggler');
const themeIcon = document.getElementById('theme-icon');
const btn  = document.getElementById('menu-btn');
const menu = document.querySelector(".mobile-main-menu")

themeToggler.addEventListener('click', function(){ 
    document.body.classList.toggle('dark_mode');
    themeIcon.classList.toggle("fa-sun")
});

btn.addEventListener('click', ()=>{
    btn.classList.toggle('open');
    menu.classList.toggle('show-menu')
})