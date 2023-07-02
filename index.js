const themeToggler = document.getElementById('theme-toggler');
const themeIcon = document.getElementById('theme-icon');
const btn  = document.getElementById('menu-btn');


themeToggler.addEventListener('click', function(){ 
    document.body.classList.toggle('dark_mode');
    themeIcon.classList.toggle("fa-sun")
});

btn.addEventListener('click', ()=>{
    btn.classList.toggle('open');
    menu.classList.toggle('show-menu')
})