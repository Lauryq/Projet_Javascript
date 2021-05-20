// Ajout du text page Objet || Début

let boutonObj1 = document.getElementById('bouton_objet1');
let boutonObj2 = document.getElementById('bouton_objet2');
let boutonObj3 = document.getElementById('bouton_objet3');
let boutonObj4 = document.getElementById('bouton_objet4');

// texte objet tableau//
boutonObj2.addEventListener('click', function() {
    p1.innerHTML = `L'objet global Array est utilisé pour créer des tableaux. Les tableaux sont des objets de haut-niveau (en termes de complexité homme-machine) semblables à des listes.<br>
    Pour déclarer un tableau, il faut utiliser l'instruction new :<br>
    var tab=new Array()<br>
    La variable tab a maintenant la structure d'un tableau. Elle possède les propriétés et les méthodes des tableaux et est prête à recevoir le contenu du tableau.<br>
    <br>
    En JavaScript, comme dans la plupart des langages de programmation, le premier élément du tableau commence à l'indice 0.<br>
    <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array">Source: site MDN</a>
    `;
});

//texte objet JSON//
boutonObj4.addEventListener('click', function() {
    p1.innerHTML = `La méthode JSON.parse() analyse une chaîne de caractères JSON et construit la valeur JavaScript ou l'objet décrit par cette chaîne. On peut éventuellement utiliser cette fonction avec un paramètre de modification permettant de traiter l'objet avant qu'il soit renvoyé.<br>
    Syntaxe : JSON.parse(texte[, reviver])<br>
    texte<br>
    La chaine de caractère à analyser comme du JSON. Voir l'objet JSON pour une description de la syntaxe JSON.
    reviver<br>
    Si l'argument est une fonction, effectue une opération de transformation sur la valeur analysée avant de la renvoyer.<br>
    <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array">Source: site MDN</a>
    `;
});

// Ajout du text page Objet || Fin