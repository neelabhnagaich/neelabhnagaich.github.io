const themeToggler = document.getElementById('theme-toggler');
const themeIcon = document.getElementById('theme-icon');
const btn  = document.getElementById('menu-btn');
const menu = document.querySelector(".mobile-main-menu")
const img = document.querySelector(".about-img")
let currenttheme = 'light'
themeToggler.addEventListener('click', function(){
    if(currenttheme == 'light'){
        currenttheme  = 'dark';
        img.src = './img/profile-pic.png';

    }else{
        currenttheme  = 'light'
        img.src = './img/profile-pic-light.png'
    }
    document.body.classList.toggle('dark_mode');
    themeIcon.classList.toggle("fa-sun");
    
});

btn.addEventListener('click', ()=>{
    btn.classList.toggle('open');
    menu.classList.toggle('show-menu')
})

function cleanUp(){
    let name  = document.getElementById("name");
    let email  = document.getElementById("email");
    let message  = document.getElementById("message");
    
    name.value = "";
    email.value = "";
    message.value = "";
    openNotifyBar();
}

function openNotifyBar(bgColor='green', msg="Successfully Sent Message"){
    let succesNotify  = document.querySelector('.success-info');
    succesNotify.style.visibility = 'visible';
    succesNotify.style.background = bgColor;
    succesNotify.innerText = msg;

    setTimeout(()=>{
        succesNotify.style.visibility = 'hidden';
    },2000)
}

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    let email  = document.getElementById("email");
    let message  = document.getElementById("message");
    if(email.value == "" || message.value ==""){
        openNotifyBar('red', "Email & Message cannot be empty")
        return;
    }
    var formData = new FormData(form);
    // output as an object
    console.log(Object.fromEntries(formData));

    const data = new URLSearchParams();
    for (const pair of formData.entries()) {
        data.append(pair[0], pair[1]);
    }


    fetch('https://formbold.com/s/3KAMj', {
        method: 'post',
        body: data,
    })
    .then(()=>{
        cleanUp();
    });

  });