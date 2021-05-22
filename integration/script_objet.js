// Ajout du text page Objet || Début

let boutonObj1 = document.getElementById('bouton_objet1');
let boutonObj2 = document.getElementById('bouton_objet2');

boutonObj1.addEventListener('click', function() {
    p1.innerHTML = `<h2>Les tableaux/Array :</h2><hr><p>L'objet global Array est utilisé pour créer des tableaux. Les tableaux sont des objets de haut-niveau (en termes de complexité homme-machine) semblables à des listes.<br>
    Pour déclarer un tableau, il faut utiliser l'instruction new :</p>
    <p>var tab=new Array()</p>
    <p>La variable tab a maintenant la structure d'un tableau. Elle possède les propriétés et les méthodes des tableaux et est prête à recevoir le contenu du tableau.
    </p>
    <p>En JavaScript, comme dans la plupart des langages de programmation, le premier élément du tableau commence à l'indice 0.</p>
    source : <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank">https://developer.mozilla.org/fr/docs/Web/JavaScript<a>`;
});

boutonObj2.addEventListener('click', function() {
    p1.innerHTML = `<h2>L'objet JSON :</h2><hr>La méthode JSON.parse() analyse une chaîne de caractères JSON et construit la valeur JavaScript ou l'objet décrit par cette chaîne. On peut éventuellement utiliser cette fonction avec un paramètre de modification permettant de traiter l'objet avant qu'il soit renvoyé.<br>
    Syntaxe : JSON.parse(texte[, reviver])<br>
    texte<br>
    La chaine de caractère à analyser comme du JSON. Voir l'objet JSON pour une description de la syntaxe JSON.
    reviver<br>
    Si l'argument est une fonction, effectue une opération de transformation sur la valeur analysée avant de la renvoyer.
    source : <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank">https://developer.mozilla.org/fr/docs/Web/JavaScript<a>
    `;
});

// Ajout du text page Objet || Fin