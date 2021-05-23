// Ajout du text page Fonction || Début

let boutonFon1 = document.getElementById('bouton_fonction1');


//texte definition fonction//
boutonFon1.addEventListener('click', function() {
    p1.innerHTML = `<h2>Fonctions :</h2><hr>
    <p>Une fonction est une procédure JavaScript, un ensemble d'instructions effectuant une tâche ou calculant une valeur.
    Une définition de fonction (aussi appelée déclaration de fonction ou instruction de fonction) est construite avec le mot-clé function, suivi par :</p>
    
    <ul id="listbloctext">
    <li>Le nom de la fonction (ou pas, elle peut être « anonyme », c’est-à-dire sans nom, si elle n’a pas besoin d’être appelé de nouveau par la suite).</li>
    <li>Une liste d'arguments à passer à la fonction, entre parenthèses et séparés par des virgules.</li>
    <li>Les instructions JavaScript définissant la fonction, entre accolades, { }.</li>
    </ul>
    
    La seule définition d'une fonction ne permet pas d'exécuter la fonction. Cela permet de lui donner un nom et de définir ce qui doit être fait lorsque la fonction est appelée. Appeler la fonction permet d'effectuer les actions des instructions avec les paramètres indiqués.
    `;
});


// Ajout du text page Fonction || Fin