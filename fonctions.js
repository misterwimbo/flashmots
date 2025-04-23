function tirerDans(tableau) {    
    const indexAleatoire = Math.floor(Math.random() * tableau.length);    
    return tableau[indexAleatoire];
}

function tousIdentiques(tableau) {
    if (tableau.length === 0) {
        return true;  // Si le tableau est vide, tous les éléments sont identiques (aucun élément à comparer)
    }
    
    var premierElement = tableau[0];
    
    for (var i = 1; i < tableau.length; i++) {
        if (tableau[i] !== premierElement) {
            return false;  // Dès qu'on trouve un élément différent, retourne false
        }
    }
    
    return true;  // Si tous les éléments sont identiques, retourne true
}

function majUrl(nouvelleUrl) {
    console.log('majUrl '+nouvelleUrl)

    // Utilise history.pushState pour mettre à jour l'URL sans recharger la page
    history.pushState(null, '', nouvelleUrl);
}


async function litDepuisStockage(cle) {
    console.log('Lecture de la clé ' + cle);

    let valeurAretourner;
    if (openboard) { // Récupération pour Openboard
        try {
            valeurAretourner = await window.sankore.async.preference(prefixeAppli + '-' + cle);
            console.log("lecture " + cle + "=" + valeurAretourner); // Pour la console
        } catch (error) {
            console.error('Erreur lors de la lecture de la clé ' + cle + ' depuis Openboard:', error);
        }
    } else { // Récupération en Web
        valeurAretourner = localStorage.getItem(prefixeAppli + '-' + cle);
        console.log("lecture depuis stockage " + cle + "=" + valeurAretourner); // Pour la console
    }

    return valeurAretourner;
}

function stocke(cle,valeur){

    console.log("stockage "+cle+"="+valeur);

    if (openboard){
    window.sankore.setPreference(prefixeAppli+'-'+cle,valeur);

    } else {
    localStorage.setItem(prefixeAppli+'-'+cle,valeur);
    }    
}


function prechargerSon(cheminFichier) {
    return fetch(cheminFichier)
      .then(response => response.arrayBuffer())
      .then(buffer => {
        return new Promise(resolve => {
          audioContext.decodeAudioData(buffer, decodedBuffer => {
            audioBuffer = decodedBuffer;
            resolve();
          });
        });
      })
      .catch(error => {
        console.error('Erreur lors du préchargement du fichier audio', error);
      });
  }
  
  // Fonction pour jouer un son
  function joueSon(son, enBoucle) {
      son.loop = enBoucle; // Définit si le son doit être joué en boucle ou pas
      son.play(); // Joue le son
  }
  
  // Fonction pour arrêter tous les sons
  function arreteSons() {
      sonMusique.pause(); // Pause la musique
      sonScore.pause(); // Pause le son du score
  }


  function objetOuEnfantDe(cible, objet) {
    // Vérifie si la cible est égale à l'objet
    if (cible === objet) {
        return true;
    }
    // Vérifie si la cible est un descendant de l'objet
    let parent = cible.parentNode;
    while (parent) {
        if (parent === objet) {
            return true;
        }
        parent = parent.parentNode;
    }
    // Si aucun cas n'est vérifié, retourne false
    return false;
}

// Fonctionnement des lightbox
function ouvre(div){
    div.classList.remove('hide');
    darkbox.classList.remove('hide');
}
function ferme(div){
    div.classList.add('hide');
    darkbox.classList.add('hide');
}

function pileOuFace(probabiliteTrue) {
    // Génère un nombre aléatoire entre 0 et 1
    var rand = Math.random();    
    // Vérifie si le nombre aléatoire est inférieur à la probabilité donnée
    if (rand < probabiliteTrue) {
        return true; // Retourne true si le nombre aléatoire est inférieur à la probabilité
    } else {
        return false; // Retourne false sinon
    }
}

function supprimerObjet(tableau, objetASupprimer) {
    const index = tableau.indexOf(objetASupprimer);
    if (index !== -1) {
        tableau.splice(index, 1);
    }
}

function supprimerTousLesObjets(tableau, objetASupprimer) {
    let occurences = 0;
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] === objetASupprimer) {
            tableau.splice(i, 1);
            i--; // on décale l'index pour prendre en compte la suppression de l'élément
            occurences +=1;
        }
    }
    return occurences;
}


function basculePleinEcran() {
    // Vérifier si le navigateur prend en charge l'API de plein écran
    if (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled) {
        // Vérifier si nous sommes actuellement en mode plein écran
        if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
            // Si nous sommes en mode plein écran, sortir du mode plein écran
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        } else {
            // Si nous ne sommes pas en mode plein écran, basculer en mode plein écran
            var element = document.documentElement;
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            }
        }
    } else {
        // L'API de plein écran n'est pas prise en charge
        console.log("L'API de plein écran n'est pas prise en charge dans ce navigateur.");
    }
}
