const toggleMenu = document.querySelector('.toggle-menu');
const menu = document.querySelector('.menu');

toggleMenu.addEventListener('click', function () {
  const open = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
  toggleMenu.setAttribute('aria-expanded', !open);
  menu.hidden = !menu.hidden;
  document.body.dataset.burger = !open;
});

menu.addEventListener('click', function() {
  menu.hidden = !menu.hidden;
  toggleMenu.setAttribute('aria-expanded', !open);
  document.body.dataset.burger = !open;
})

$('.parallax-window').parallax({imageSrc: '../img/Photo_montagnes.png'});







const theScroll = document.querySelector('.site-header');
window.addEventListener('scroll', function() {
  theScroll.style.backgroundColor="RGBa(54, 147, 214," + scrollY/600 + ")"
});

window.addEventListener('scroll', function() {
  var element1 = document.querySelector('#about');
  var element2 = document.querySelector('#contact');
  var position1 = element1.getBoundingClientRect();
  var position2 = element2.getBoundingClientRect();

  if(position2.top <= 700) {
    document.querySelector(".lin1").className = "lin1";
    document.querySelector(".lin2").className = "lin2";
    document.querySelector(".lin3").className = "lin3 link-underline";}
  else if(position1.top <= 65) {
    document.querySelector(".lin1").className = "lin1";
    document.querySelector(".lin2").className = "lin2 link-underline";
    document.querySelector(".lin3").className = "lin3";}
  
  else{
    document.querySelector(".lin1").className = "lin1 link-underline";
    document.querySelector(".lin2").className = "lin2";
    document.querySelector(".lin3").className = "lin3";
  }
 
});



const slider3d = document.getElementById("slider3d");
const move1 = document.getElementById('move1');
const move2 = document.getElementById('move2');
const move3 = document.getElementById('move3');

move1.addEventListener('click', function () {
  {slider3d.className = "members turn-right";
  move1.className = "btn-move slideActive";
  move2.className = "btn-move";
  move3.className = "btn-move";
}
});

move2.addEventListener('click', function () {
  {slider3d.className = "members turn-front";
  move1.className = "btn-move";
  move2.className = "btn-move slideActive";
  move3.className = "btn-move";
}
});

move3.addEventListener('click', function () {
  {slider3d.className = "members turn-left";
  move1.className = "btn-move";
  move2.className = "btn-move";
  move3.className = "btn-move slideActive";
}
});


const logoAngle = document.querySelector('h1');
window.addEventListener("orientationchange", function() {
  if (screen.orientation.angle != 0 && screen.width < 740){
    logoAngle.style.scale="0.7";
    logoAngle.style.marginBottom="0";
    logoAngle.style.paddingBottom="0";

  }
  else{
    logoAngle.style.scale="1";
    logoAngle.style.marginBottom="0.25em";
    logoAngle.style.paddingBottom="0.8em";
  }
});