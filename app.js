// récupération du modal par son id 
let modal = document.getElementById('modal-portfolio-content');
// récupération de tous les boutons "en savoir plus" par leur nom de class (donc un tableau)
let enSavoirPlusBoutonsDroite = document.getElementsByClassName('en-savoir-plus-droite');
// récupération de tous les boutons "en savoir plus" par leur nom de class (donc un tableau)
let enSavoirPlusBoutonsGauche = document.getElementsByClassName('en-savoir-plus-gauche');
// récupération de tous les offcanvas par leur nom de class (donc un tableau)
let offcanvasPortfolio = document.getElementsByClassName('offcanvas');

boutonsOffcanvas(enSavoirPlusBoutonsDroite, "right");
boutonsOffcanvas(enSavoirPlusBoutonsGauche, "left");

function boutonsOffcanvas(boutons, marges){
    // je boucle tous les boutons récupérés par leur nom de class
    for(let i=0; i < boutons.length; i++){
        // pour chaque bouton "en savoir plus", on lance une fonction au click
        boutons[i].onclick = function(){
            // pour chaque offcanvas, on lance une fonction
            for(let i =0; i < offcanvasPortfolio.length; i++){
                // calcul : (largeur du body - largeur du modal) divisé par 2 afin de récupérer la largeur d'une seule goutière
                let calcGoutiereGrandEcran = (document.body.offsetWidth-modal.offsetWidth)/2;
                if(document.body.offsetWidth <= 768){
                    console.log("hello");
                    // on gère la largeur du offcanvas si on est 768px ALORS on met le offcanvas en pleine largeur d'écran 
                    // 20 correspond aux deux goutières en mobile
                    offcanvasPortfolio[i].style.width = document.body.offsetWidth-50+"px";
                    let calcGoutierePetitEcran = (document.body.offsetWidth-offcanvasPortfolio[i].offsetWidth)/2;
                    document.body.style.padding = 0;
                    offcanvasPortfolio[i].style.marginTop = "25px";
                    offcanvasPortfolio[i].style.marginRight = calcGoutierePetitEcran+"px";
                }
                else if(document.body.offsetWidth > 768 && marges == "left"){
                     // on gère la largeur du offcanvas en fonction de la moitié de la largeur du modal
                     offcanvasPortfolio[i].style.width = modal.offsetWidth/2+"px";
                     // on prend la même margin top que le modal et on l'affecte au offcanvas
                     offcanvasPortfolio[i].style.marginTop = "1.75rem";
                     // on décale le offcanvas de la largeur d'une goutière du modal calculée plus tôt et stockée dans calc
                     offcanvasPortfolio[i].style.marginLeft = calcGoutiereGrandEcran+"px";
                     // on gère la hauteur du offcanvas en fonction de la hauteur du modal
                     offcanvasPortfolio[i].style.height = modal.offsetHeight+"px";
                }
                else{
                    // on gère la largeur du offcanvas en fonction de la moitié de la largeur du modal
                    offcanvasPortfolio[i].style.width = modal.offsetWidth/2+"px";
                    // on prend la même margin top que le modal et on l'affecte au offcanvas
                    offcanvasPortfolio[i].style.marginTop = "1.75rem";
                    // on décale le offcanvas de la largeur d'une goutière du modal calculée plus tôt et stockée dans calc
                    offcanvasPortfolio[i].style.marginRight = calcGoutiereGrandEcran+"px";
                    // on gère la hauteur du offcanvas en fonction de la hauteur du modal
                    offcanvasPortfolio[i].style.height = modal.offsetHeight+"px";
                }
                // on gère un border radius équivalent à celui du modal
                offcanvasPortfolio[i].style.borderRadius = "0.3rem";
            }
        }
    }
}