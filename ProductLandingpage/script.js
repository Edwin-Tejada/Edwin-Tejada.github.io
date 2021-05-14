//AOS Animation on Scroll
AOS.init({
  offset: 30,
  duration: 1300,
  easing: 'ease-in-out',
  delay: 70,
});
//End AOS Animation on Scroll

//Responsive Nav Mobile
const header = document.getElementById('header')
const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');

      document.onclick = function(e){
        if(e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navbar'){
          toggle.classList.remove('active');
          navbar.classList.remove('active');
        }
      }

      toggle.onclick = function(){
        toggle.classList.toggle('active');
        navbar.classList.toggle('active');
      }