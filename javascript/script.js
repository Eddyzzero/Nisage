
//ajouter scroll à l'image
window.addEventListener('scroll', function() {
    const scrollImage = document.querySelector('.nit-guepes');
    const scrollTop = window.scrollY || window.pageYOffset;

    // Modifier la position verticale de l'image en fonction du défilement
    scrollImage.style.top = `-${scrollTop}px`;
});

// ajouter hidden à mon texte
window.addEventListener('scroll',reveal);

function reveal (){
    const reveals = document.querySelectorAll('.parallax-gregory-text');

    for(let i = 0; i < reveals.length; i++) {
        let hauteurFenetre = window.innerHeight;
        let VoirHautFenetre = reveals[i].getBoundingClientRect().top;
        let pointVoir = 150;

        //creer l'animation scroll
        if ( VoirHautFenetre < hauteurFenetre -pointVoir){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

let faireDefiler = 300;
let quantiteDefilement = 0;

window.addEventListener('scroll', () =>{
    quantiteDefilement = window.scrollY;
    let containerInfosGre = document.querySelector('.container-infos-gre');
    if ( quantiteDefilement > faireDefiler ) {
        containerInfosGre.classList.add('defilement');
    } else {
        containerInfosGre.classList.remove('defilement');
    }
});
 
//deuxiéme texte de defilement

//definir la quantité de scroll pour faire apparaitre le texte
let scrollShowThreshold = 200;
let scrollHideThreshold = 1000;


// obtenir le texte caché
let hiddenText = document.getElementById('hiddenText');

window.addEventListener('scroll', () => {

    let scrollY = window.scrollY;
    // verifier la position du scroll verical
    if ( scrollY > scrollShowThreshold && scrollY < scrollHideThreshold ) {
        // si on fait un scroll plus grand que  200 montrer le texte caché
        hiddenText.style.display = 'block';
    } else {
        // si le scroll est moins que 200, cacher le texte
        hiddenText.style.display = 'none';
    }
});



// ajoute d'une anitamtion pour la section projets

const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of track.querySelectorAll(".image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1500, fill: "forwards" });
  }
}

/* -- Had to add extra lines for touch events -- */

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);

// ajoute de l'animation scroll pour voir la page d'une façon plus fluide

window.addEventListener ('scroll', reveal);

function reveal () {
    let revealsScroll = document.querySelectorAll('.reveal-scroll');

    for ( i = 0; i < revealsScroll.length; i++ ) {
        
        let windowHeight = window.innerHeight;
        let revealTop = revealsScroll[i].getBoundingClientRect().top;
        let revalPoint = 150;

        if ( revealTop < windowHeight - revalPoint ) {
            revealsScroll[i].classList.add('active');
        } else {
            revealsScroll[i].classList.remove('active');
        }
    }
}


// burger menu interaction 
const hamMenu = document.querySelector('.ham-menu');
const offScreentMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreentMenu.classList.toggle('active');
})