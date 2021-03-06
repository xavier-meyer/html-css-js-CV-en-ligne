// récupération des modaux par leurs ids 
let modal = document.getElementById('modal-portfolio-content')
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
//animation astronaut
let btnCollision = document.getElementsByClassName('btn-collision');
// on créer un objet : 
let astronaut = new Sprite("astronaut", 30, 750, 80, "block", 1);
let ball = new Sprite("ball", 53.5, 725, 30, "block", 1);
// objets boutons
let buttonFormation = document.getElementById("button-formation");
let buttonCompetences = document.getElementById("button-competences");
let buttonExperiences = document.getElementById("button-experiences");
let buttonPortfolio = document.getElementById("button-portfolio");
let buttonDecouvrir = document.getElementById("button-decouvrir");
ball.id = "ball";

let test = buttonDecouvrir.getBoundingClientRect();

    console.log(test["height"]);
    console.log(test["right"]);

//tableau buttons
let buttons = [buttonFormation, buttonDecouvrir, buttonExperiences, buttonPortfolio, buttonCompetences];
// Première étape : créer l'objet visuel Sprite

// Notre objet Sprite va prendre 3 propriétés :
// 1) filename => nom du fichier/chemin d'accès
// 2) left => récupérer et définir sa position par rapport au bord gauche 
// 3) top => récupérer et définir sa position par rapport au bord haut 
function Sprite(filename, left, top, width, display, opacity){
    // this = anglais => celui-ci
    // this._node = anglais => node (noeud) DONC on rappelle l'objet en cours (Sprite) avec tout son noeud (donc toutes ses méthodes)
    // 1ère chose que l'on veut faire, c'est définir ce à quoi va reseembler notre objet visuel
    // (donc, créer une image)
    this._node = document.createElement('img');
    // je veux attribuer à cette image sa source 
    this._node.src = "./images/icones/"+filename+".png";

    // je mets en position absolute l'objet courant
    this._node.style.position = "absolute";

    // j'attribue mon objet au body
    document.body.appendChild(this._node);

    // Nos premières méthodes de get et de set pour LEFT
    // Définir la propriété Left et ses deux méthodes (get set)

    //définir la propriété width
    this._width = width;
    this._node.style.width = this._width +"px";

    //définir la propriété display
    this._display = display;
    this._node.style.display = this._display;

    // définir la propriété opacity
    this._opacity = opacity;
    this._node.style.opacity = this._opacity;

    // on définit une propriété (ici LEFT), de l'objet courant (THIS)
    Object.defineProperty(this, "left",{
        get: function(){
            // la méthode get me renvoie la valeur de LEFT de l'objet en cours
            return this._left;
        },
        // la méthode set c'est une méthode qui attribue une valeur à LEFT
        set: function (value){
            // on prend la valeur de la propriété LEFT de l'objet courant et on lui attribue une valeur (reçue en paramètre)
            this._left = value;

            // on modifie le css de l'objet pour sa propriété left
            this._node.style.left = this._left+"px";
        }
    });
    Object.defineProperty(this, "top",{
        get: function (){
            return this._top;
        },
        set: function(value){
            this._top = value;

            // this._node = l'objet + tous ses noeuds (toutes ses propriétés)
            this._node.style.top = this._top+"px";
        }
    })
    // on définit la valeur des propriétés de l'objet par les paramètres reçues lors de la création d'un objet
    this.left = left;
    this.top = top;
    this.width = width;
    this.display = display;
    this.opacity = opacity;
}
//factorisation
// definition fonction move
function move(astronaut, ball){
    if(event.code == "ArrowLeft"){
        astronaut.left -= 15;
        ball.left -= 15;
    }if(event.code == "ArrowRight"){
        astronaut.left += 15;
        ball.left += 15;
    }    
}
// fonction controleBorders controler que le sprite ne sors pas du body
function controleBorders(astronaut, ball){
    // on empeches l'astronaute de sortir à gauche    
    if(astronaut.left < 0){
        astronaut.left = 10;
        ball.left = 35;
    // on empeches l'astronaute de sortir à  droite
    }if(astronaut.left > document.body.clientWidth-astronaut._node.width-25){
       astronaut.left = document.body.clientWidth-astronaut._node.width-25;
       ball.left = document.body.clientWidth-astronaut._node.width;
    // on empeche la balle de sortir en haut 
    }if(ball.top < 0){
      ball.top = 660;      
    }
}   
// fonction maitre avec appel fonctions
document.onkeydown = function(event){
    console.log(event.code);
    // fonction qui gére le déplacement d'un sprite passé en paramétre
    move(astronaut, ball);

    // fonction qui empeche un sprite passé en paramètre de sortir du body
    controleBorders(astronaut, ball);

    // fonction lancer balle sur rubrique cv
    if(event.code == "Space"){
        if(ball.display == "none"){ 
            ball.display = "block";
            // document.getElementById("ball").style.display = "block";
            ball.left = astronaut.left + (astronaut._node.width + ball._node.width)/2;
            ball.top = astronaut.top;
            ball.startAnimation(moveBall, 20);
        }    
    }  
}
//function moveBall
function moveBall(ball){
    ball.top -= 10;
    if(ball.top < -20 ){
        ball.stopAnimation();  
        ball.display = "none";
        let ball = new Sprite("ball", 53.5, 660, 30, "block", 1);
    } 
    // on 
    for(let i = 0; i < buttons.length; i++){
        if(!(ball.checkCollision(buttons[i]))){
            console.log("collision");
            ball.stopAnimation();
            ball.display = "none";

        }
    }    
}
/*définition des méthodes*/
// prototype: tableau de méthodes
// startAnimation: entrée du tableau
// méthode setInterval: déclencher à delai régulier un traitement
// méthode clearInterval: annuler animation
Sprite.prototype.startAnimation = function( fct, interval){
    if(this._clock) window.clearInterval(this._clock);
    var _this = this;
    this._clock = window.setInterval(function(){
        fct(_this);
    }, interval );
};
Sprite.prototype.stopAnimation = function(){
    window.clearInterval(this._clock);
};
// detection collision other = bouton in this case
Sprite.prototype.checkCollision = function (other){
  let otherInfos = other.getBoundingClientRect();
    return ! 
    //le bouton est au dessus de la balle
     ( this.top < other.top + otherInfos["bottom"]) &&
    //la balle ne tappes pas ds l'intervalle 
    (otherInfos["left"] < this.left) &&
     (otherInfos["right"] < this.right)
}

// faire disparaitre la balle et l'astronaute
if(document.body.offsetWidth <992){
    ball.display = "none";
    astronaut.display ="none";
}