
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

// let textCache = document.querySelector('.text-extermination-guepes');
// let faireDefilerHidden = 200;

// window.addEventListener('scroll', () => {
//     if ( window.scrollY > faireDefilerHidden || window.scrollY < -faireDefilerHidden ) {
//     textCache.classList.remove('defilement-hidden');
//     } else {
//         textCache.classList.add('defilement-hidden');
//     }
// });

// ajoute du deuxieme text pour le cacher lorsqu'on  defile la page
window.addEventListener('scroll',hide);

function hide (){
    const hides = document.querySelectorAll('.text-extermination-guepes');

    for(let i = 0; i < hides.length; i++) {
        let hauteurFenetre = window.innerHeight;
        let VoirHautFenetre = hides[i].getBoundingClientRect().top;
        let pointVoir = 550;

        //creer l'animation scroll
        if ( VoirHautFenetre < hauteurFenetre -pointVoir){
            hides[i].classList.add('active');
        }
        else{
            hides[i].classList.remove('active');
        }
    }
}

let faireDefiler2 = 300;
let quantiteDefilement2 = 0;

window.addEventListener('scroll', () =>{
    quantiteDefilement2 = window.scrollY;
    let containerInfosGre = document.querySelector('.container-infos-gre');
    if ( quantiteDefilement2 > faireDefiler2 ) {
        containerInfosGre.classList.add('defilement');
    } else {
        containerInfosGre.classList.remove('defilement');
    }
});


 
