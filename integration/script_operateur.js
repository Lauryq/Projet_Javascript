// Ajout du text page Operateur || Début

let boutonOpe1 = document.getElementById('bouton_operateur1');
let boutonOpe2 = document.getElementById('bouton_operateur2');
let boutonOpe3 = document.getElementById('bouton_operateur3');
let boutonOpe4 = document.getElementById('bouton_operateur4');
let boutonOpe5 = document.getElementById('bouton_operateur5');
let boutonOpe6 = document.getElementById('bouton_operateur6');
let boutonOpe7 = document.getElementById('bouton_operateur7');

boutonOpe3.addEventListener('click', function() {
    ppp.innerHTML = "<br><br><br>Les opérateurs arithmétiques ont pour opérandes des valeurs numériques (des littéraux ou des variables) et renvoient une valeur numérique. Les opérateurs arithmétiques standards sont l'addition (+), la soustraction (-), la multiplication (*), et la division (/). Ces opérateurs fonctionnent comme pour la plupart des langages de programmation lorsqu'ils sont utilisés avec des nombres décimaux (on notera que la division par zéro a pour résultat 'Infinity') ";
});

boutonOpe4.addEventListener('click', function() {
    ppp.innerHTML = "<br><br><br><br>Les opérateurs binaires voient leurs opérandes comme des ensembles de 32 bits (des zéros et des uns), et non pas comme des nombres décimaux, octaux ou hexadécimaux. Ainsi, le nombre décimal neuf aura une représentation binaire de 1001. Les opérateurs binaires effectuent des opérations sur des représentations binaires mais renvoies des valeurs numériques JavaScript standards.";
});

boutonOpe5.addEventListener('click', function() {
    ppp.innerHTML = "<br><br><br><br>En plus des opérateurs de comparaisons qui peuvent être utilisés sur des chaînes de caractères, il existe l'opérateur de concaténation (+) permettant de concaténer deux chaînes de caractères. Le résultat de cette opération est la fusion des deux opérandes en une même chaîne de caractères.";
});

boutonOpe6.addEventListener('click', function() {
    ppp.innerHTML = "<br><br><br><br>L'opérateur conditionnel est le seul opérateur JavaScript qui utilise trois opérandes. L'expression utilisant l'opérateur peut prendre une valeur parmi deux selon une condition donnée. Cet opérateur s'utilise avec la syntaxe suivante : << condition ? val1 : val2 >> Si condition vaut true, l'opérateur vaudra val1. Sinon il vaudra val2. Il est possible d'utiliser l'opérateur conditionnel aux mêmes endroits qu'un opérateur standard.";
});

boutonOpe7.addEventListener('click', function() {
    ppp.innerHTML = "<br><br><br><br>Un opérateur relationnel compare ses opérandes et renvoie une valeur booléenne selon que le résultat de la comparaison est vrai ou faux.";
});

boutonOpe1.addEventListener('click', function() {
    ppp.innerHTML = "<br><br><br><br>Un opérateur d'affectation assigne une valeur à son opérande gauche, valeur basée sur celle de l'opérande droit. <br>L'opérateur d'affectation simple est le signe égal (=), il assigne la valeur de l'opérande droit à l'opérande gauche. Autrement dit, avec « x = y » on affecte la valeur y à x.<br>D'autres opérateurs d'affectation sont des raccourcis correspondant à certaines opérations composées. 'correspond à  x = x + y' << Ex. x += y correspond à  x = x + y || x -= y correspond à x = x - y >> ";
});

boutonOpe2.addEventListener('click', function() {
    ppp.innerHTML = "<br><br><br><br>Un opérateur de comparaison compare ses deux opérandes et renvoie un valeur booléenne correspondant au résultat de la comparaison (vraie ou fausse).<br>Les opérandes peuvent être des nombres, des chaînes de caractères, des booléens ou des objets.<br>Les chaînes de caractères sont comparées selon l'ordre lexicographique usuel en utilisant les valeurs Unicode.<br>Dans la plupart des cas, si les deux opérandes ne sont pas du même type, JavaScript tentera de les convertir vers un type approprié. Cette méthode aboutira souvent à une comparaison numérique. Les seules exceptions à cette conversion implicite sont les opérateurs === et !== , qui testent des égalités et inégalités strictes.";
});

// Ajout du text page Operateur || Fin