const navbar = document.getElementById('navbar')
let scrolled = false;

window.onscroll = function(){
    if(window.pageYOffset > 100){
        navbar.classList.remove('top');
        if(!scrolled){
            navbar.style.transform = 'translateY(-70px)';
        }
        setTimeout(function(){
            navbar.style.transform = 'translateY(0)';
        }, 200);
        scrolled = true;
    }else{
        navbar.classList.add('top');
        scrolled = false;
    }
}