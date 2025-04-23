// Listes standard

const liste_CP_std = ["auquel","ce","ces","dans","des","du","elle","elles","en","il","ils","je","les","ma","mes","mon","nous","quelle","sa","ses","son","ta","tes","ton","tu","un","une","vous"]
const liste_CE1_std = ["afin","auquel","autour","bien","ce","ces","comment","d'accord","dans","depuis","derrière","des","dès que","dessous","dessus","devant","donc","du","durant","elle","elles","en","encore","hélas","ici","il","ils","je","les","lorsque","ma","malgré","mes","moins","mon","nous","parce que","parmi","pendant","pendant que","peut-être","plus","plusieurs","pourquoi","pourtant","près","quand","quelle","sa","sauf","ses","si","son","ta","tard","tes","ton","tôt","toujours","très","trop","tu","un","une","vers","vous"]
const liste_CE2_std = ["afin","ailleurs","assez","aujourd'hui","auquel","aussi","aussitôt","autant","autour","autrefois","avant-hier","beaucoup","bien","bientôt","brusquement","ce","ces","comment","côte à côte","d'abord","d'accord","dans","davantage","de temps en temps","debout","dedans","dehors","déjà","demain","depuis","derrière","des","dès que","dessous","dessus","devant","donc","doucement","du","durant","elle","elles","en","en avance","en ce moment","en retard","encore","enfin","ensemble","exactement","facilement","hélas","heureusement","hier","ici","il","ils","je","lentement","les","loin","longtemps","lorsque","ma","maintenant","malgré","mes","mieux","moins","mon","nous","parce que","parmi","partout","pendant","pendant que","peut-être","plus","plusieurs","pourquoi","pourtant","près","presque","quand","quelle","quelquefois","sa","sagement","sauf","ses","seulement","si","sinon","son","soudain","souvent","ta","tard","tes","ton","tôt","toujours","tout à coup","tranquillement","très","trop","tu","un","une","vers","vous"]
const liste_CM1_std = ["afin","ailleurs","assez","aujourd'hui","auquel","aussi","aussitôt","autant","autour","autrefois","avant-hier","beaucoup","bien","bientôt","brusquement","ce","ces","comment","côte à côte","d'abord","d'accord","dans","davantage","de temps en temps","debout","dedans","dehors","déjà","demain","depuis","derrière","des","dès que","dessous","dessus","devant","donc","doucement","du","durant","elle","elles","en","en avance","en ce moment","en retard","encore","enfin","ensemble","exactement","facilement","hélas","heureusement","hier","ici","il","ils","je","lentement","les","loin","longtemps","lorsque","ma","maintenant","malgré","mes","mieux","moins","mon","nous","parce que","parmi","partout","pendant","pendant que","peut-être","plus","plusieurs","pourquoi","pourtant","près","presque","quand","quelle","quelquefois","sa","sagement","sauf","ses","seulement","si","sinon","son","soudain","souvent","ta","tard","tes","ton","tôt","toujours","tout à coup","tranquillement","très","trop","tu","un","une","vers","vous"]
const liste_CM2_std = ["à travers","afin","ailleurs","ainsi","alors","après","assez","au-dessous","au-dessus","aujourd'hui","auparavant","auprès","auquel","aussi","aussitôt","autant","autour","autrefois","autrement","avant","avant-hier","avec","beaucoup","bien","bientôt","brusquement","car","ce","ceci","cela","cependant","certes","ces","chez","comme","comment","côte à côte","d'abord","d'accord","dans","davantage","de temps en temps","debout","dedans","dehors","déjà","demain","depuis","derrière","des","dès lors","dès que","désormais","dessus","devant","donc","dont","dorénavant","doucement","du","durant","elle","elles","en","en avance","en ce moment","en retard","encore","enfin","ensemble","ensuite","entre","envers","exactement","exprès","facilement","fois","gré","guère","hélas","heureusement","hier","hors","ici","il","ils","jamais","je","là-bas","lentement","les","loin","longtemps","lorsque","ma","maintenant","mais","malgré","mes","mieux","moindre","moins","mon","naguère","néanmoins","non","nous","par","par-dessous","par-dessus","parce que","parfois","parmi","partout","pas","pendant","pendant que","personne","peu","peut-être","plus","plusieurs","plutôt","pour","pourquoi","pourtant","près","presque","puis","quand","quelle","quelquefois","quoi","quoique","sa","sagement","sans","sauf","selon","ses","seulement","si","sinon","sitôt","son","soudain","sous","souvent","sur","surtout","ta","tant","tant mieux","tant pis","tantôt","tard","tes","ton","tôt","toujours","tout à coup","toutefois","tranquillement","travers","très","trop","tu","un","une","vers","voici","voilà","volontiers","vous","vraiment"]
const liste_perso_sdt = []

// Appel des fichiers sons




let tablette_smartphone;
let ordi=true;
let clavier_on=true;
let lien;
// Test si l'appareil est tactile
tablette_smartphone = "ontouchstart" in document.documentElement;
if (!tablette_smartphone){document.getElementById('zone_bouton_clavier').style.display='inline-block';clavier_on=false;}
else {ordi=false;}
// Décommmenter ci-dessous pour forcer le mode tactile
//tablette_smartphone = true;

// Définition des objets
const panneau=document.getElementById('zone_1');
panneau.style.position="relative";
const zone_principale=document.getElementById('zone_2');
const bouton_replier=document.getElementById('bouton_replier');
const zone_centrale=document.getElementById('zone_centrale');
const bar = document.getElementById("bar");
const zone_debut = document.getElementById("zone_debut");
const zone_fin = document.getElementById("zone_fin");
const zone_mot = document.getElementById("zone_mot");
let zone_reponse;
// Si appareil tactile la zone de saisie est déactivée au profilt d'un <span>
if (tablette_smartphone){zone_reponse = document.getElementById("zone_reponse_tactile");}
else {zone_reponse = document.getElementById("zone_reponse");}
const progress = document.getElementById("progress");
const delai_lecture_input = document.getElementById("delai_lecture");
const delai_memoire_input = document.getElementById("delai_memoire");
const choix_liste = document.getElementById("choix_liste");
const bouton_editer = document.getElementById("bouton_editer");
const currentUrl = window.location.href.split("?")[0];
const bouton_enregistrer = document.getElementById("bouton_enregistrer");
const choix_nb_mots = document.getElementById("choix_nb_mots");
const haut_parleur = document.getElementById("haut_parleur");
const bouton_consigne = document.getElementById("consigne");
const entendre_voir = document.getElementById("entendre_voir");
const voir = document.getElementById("voir");
const nom_liste = document.getElementById("nom_liste");
const mots_demandes = document.getElementById("mots_demandes");
const clavier = document.getElementById("virtual_keyboard");
const validation_reponse = document.getElementById("validation_reponse");
const fenetre_apropos = document.getElementById("fenetre_apropos");
const choix_langue = document.getElementById("langue");
const voix_enregistrees = document.getElementById("voix_enregistrees");
const choix_casse_modele = document.getElementById("choix_casse_modele");
const choix_casse_reponse = document.getElementById("choix_casse_reponse");
const choix_tolerance = document.getElementById("choix_tolerance");
const choix_memoire_reponse = document.getElementById("choix_memoire_reponse");
const body=document.body;
const checkboxDicteeVocale = document.getElementById("checkbox-dictee-vocale");
const zoneProgression = document.getElementById("zone-progression");
const zoneQrcode=document.getElementById('zone-qrcode');
const divQrcode=document.getElementById('div-qrcode');



// Tactile ou pas

let hauteur_panneau;

function reglage_taille_zones(){
  if (clavier_on){
    hauteur_panneau='calc(60% - 10px)';
    clavier.style.display='block';

    zone_principale.style.height='60%';
  }
  else {
    hauteur_panneau='calc(60% - 10px)';
    clavier.style.display='none';
  }
}


// Vérifie si le navigateur est sur un appareil iOS ou MacOS
function estiOSouMacOS() {
  const userAgent = navigator.userAgent;
  return /Macintosh|iPhone|iPad|iPod/.test(userAgent) && !window.MSStream;
}
// Récupérer l'URL de base (avec le chemin actuel)
baseURL = window.location.protocol + "//" + window.location.host + window.location.pathname;
//Paramètres du QR-code
let qrcode = new QRCodeStyling({
  width: 500,
  height: 500,
  data: baseURL, // Le lien ou le texte que vous souhaitez encoder
  dotsOptions: {
      color: "#000", // Couleur des points du QR code
      type: "round" // Type de points (square, round, etc.)
  },
  backgroundOptions: {
      color: "#fff" // Couleur de fond du QR code
  }
});
qrcode.append(zoneQrcode);
let qrCodeElement = document.querySelector('#zone-qrcode canvas');




reglage_taille_zones();

// Dans tous les cas on affiche la zone réponse.
zone_reponse.style.display='inline-block';

// Gestion des appuis
zone_reponse.addEventListener("keydown", detecterAppuiTouche);


// Déclaration des variables
let panneau_visible=true;
let maj=false;
let nombres=false;
let delai_lecture;
let delai_memoire;
let delai_ecriture;
let son;
let langue;
let liste_resultats=[];
let liste_essais=[];
let liste_vues=[];
let exerciceEnCours=false;

taille_zones();

// Obtenez l'URL actuelle de la page
const urlParams = new URLSearchParams(window.location.search);

// Obtenez la valeur après ?file= dans l'URL
const fileName = urlParams.get('file');


// Vérification d'un paramètre de nombre de mots dans l'URL
let nombreUrl=null;
if (urlParams.get('nombre')){
  nombreUrl=parseInt(urlParams.get('nombre'));
}


fondParDefaut='url(images/fonds/crayons.jpg)';

// PRIMTUX

if (urlParams.get('primtuxmenu')==="true") {
    panneau.style.height='calc(100% -100px)';
    panneau.style.marginTop='100px';
    panneau.style.borderRadius='0px 10px 0px 0px';
    fondParDefaut='url(images/fonds/primtux.png)';

}

// Réglage initial des variables

if (localStorage.getItem('delai_lecture')){delai_lecture=localStorage.getItem('delai_lecture')}
else {delai_lecture=5}

if (localStorage.getItem('delai_memoire')){delai_memoire=localStorage.getItem('delai_memoire')}
else {delai_memoire=3}

if (localStorage.getItem('delai_ecriture')){delai_lecture=localStorage.getItem('delai_ecriture')}
else {delai_ecriture=10}

if (localStorage.getItem('fond')){
  if (localStorage.getItem('fond').includes('fonds')){fond=localStorage.getItem('fond')}
  else {fond=fondParDefaut;localStorage.setItem('fond',fondParDefaut);}
}
else {fond=fondParDefaut;localStorage.setItem('fond',fondParDefaut);}


if (localStorage.getItem('langue')){ 
  choix_langue.value=localStorage.getItem('langue');
} else {choix_langue.value='fr-FR'}

if (localStorage.getItem('dictee-vocale')){ 
  if (localStorage.getItem('dictee-vocale')==='true') {
    checkboxDicteeVocale.checked=true;    
  } else {
    checkboxDicteeVocale.checked=false;
  }
} else {checkboxDicteeVocale.checked=false;}


if (localStorage.getItem('casse_modele')){choix_casse_modele.value=localStorage.getItem('casse_modele')}
else {choix_casse_modele.value='auto'}

if (localStorage.getItem('casse_reponse')){choix_casse_reponse.value=localStorage.getItem('casse_reponse')}
else {choix_casse_reponse.value='auto'}

if (localStorage.getItem('tolerance')){choix_tolerance.value=!!localStorage.getItem('tolerance')}
else {choix_tolerance.checked=false}

if (localStorage.getItem('memoire_reponse')){choix_tolerance.value=!!localStorage.getItem('memoire_reponse')}
else {choix_memoire_reponse.checked=false}


if (localStorage.getItem('panneau_visible')==='false'){visibilite_panneau('manuel');}
else {localStorage.setItem('panneau_visible','true');}

if (localStorage.getItem('maj')){
  if (localStorage.getItem('maj')=='true'){maj=true}
  else {maj=false}
}
console.log("maj stockage "+localStorage.getItem('maj'))
console.log("maj "+maj)

if (localStorage.getItem('son')){
  if (localStorage.getItem('son')==='true'){son=true;}
  else {son=false;}
} else {son=true;localStorage.setItem('son','true');}

if (localStorage.getItem('voix_enregistrees')){
  if (localStorage.getItem('voix_enregistrees')==='true'){wikimedia=true;voix_enregistrees.checked=true;}
  else {wikimedia=false;voix_enregistrees.checked=false;}
}
else {wikimedia=true;voix_enregistrees.value=true;localStorage.setItem('voix_enregistrees','true');}





// Déclaration des listes de mots
let mots_CP;
let mots_CE1;
let mots_CE2;
let mots_CM1;
let mots_CM2;
let mots_perso;

// Récupération des personnalisations dans le stockage local du navigateur
if (localStorage.getItem("📑 Personnalisée")){
  mots_perso=JSON.parse(localStorage.getItem("📑 Personnalisée"));
} else {mots_perso=[];}

if (localStorage.getItem("📘 CP")){
  mots_CP=JSON.parse(localStorage.getItem("📘 CP"));
} else {mots_CP=liste_CP_std}

if (localStorage.getItem("📘 CE1")){
  mots_CE1=JSON.parse(localStorage.getItem("📘 CE1"));
} else {mots_CE1=liste_CE1_std}

if (localStorage.getItem("📘 CE2")){
  mots_CE2=JSON.parse(localStorage.getItem("📘 CE2"));
} else {mots_CE2=liste_CE2_std}

if (localStorage.getItem("📙 CM1")){
  mots_CM1=JSON.parse(localStorage.getItem("📙 CM1"));
} else {mots_CM1=liste_CM1_std}

if (localStorage.getItem("📙 CM2")){
  mots_CM2=JSON.parse(localStorage.getItem("📙 CM2"));
} else {mots_CM2=liste_CM2_std}




// Attribution de noms aux listes
mots_CP.name="📘 CP";
mots_CE1.name="📘 CE1";
mots_CE2.name="📘 CE2";
mots_CM1.name="📙 CM1";
mots_CM2.name="📙 CM2";
mots_perso.name="📑 Personnalisée";

let mots_url=[];
let liste_interro=[];



// Liste des listes
let liste_listes=[mots_CP,mots_CE1,mots_CE2,mots_CM1,mots_CM2,mots_perso]

//Détermination de la liste active
let liste_mots;

// Réglage des éléments d'après les paramètres
document.getElementById('fond').value=fond;
change_fond(fond);
delai_lecture_input.value=delai_lecture;
delai_memoire_input.value=delai_memoire;
bouton_son();
change_langue();
// Utilisation de la fonction pour vérifier si c'est iOS ou MacOS
if (estiOSouMacOS()) {wikimedia=false;voix_enregistrees.checked=false;
  ;
}
change_wikimedia();
change_dictee_vocale();
change_tolerance();
change_memoire_reponse();
let casse_modele;
let casse_reponse;
maj=!maj;
min_maj();
change_casse_modele('auto');
change_casse_reponse('auto');





// Vérification d'une liste de mots présente dans l'URL
if (test_parametres()){mots_url=getParams();mots_url.name="🔗 Par lien";liste_listes.push(mots_url)}




// Incrémentation de la liste déroulante des listes de mots
liste_listes.forEach(option => {
  let newOption = document.createElement('option');
  newOption.text = option.name;
  newOption.value = option.name;
  choix_liste.appendChild(newOption);
});

let reglage_liste;
if (mots_url.length > 0){reglage_liste=mots_url.name;}
else if (localStorage.getItem('choix_liste') && localStorage.getItem('choix_liste') != "🔗 Par lien"){reglage_liste=localStorage.getItem('choix_liste')}
else {reglage_liste=mots_CP.name;}
choix_liste.value=reglage_liste;


// Fonctionnement du programme

mots=[].concat(liste_mots);




change_liste();

function change_consigne(fichier_son){
  lecture_consigne=new Audio(fichier_son)
  lecture_consigne.addEventListener('ended', function() {
    lecture_consigne_en_cours=false;
    bouton_consigne.style.backgroundPosition=null;
  });
}


debut('normal');

function debut(mode){
  console.log("début");
  change_consigne('sons/consigne1.mp3')
  zone_fin.style.display=null;
  zone_interrogation.style.display=null;
  zone_mot.style.display=null;
  zone_debut.style.display="block";
  entendre_voir.style.display=null;
  zone_debut.addEventListener('click',commencer);
  liste_resultats.length=0;
  liste_vues.length=0;
  liste_essais.length=0;
  exerciceEnCours=false;
  deverrouillage();
}



function commencer(mode){
  console.log("commencer")
  stop(lecture_consigne);
  change_consigne('sons/consigne2.mp3')
  if (mode!='autre'){nb_mots(choix_nb_mots.value);}
  else {mots=liste_en_memoire.slice();}
  exerciceEnCours=true;
  verrouillage();
  if (tablette_smartphone && panneau_visible){visibilite_panneau();}
  zone_debut.style.display="none";
  zoneProgression.innerHTML='';
  mots.forEach(mot =>{
    let nouvelElement = document.createElement('span');
    nouvelElement.classList.add('element-progression');
    let longueur = 100/mots.length;
    nouvelElement.style.width = 'calc('+longueur+'% - 2px)';
    zoneProgression.appendChild(nouvelElement);
  });  
  nouveau_mot("nouveau");
}

let lecture_consigne_en_cours=false;

// Fonctions

function consigne(){
  if (son) {
    if (lecture_consigne_en_cours){stop(lecture_consigne);lecture_consigne_en_cours=false;bouton_consigne.style.backgroundPosition=null;}
    else {
    lecture_consigne_en_cours=true;
    lecture_consigne.play();
    bouton_consigne.style.backgroundPosition='0px -80px';
    }
  }
else {
  haut_parleur.style.backgroundColor='orange';
  setTimeout(function(){
    haut_parleur.style.backgroundColor=null;
  },800);
} 
}

// Fonction "télécharger le qRcode"
function telechargerQrcode() {
  // Créer un élément de lien temporaire
  let link = document.createElement('a');

  // Convertir le QR code en URL de données (data URL)
  link.href = qrCodeElement.toDataURL();

  // Spécifier le nom du fichier à télécharger
  let nomDuFichier='codeQR_'+dateAnneeMoisJourHeureMinuteSeconde()+'.png';
  link.download = nomDuFichier;

  // Cliquez sur le lien pour déclencher le téléchargement
  link.click();
}

function test_parametres() {
    const hash = window.location.hash;
    if (hash) {return true}
    else {return false}
  }

function getParams() {
  const hash = window.location.hash;
  let words;
  if (hash) {words = decodeURIComponent(hash.substring(1));}
  //  const queryString = window.location.search;
  //  const urlParams = new URLSearchParams(queryString);
  //  const words = urlParams.get('liste_mots');
    const mots_custom = words.split(',');
    return mots_custom;
  }  

function deverrouillage() {
    console.log ("verouillé-->libre");
    checkboxDicteeVocale.disabled=false;
    if (!checkboxDicteeVocale.checked){
      delai_lecture_input.disabled=false;
      delai_memoire_input.disabled=false;    }

    choix_liste.disabled=false;
    bouton_editer.disabled=false;
    bouton_enregistrer.disabled=false;
    choix_nb_mots.disabled=false;     
}
function verrouillage() {
    console.log ("libre-->verrouillé");
    checkboxDicteeVocale.disabled=true;
    delai_lecture_input.disabled=true;
    delai_memoire_input.disabled=true;
    choix_liste.disabled=true;
    bouton_editer.disabled=true;
    bouton_enregistrer.disabled=true;
    choix_nb_mots.disabled=true; 
  }

function visibilite_panneau(mode) {
    if (panneau_visible){
     if (window.innerWidth > window.innerHeight) {panneau.style.left="-140px";zone_principale.style.width="100%";clavier.style.width="100%";clavier.style.marginLeft=0;bouton_replier.style.left="0px";zone_principale.style.left="-140px";zone_principale.style.marginRight="-140px";bouton_replier.style.bottom='calc(40% + 30px)';
    }
     else {panneau.style.top="-140px";bouton_replier.style.top="0px";zone_principale.style.height="100%";zone_principale.style.top="-120px";zone_principale.style.marginBottom="-120px";}
     if (window.innerWidth > window.innerHeight){bouton_replier.style.backgroundImage="url(images/fleche_droite.png)";}
     else {bouton_replier.style.backgroundImage="url(images/fleche_bas.png)";}
    
     panneau_visible=false;
     if (mode != 'auto'){localStorage.setItem('panneau_visible','false');}
     
    } else {        
     panneau.style.left="0px";
     if (window.innerWidth > window.innerHeight) {zone_principale.style.width=null;bouton_replier.style.left=null;zone_principale.style.left=null;zone_principale.style.marginRight=null;clavier.style.width="calc(100% - 140px)";clavier.style.marginLeft="140px";bouton_replier.style.bottom=null;
    }
     else {panneau.style.top=null;bouton_replier.style.top=null;zone_principale.style.height=null;zone_principale.style.top=null;zone_principale.style.marginBottom=null;}
     bouton_replier.style.backgroundImage=null; 
     bouton_replier.style.right="0px";  
     panneau_visible=true;
     if (mode != 'auto'){localStorage.setItem('panneau_visible','true');}
    }   
    validation_reponse.style.height=validation_reponse.offsetWidth+'px';
   }


function change_fond(choix){
document.body.style.backgroundImage = choix;
localStorage.setItem("fond",choix);
}

function change_casse_modele(mode){
  casse_modele=document.getElementById('choix_casse_modele').value;
  localStorage.setItem("casse_modele",casse_modele);
  if (mode==="manuel"){
    if (casse_modele==='maj'){zone_mot.style.textTransform='uppercase';if(casse_reponse==='min'){choix_casse_reponse.value='maj';}}
    else if (casse_modele==='min'){zone_mot.style.textTransform='lowercase';if(casse_reponse==='maj'){choix_casse_reponse.value='min';}}
    else {zone_mot.style.textTransform=null;choix_casse_reponse.value='auto';}
    change_casse_reponse('auto');
  }  
}

function change_casse_reponse(mode){
  casse_reponse=document.getElementById('choix_casse_reponse').value;
  localStorage.setItem("casse_reponse",casse_reponse);
  if (mode==="manuel"){
    if (casse_reponse==='maj'){zone_reponse.style.textTransform='uppercase';choix_casse_modele.value='maj';}
    else if (casse_reponse==='min'){zone_reponse.style.textTransform='lowercase';choix_casse_modele.value='min';}
    else {zone_reponse.style.textTransform=null;}   
    change_casse_modele('auto');
  }
  if (casse_reponse==='min' && maj){min_maj()}
  if (casse_reponse==='maj' && maj===false){min_maj()}
}

function change_tolerance(){
  tolerance=document.getElementById('choix_tolerance').checked;
  localStorage.setItem("tolerance",tolerance.toString());
}

function change_memoire_reponse(){
  memoire_reponse=document.getElementById('choix_memoire_reponse').checked;
  localStorage.setItem("memoire_reponse",tolerance.toString());
}





liste_langues=[]

function change_langue(){
  if (langue===('url(fr-FR')){langue='fr-FR'}
  langue=choix_langue.value;
  localStorage.setItem("langue",langue);  
  if (langue != 'fr-FR') {
    wikimedia=false;
    voix_enregistrees.checked=false;
    voix_enregistrees.disabled=true;
    localStorage.setItem("voix_enregistrees",'false');
    document.getElementById('option_wikimedia').style.display='none';
  } else {
    wikimedia=true;
    voix_enregistrees.disabled=false;
    voix_enregistrees.checked=true;
    localStorage.setItem("voix_enregistrees",'true');
    document.getElementById('option_wikimedia').style.display='block';
  }
  }

function change_wikimedia(){
  wikimedia=voix_enregistrees.checked;
  if (voix_enregistrees.checked){localStorage.setItem("voix_enregistrees",'true');}
  else {localStorage.setItem("voix_enregistrees",'false');}      
  }

function change_dictee_vocale(){
  localStorage.setItem("dictee-vocale",checkboxDicteeVocale.checked);
  if (!checkboxDicteeVocale.checked){
    voir.style.display=null;
    if (!exerciceEnCours){
      delai_lecture_input.disabled=false;
      delai_memoire_input.disabled=false;
    }    
  } else {
    voir.style.display='none';
  }
}

function nouveau_mot(mode){
  console.log('mots',mots);

    if (!checkboxDicteeVocale.checked){
      entendre_voir.style.display=null;
    }
    stop(lecture_consigne);
    if (mode==="nouveau"){               
      mot=alea(mots);
      console.log("mot="+mot.texte)
      mots.splice(index, 1);
      console.log('casse modele '+casse_modele+' casse reponse '+ casse_reponse)
      if (casse_modele==="min"){mot.texte=mot.texte.toLowerCase()}
      if (casse_modele==="maj"){mot.texte=mot.texte.toUpperCase()}
      liste_resultats.push(mot.texte);
      liste_vues.push(0);
      liste_essais.push(0);
      delai_lecture_calcule=delai_lecture*0.1*Math.pow(mot.texte.length,1.3);
     
    }

    if (checkboxDicteeVocale.checked){
      ecouter();
    }

    zone_reponse.style.backgroundColor='white';

    if (!checkboxDicteeVocale.checked){
      zone_interrogation.style.display=null;      
      zone_mot.innerHTML='<button id="entendre_progress" class="bouton_transp" type="button" onclick="ecouter()"></button>'+mot.texte;
    }

    //Compter une vue et un essai supplémentaire du mot
    if (mode!='revoir'){liste_essais[liste_essais.length - 1]+=1;}
    liste_vues[liste_vues.length - 1]+=1;
    liste_resultats[liste_resultats.length - 1]="👁️ "+liste_resultats[liste_resultats.length - 1];
  
    let largeur = zone_centrale.offsetWidth;
    console.log("largeur zone centrale "+largeur)
    
    if (mot.texte.length<9){
      zone_reponse.style.fontSize=largeur*0.16+'px';
      zone_mot.style.fontSize=largeur*0.16+'px';
    } else {
      zone_reponse.style.fontSize=(largeur*1.28)/mot.texte.length+'px';
      zone_mot.style.fontSize=(largeur*1.28)/mot.texte.length+'px';
    }

    if (!checkboxDicteeVocale.checked){
      zone_mot.style.display='block';
      zone_mot.style.height=largeur*0.2+'px';
      zone_mot.style.lineHeight=largeur*0.2+'px';

      if (zone_mot.scrollWidth>zone_mot.clientWidth);
      {console.log('trop grand');zone_mot.style.fontSize=(window.getComputedStyle(zone_mot).fontSize*0.1)+'px';}

      progress.style.display='block';       
      bar.style.transition="all linear " + delai_lecture_calcule + "s";
      setTimeout(function() {
          bar.style.width = "100%";
        }, 0); 
      setTimeout(function() {        
          interoge(mode);
      }, delai_lecture_calcule*1000);
    } else {
      interoge(mode);
    }

}

function reglage_son(){
  if (son){
    son=false;
    localStorage.setItem('son','false');
    if (lecture_consigne_en_cours){
      stop(lecture_consigne);
      lecture_consigne_en_cours=false;
      bouton_consigne.style.backgroundPosition=null;    
    }
  }
  else {
    son=true;
    localStorage.setItem('son','true');
  }
  bouton_son();
}

function bouton_son(){
  if (son){
    haut_parleur.style.backgroundPosition=null;
  } else {
    haut_parleur.style.backgroundPosition='0px -80px';
  }
}


function alea(liste){
index = Math.floor(Math.random() * liste.length);
let valeur = liste[index];
console.log(valeur)
return valeur;
}

function interoge(mode){
    let delai;
    if (checkboxDicteeVocale.checked){
      delai=0;
    } else {
      delai=delai_memoire*1000;
    }
    bar.style.transition="width linear " + delai_memoire + "s";
    zone_centrale.style.display='none';
    zone_mot.style.display=null;
    setTimeout(function() {
      bar.style.width = "0%";
    }, 0);
    setTimeout(function() {      
      zone_centrale.style.display='block';   
      progress.style.display='none';
      zone_interrogation.style.display='block';
      console.log("largeur "+validation_reponse.offsetWidth);
      zone_reponse.style.height=zone_reponse.offsetWidth*0.2+'px';
      validation_reponse.style.height=validation_reponse.offsetWidth+'px';
      entendre_voir.style.display='block';
      zone_reponse.style.color='black'; 
      
      
      if (tablette_smartphone){
        if (!memoire_reponse || mode!='revoir'){zone_reponse.innerHTML='';}
      }
      else {
        if (!memoire_reponse || mode!='revoir'){zone_reponse.value='';}
        zone_reponse.focus();
      }
      //
    }, delai);  
    
}

function verification_reponse(entree_input){
    let juste;
    
    if (tablette_smartphone){reponse=zone_reponse.innerHTML;}
    else {reponse=entree_input;}
    reponse = reponse.replace(/\u00A0/g, " ");
    console.log(reponse+"/"+mot.texte);
    console.log("verification cochee "+tolerance)
    if (reponse===mot.texte || (reponse.toLowerCase()===mot.texte.toLowerCase() && tolerance)){
      juste=true;
      zone_reponse.style.backgroundColor='rgba(6, 190, 24, 0.8)';      
    }
    else {
    juste=false;
    zone_reponse.style.color='red';
    }
    
    setTimeout(function() {

        if (!checkboxDicteeVocale.checked) {
          zone_interrogation.style.display=null;  
        }           

        if (juste===false && liste_essais[liste_essais.length - 1]<4){
          nouveau_mot("actuel");
        }

        else {

          const elements = Array.from(zoneProgression.querySelectorAll('.element-progression'));
          let positionProgression=liste_essais.length - 1;
          
          console.log('liste_essais[positionProgression] '+liste_essais[positionProgression])
          
          let elementActuel=elements[positionProgression];


          if (!juste){
            elementActuel.classList.add('echec');
            liste_essais[liste_essais.length - 1]=0;
          } else {
            if (liste_essais[positionProgression] === 1){
              elementActuel.classList.add('un');
            }
            else if (liste_essais[positionProgression] === 2){
              elementActuel.classList.add('deux');
            }
            else if (liste_essais[positionProgression] === 3){
              elementActuel.classList.add('trois');
            }
            else if (liste_essais[positionProgression] === 4){
              elementActuel.classList.add('quatre');
            }
          }
          
          if (mots.length>0){
            nouveau_mot("nouveau");
          }
          else {
            fin();
          }
        }

    }, 1000);
     
 }

 


function detecterAppuiTouche(event) {
    if (event.keyCode === 13) {
      // Appel de la fonction de vérification avec le contenu de l'input
      verification_reponse(event.target.value);
    }
  }


function maj_delai_lecture(delai_lecture_input){
  delai_lecture=delai_lecture_input;
  localStorage.setItem('delai_lecture',delai_lecture);
}

function maj_delai_memoire(delai_memoire_input){
  delai_memoire=delai_memoire_input;
  localStorage.setItem('delai_memoire',delai_memoire);

}

function change_liste(){
  let choix=choix_liste.value;
  localStorage.setItem('choix_liste',choix);
 if (choix==="📘 CP"){liste_mots=mots_CP;bouton_enregistrer.style.display="none"}
 else if (choix==="📘 CE1"){liste_mots=mots_CE1;bouton_enregistrer.style.display=null}
 else if (choix==="📘 CE2"){liste_mots=mots_CE2;bouton_enregistrer.style.display=null}
 else if (choix==="📙 CM1"){liste_mots=mots_CM1;bouton_enregistrer.style.display=null}
 else if (choix==="📙 CM2"){liste_mots=mots_CM2;bouton_enregistrer.style.display=null}
 else if (choix==="📑 Personnalisée"){liste_mots=mots_perso;bouton_enregistrer.style.display=null}
 else if (choix==="🔗 Par lien"){liste_mots=mots_url;bouton_enregistrer.style.display="inline";}
if (liste_mots.length==0 || liste_personnalisee.style.display==="block"){boite_liste_perso()}
  mots=liste_interro=[].concat(liste_mots);
  choix_nb_mots.max = liste_mots.length;
  console.log("longueur " + liste_mots.length)
  console.log(liste_mots)
  if (liste_mots.length>9 && choix !="📑 Personnalisée" && choix !="🔗 Par lien"){choix_nb_mots.value = 10;}
  else {choix_nb_mots.value = liste_mots.length;}
  if (nombreUrl && nombreUrl >= liste_mots.length){choix_nb_mots.value = nombreUrl;}
  document.getElementById("max").innerHTML="maxi. "+ liste_mots.length;
  console.log(liste_mots)
  console.log(liste_mots.name)
  nom_liste.innerHTML=liste_mots.name;
}

async function prechargeSonsMots() {
  console.log('préchargement des sons');

  let copieMots = [...mots];
  mots = [];

  for (let texte of copieMots) {
    let objetMot = {
      texte: texte
    };

    mots.push(objetMot);


    let lingualibre = false;

    // Préparation d'une synthèse vocale de secours
    let utterance = new SpeechSynthesisUtterance(texte.toLowerCase());
    utterance.pitch = 1.4;
    utterance.rate = 0.8;
    utterance.lang = langue;
    objetMot.utterance = utterance;

    ///// Récupération d'une prononciation audio /////

    // Recherche dans la liste Wikimedia
    let audioURL = url_wikimedia.find(element => element[0] == texte.toLowerCase());

    if (audioURL) {
      console.log("audioURL OK liste Wikimedia " + audioURL);
    } else {
      // À défaut recherche dans la liste Lingualibre 1
      audioURL = urlAudios1.find(element => element[0] == texte.toLowerCase());
      if (audioURL) {
        lingualibre = true;
        console.log("audioURL OK liste Lingualibre 1 " + audioURL);
      } else {
        // Ou dans la liste Lingualibre 2
        audioURL = urlAudios2.find(element => element[0] == texte.toLowerCase());
        if (audioURL) {
          lingualibre = true;
          console.log("audioURL OK liste Lingualibre 2 " + audioURL);
        }
      }
    }

    let audio;

    if (audioURL) {
      if (lingualibre) {
        url_complete = 'https://commons.wikimedia.org/wiki/Special:FilePath/LL-Q150%20%28fra%29-' + audioURL[1];
      } else {
        url_complete = 'https://upload.wikimedia.org/wikipedia/commons/' + audioURL[1];
      }
      audio = new Audio(url_complete);
      console.log('URL trouvée localement', url_complete);
      objetMot.audio = audio;
    } else {
      console.log('mot non trouvé localement, recherche en ligne');
      chercherUrlEnLigne(objetMot);
    }

  }
}

// Fonction pour prononcer un mot : soit en lançant un fichier audio trouvé sur Wikimedia (projet Lingua Libre) s'il existe, soit en utilisant la synthèse vocale si on n'a pas trouvé de fichier sur Wikimedia
async function chercherUrlEnLigne(mot) {
  let texte = mot.texte;
  console.log('chercherUrlEnLigne',texte)
	// Recherche sur Wikimedia d'un mot dans le projet Lingua Libre
	// Astuce : Les fichiers de ce projet commencent par "File:LL"
	const baseSearchUrl = "https://commons.wikimedia.org/w/api.php";
	const searchParams = new URLSearchParams({
		action: "query",
		list: "search",
		srsearch: `File:LL ${texte}.wav`,
		format: "json",
		origin: "*",
	});
	// Première requête pour obtenir le titre du fichier audio
	fetch(`${baseSearchUrl}?${searchParams}`)
		.then((searchResponse) => searchResponse.json())
		.then((searchData) => {
			// On récupère le premier résultat en filtrant les résultats :
			// 1. On veut seulement les mots simples et non pas les mots composés
			// 2. On veut seulement des mots identifiés sur Lingua libre comme prononcés en français
			const firstResult = searchData.query.search.filter(
				(element) =>
					element.title.includes("-" + texte) && element.title.includes("(fra)")
			)[0];

			if (firstResult) {
				const title = firstResult.title;

				// Deuxième requête pour obtenir l'URL de l'audio
				const detailParams = new URLSearchParams({
					action: "query",
					titles: title,
					prop: "imageinfo",
					iiprop: "url",
					format: "json",
					origin: "*",
				});

				return fetch(`${baseSearchUrl}?${detailParams}`)
					.then((detailResponse) => detailResponse.json())
					.then((detailData) => {
						const pages = detailData.query.pages;
						const page = Object.values(pages)[0];
						if (page && page.imageinfo) {
							// Si le fichier existe, on lance l'audio
							const audioUrl = page.imageinfo[0].url;
							const audio = new Audio(audioUrl);
							mot.audio=audio;
              console.log('Url du mot trouvée')
						}
					});
			} 
		})
		.catch((error) => {
			console.error(`Impossible de récupérer la prononciation pour "${texte}".`);
      return false;
		});
}

// Fonction pour utiliser la synthèse vocale
function speakFallback(mot) {
	if ("speechSynthesis" in window) {
		let utterance = mot.utterance;
		window.speechSynthesis.speak(utterance);
	} else {
		alert(`Aucune synthèse vocale disponible pour "${mot}".`);
	}
}


function reset_liste(){
  console.log("reset_liste")
  let choix=choix_liste.value;
  if (choix==="📘 CP"){mots_CP.splice(0, mots_CP.length, ...liste_CP_std);}
  else if (choix==="📘 CE1"){mots_CE1.splice(0, mots_CE1.length, ...liste_CE1_std);}
  else if (choix==="📘 CE2"){mots_CE2.splice(0, mots_CE2.length, ...liste_CE2_std);}
  else if (choix==="📙 CM1"){mots_CM1.splice(0, mots_CM1.length, ...liste_CM1_std);}
  else if (choix==="📙 CM2"){mots_CM2=mots_CM2.splice(0, mots_CM1.length, ...liste_CM2_std);}
  else if (choix==="📑 Personnalisée"){mots_perso.splice(0, mots_perso.length, ...liste_perso_sdt);}
  else if (choix==="🔗 Par lien"){mots_url.splice(0, mots_url.length, ...getParams())}
  change_liste();
}

function boite_liste_perso(){
  if (tablette_smartphone){clavier.style.display='none';}
  document.getElementById('zone_partage').style.display="none";
  document.getElementById("liste_personnalisee").style.display="block";
  document.getElementById("saisie_liste").value=liste_mots.join("\n");
}

function lightbox(fenetre) {
  if (fenetre_apropos.style.display==="block"){lightbox_ferme('fenetre_apropos')}
  if (fenetre_options.style.display==="block"){lightbox_ferme('fenetre_options')}
  if (liste_personnalisee.style.display==="block"){lightbox_ferme('liste_personnalisee')}
  if (tablette_smartphone){clavier.style.display='none';}
  document.getElementById(fenetre).style.display = 'block';
}

function lightbox_ferme(fenetre){
  console.log("ferme "+fenetre)
  document.getElementById(fenetre).style.display="none";
  if (fenetre==="liste_personnalisee"){document.getElementById('zone_partage').style.display="none";}
  if (tablette_smartphone){clavier.style.display='block';}
  if (fenetre==="zone_fin"){console.log("zone fin lance début");debut();}

}

function maj_liste(){
  console.log("maj_liste")
  let saisie = document.getElementById("saisie_liste").value;
  liste_mots.length=0;
  let chaine=nettoie(saisie).split("\n");
  chaine=chaine.sort(function(a, b) {
    return a.localeCompare(b);
  }); 
  console.log("chaine "+chaine)
  if (chaine[0]!=[ "" ]){
    chaine.forEach(valeur => {
      liste_mots.push(valeur);
  });
  }
  console.log("liste_mots "+liste_mots.length+" "+liste_mots)
  localStorage.setItem(liste_mots.name, JSON.stringify(liste_mots));
  mots = liste_mots;
  change_liste();
}

function nettoie(saisie) {

    //Remplacer oe par œ
  saisie = saisie.replace(/oe/g, "œ");

    //Remplacer ae par æ
    saisie = saisie.replace(/ae/g, "æ");

  //Supprimer les doubles espaces
  saisie = saisie.replace(/ +/g, ' ').trim();

  //Supprimer les espaces en début et en fin de mot
  saisie=saisie.replace(/\s*(,|;|\.|\n)\s*/g, '$1');

  //Remplacer . , ; par des sauts de ligne
  saisie=saisie.replace(/,|\.|;/g, "\n");

  //Supprimer les lignes vides
  saisie = saisie.split('\n').filter(ligne => ligne.trim() !== '').join('\n');

  //Remplacer les simple quotes par des apostrophes
  saisie=saisie.replace(/’/g, "'");

  //Valeur de renvoi
  return saisie;

}

function partager_exercice() {
  // Met à jour la liste des mots
  maj_liste();
  let format_url = encodeURIComponent(liste_mots);
  let base_url = window.location.href.split('#')[0];
  base_url = base_url.split('?')[0];
  lien;

  // Génère le lien complet
  if (base_url.startsWith('http')) {
    lien = base_url + "#" + format_url;
  } else {
    lien = 'https://educajou.forge.apps.education.fr/flashmots/' + "#" + format_url;
  }

  // Affiche immédiatement la zone de partage et le lien
  const zonePartage = document.getElementById('zone_partage');
  zonePartage.style.display = "block";
  document.getElementById('lien_a_partager').innerHTML = lien;

  // Désactive uniquement le bouton "Code QR" et indique un état de chargement
  const boutonQr = document.getElementById('boutonqr');
  boutonQr.disabled = true;
  boutonQr.textContent = "Chargement..."; // Indiquer à l'utilisateur

  // Lance la génération du QR code en tâche de fond
  setTimeout(() => {
    try {
      let qrcode = new QRCodeStyling({
        width: 500,
        height: 500,
        data: lien, // Lien ou texte à encoder
        dotsOptions: {
          color: "#000", // Couleur des points
          type: "round" // Type de points
        },
        backgroundOptions: {
          color: "#fff" // Couleur de fond
        }
      });

      // Ajoute le QR code à la zone
      const zoneQrcode = document.getElementById('zone-qrcode');
      zoneQrcode.innerHTML = ""; // Nettoie les QR codes précédents
      qrcode.append(zoneQrcode);
    } catch (error) {
      console.error("Erreur lors de la génération du QR code :", error);
    } finally {
      // Réactive le bouton après la génération
      boutonQr.disabled = false;
      boutonQr.textContent = "Code QR";
    }
  }, 0); // Traiter en tâche de fond
}



function copie_lien(){
  navigator.clipboard.writeText(lien);
}

function envoie_mail(){
  let subject = "Liste Flashmots";
  let body = "Bonjour,%0D%0A%0D%0APour accéder à Flashmots avec cette liste, cliquez sur le lien ci-dessous:%0D%0A%0D%0A"+lien;
  let mailtoLink = "mailto:" + "?subject=" + subject + "&body=" + body;
  window.location.href = mailtoLink;
}

function lance_lien(){
  window.open(lien, '_blank');
}

function enregistrer(){
  if (window.confirm("Enregistrer la liste   🔗 Par lien en tant que   📑 Liste personnalisée ?")) {
    mots_perso.splice(0, mots_perso.length, ...mots_url);
    choix_liste.value="📑 Personnalisée";
    change_liste();
  }
  
}

function efface_liste(){
  document.getElementById("saisie_liste").value="";
}

function fin(){
  entendre_voir.style.display=null;
  zone_fin.style.display="block";
  mots_demandes.innerHTML=null;
  for (var i = 0; i < liste_resultats.length; i++) {
    var span = document.createElement("span");
    span.className = "resultat";
    span.textContent = liste_resultats[i];
    console.log(liste_resultats[i] + " " + liste_resultats[i].essais)
    if (liste_essais[i]===1){span.classList.add('un');}
    else if (liste_essais[i]===2){span.classList.add('deux');}
    else if (liste_essais[i]===3){span.classList.add('trois');}
    else if (liste_essais[i]===4){span.classList.add('quatre');}
    else if (liste_essais[i]===0){span.classList.add('echec');}

    mots_demandes.appendChild(span);
  }
 
}


function nb_mots(nb){
  liste_mots.sort(() => Math.random() - 0.5);
  mots = liste_mots.slice(0, nb);
  liste_interro = liste_mots.slice(0, nb);
  liste_en_memoire = liste_mots.slice(0, nb); 
  if (nb===0){zone_debut.display="none";}
  else {zone_debut.display=null;}
  prechargeSonsMots();
}


function stop(son){
  son.pause();
  son.currentTime = 0;
  if (son===lecture_consigne){
    lecture_consigne_en_cours=false;
    bouton_consigne.style.backgroundPosition=null;
  }
}


function ecouter(){
  stop(lecture_consigne);
  if (son){
    if (son){
        console.log('lecture','wikimedia=',wikimedia);
        console.log('mots',mots);
        if (mot.audio && wikimedia) {
          mot.audio.play();
        } else {
          speakFallback(mot);
        }
    }  
  } else {
    haut_parleur.style.backgroundColor='orange';
    setTimeout(function(){
      haut_parleur.style.backgroundColor=null;
    },800);
  }

}

function cache_revoir(){
  zone_interrogation.style.display='block';
  zone_mot.style.display=null;
  //zone_reponse.focus();

}

// Événements


function appendCharacter(character) {
  if (casse_reponse==='min'){lettre=character.toLowerCase()}
  if (casse_reponse==='maj'){lettre=character.toUpperCase()}
  else {
    if (maj) {lettre=character.toUpperCase()}
    else {lettre=character.toLowerCase()}
  }


  zone_reponse.textContent += lettre;
  if (ordi){document.getElementById('zone_reponse').value += lettre;}
  if (/[ÂÊÎÔÛ]/i.test(lettre)) {circonflexe()}
  if (/[ÄËÏÖÜ]/i.test(lettre)) {trema()}
  if (zone_reponse.textContent.endsWith("AE")){zone_reponse.textContent=zone_reponse.textContent.replace(/AE/g, "Æ")}
  if (zone_reponse.textContent.endsWith("OE")){zone_reponse.textContent=zone_reponse.textContent.replace(/OE/g, "Œ")}
}

function efface_lettre() {
  zone_reponse.value=zone_reponse.value.slice(0, -1);
}

function check_zone_reponse(){
  const regex = /ae|oe|AE|OE/;
  if(regex.test(zone_reponse.value)){zone_reponse.value=replaceAEandOE(zone_reponse.value)};
}

function replaceAEandOE(str) {
  console.log("replace");
  // Replace "AE" with "Æ"
  str = str.replace(/AE/g, "Æ");
  str = str.replace(/ae/g, "æ");

  // Replace "OE" with "Œ"
  str = str.replace(/OE/g, "Œ");
  str = str.replace(/oe/g, "œ");

  return str;
}

function min_maj (){
  console.log("minmaj maj="+maj)
  const buttons = document.querySelectorAll('.virtual-keyboard button');
  if (maj){
    buttons.forEach(button => {
      button.style.textTransform = 'lowercase';
      document.getElementById('bouton_maj').style.backgroundImage='url(images/minuscules.svg'
      maj=false;
      localStorage.setItem('maj','false');
    });
  } else {
    buttons.forEach(button => {
      button.style.textTransform = 'uppercase';
      document.getElementById('bouton_maj').style.backgroundImage='url(images/majuscules.svg'
      maj=true;
      localStorage.setItem('maj','true');
    });
  }
}

function nombres_accents (){
  if (nombres===true){
    nombres=false;
    document.getElementById('nombres').style.display='none';
    document.getElementById('accents').style.display='block';
    document.getElementById('bouton_nombres').innerHTML='123...';   

  } else {
    nombres=true;
    document.getElementById('accents').style.display='none';
    document.getElementById('nombres').style.display='block';
    document.getElementById('bouton_nombres').innerHTML='àéù...';   

  }
}

let circonflexe_on=false;
let trema_on=false;
const a=document.getElementById('a');
const e=document.getElementById('e');
const i=document.getElementById('i');
const o=document.getElementById('o');
const u=document.getElementById('u');
const voyelles=[a,e,i,o,u];

function circonflexe(){
  if (trema_on){
    trema_on=false;
    document.getElementById('bouton_trema').style.backgroundColor=null;
  }
  if (circonflexe_on===false){
    circonflexe_on=true;
    document.getElementById('bouton_circonflexe').style.backgroundColor='aquamarine';
    a.textContent='â';a.value='Â';a.style.backgroundColor='yellow';
    e.textContent='ê';e.value='Ê';e.style.backgroundColor='yellow';
    i.textContent='î';i.value='Î';i.style.backgroundColor='yellow';
    o.textContent='ô';o.value='Ô';o.style.backgroundColor='yellow';
    u.textContent='û';u.value='Û';u.style.backgroundColor='yellow';
  } else {
    circonflexe_on=false;
    document.getElementById('bouton_circonflexe').style.backgroundColor=null;
    a.textContent='a';a.value='A';a.style.backgroundColor=null;
    e.textContent='e';e.value='E';e.style.backgroundColor=null;
    i.textContent='i';i.value='I';i.style.backgroundColor=null;
    o.textContent='o';o.value='O';o.style.backgroundColor=null;
    u.textContent='u';u.value='U';u.style.backgroundColor=null;
  }
}

function trema(){
  if (circonflexe_on){
    circonflexe_on=false;
    document.getElementById('bouton_circonflexe').style.backgroundColor=null;
  }
  if (trema_on===false){
    trema_on=true;
    document.getElementById('bouton_trema').style.backgroundColor='aquamarine';
    a.textContent='Ä';a.value='Ä';a.style.backgroundColor='yellow';
    e.textContent='Ë';e.value='Ë';e.style.backgroundColor='yellow';
    i.textContent='Ï';i.value='Ï';i.style.backgroundColor='yellow';
    o.textContent='Ö';o.value='Ö';o.style.backgroundColor='yellow';
    u.textContent='Ü';u.value='Ü';u.style.backgroundColor='yellow';
  } else {
    trema_on=false;
    document.getElementById('bouton_trema').style.backgroundColor=null;
    a.textContent='a';a.value='A';a.style.backgroundColor=null;
    e.textContent='e';e.value='E';e.style.backgroundColor=null;
    i.textContent='i';i.value='I';i.style.backgroundColor=null;
    o.textContent='o';o.value='O';o.style.backgroundColor=null;
    u.textContent='u';u.value='U';u.style.backgroundColor=null;
  }
}


// Détection du changement de sens de la fenêtre
window.addEventListener('resize', taille_zones);


function change_affichage_clavier(){
  visibilite_panneau();visibilite_panneau();
  if (clavier_on===false){
    clavier_on=true;
  } else {
    clavier_on=false;
  }
  reglage_taille_zones();
}


function taille_zones() {
  console.log("taille_zones")
  validation_reponse.style.height=validation_reponse.offsetWidth+'px';
  
  if (panneau_visible===false){ 
      clavier.style.width='100%';clavier.style.marginLeft=0;
      //mode paysage
      if (window.innerWidth > window.innerHeight) {
        panneau.style.left="-140px";zone_principale.style.width="100%";bouton_replier.style.left="0px";zone_principale.style.left="-140px";zone_principale.style.marginRight="-140px";  
        panneau.style.top=null;bouton_replier.style.top=null;zone_principale.style.height=null;zone_principale.style.top=null;zone_principale.style.marginBottom=null;
        bouton_replier.style.backgroundImage="url(images/fleche_droite.png)";
        if (tablette_smartphone){
          console.log("coucou")
          zone_principale.style.height='60%';
          bouton_replier.style.bottom='calc(40% + 30px)';
        }
      //mode portait
      } else {
        panneau.style.top="-140px";bouton_replier.style.top="0px";zone_principale.style.height="100%";zone_principale.style.top="-140px";zone_principale.style.marginBottom="-140px";  
        panneau.style.left=null;zone_principale.style.width=null;bouton_replier.style.left=null;zone_principale.style.left=null;zone_principale.style.marginRight=null;  
        bouton_replier.style.backgroundImage="url(images/fleche_bas.png)";     
        if (tablette_smartphone){
          zone_principale.style.height='60%';
        }   
        
      }
  } else {
    clavier.style.width='100%';clavier.style.marginLeft=0;
    if (tablette_smartphone){
      zone_principale.style.height='60%';
      bouton_replier.style.bottom='calc(40% + 30px)';          
    }
  }
  zone_reponse.style.maxHeight=(zone_principale.offsetHeight-30-120)*0.95-20+'px';
  zone_reponse.style.height=zone_reponse.offsetWidth*0.2+'px';
  zone_mot.style.maxHeight=(zone_principale.offsetHeight-30-120)*0.95-20+'px';
  zone_mot.style.height=zone_mot.offsetWidth*0.2+'px';
}

