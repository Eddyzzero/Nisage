
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
let scrollThreshold = 200;

// obtenir le texte caché
let hiddenText = document.getElementById('hiddenText');

window.addEventListener('scroll', () => {
    // verifier la position du scroll verical
    if ( window.scrollY > scrollThreshold ) {
        // si on fait un scroll plus grand que  200 montrer le texte caché
        hiddenText.style.display = 'block';
    } else {
        // si le scroll est moins que 200, cacher le texte
        hiddenText.style.display = 'none';
    }
});

// maintenant pour le faire dispaitre après certaine quantité des scrolls 
let scrollThresholdhide = 600;

window.addEventListener('scroll', () => {
    //verifier et cacher le texte après certain temps
    if (window.screenY > scrollThresholdhide ) {
        // si on fait un scroll plus grand que  800 montrer le texte caché
    }
})
