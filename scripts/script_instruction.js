// Ajout du text page Instruction || Début

let boutonIns1 = document.getElementById('bouton_instruction1');
let boutonIns2 = document.getElementById('bouton_instruction2');

//texte instruction conditions//

boutonIns1.addEventListener('click', function() {
    p1.innerHTML = `L'instruction if exécute une instruction si une condition donnée est vraie ou équivalente à vrai. Si la condition n'est pas vérifiée, il est possible d'utiliser une autre instruction.
    Plusieurs instructions if...else peuvent être imbriquées afin de créer une structure else if (on notera qu'il n'y a pas de mot-clé elseif en JavaScript).<br>
    <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/if...else">Source: site MDN</a>
    
    `;
});

//texte instruction boucles//

boutonIns2.addEventListener('click', function() {
    p1.innerHTML = `Les boucles permettent de répéter des actions simplement et rapidement. Une boucle peut être vue comme une version informatique de « copier N lignes » ou de « faire X fois quelque chose ».<br>
    <br>
    •	L’instruction for<br>
    > Une boucle for répète des instructions jusqu'à ce qu'une condition donnée ne soit plus vérifiée.<br>
    Ex. for ([expressionInitiale]; [condition];[expressionIncrément])
    instruction<br>
    <br>
    <br>  
    •	L’instruction do...while<br>
    > L'instruction do…while permet de répéter un ensemble d'instructions jusqu'à ce qu'une condition donnée ne soit plus vérifiée.<br>
    Ex. do 
    Instruction<br>
       while (condition);<br>
    
       <br>
    •	L’instruction while<br>
    > Une instruction while permet d'exécuter une instruction tant qu'une condition donnée est vérifiée.<br>
    Ex. while (condition) instruction
    <br>
    
    •	L’instruction label<br>
    > Un label (ou étiquette) permet de fournir un identifiant pour une instruction afin d'y faire référence depuis un autre endroit dans le programme. On peut ainsi identifier une boucle grâce à un label puis utiliser les instructions break ou continue pour indiquer si le programme doit interrompre ou poursuivre l'exécution de cette boucle.<br>
    <br>
    •	L’instruction continue<br>
    > L'instruction continue permet de reprendre une boucle while, dowhile, for, ou une instruction label.
    Lorsque continue est utilisé sans label, l'itération courante de la boucle (celle la plus imbriquée) est terminée et la boucle passe à l'exécution de la prochaine itération. À la différence de l'instruction break, continue ne stoppe pas entièrement l'exécution de la boucle. Si elle est utilisée dans une boucle while, l'itération reprend au niveau de la condition d'arrêt. Dans une boucle for, l'itération reprend au niveau de l'expression d'incrément pour la boucle.
    Lorsque continue est utilisé avec un label, il est appliqué à l'instruction de boucle correspondante.
    <br>
    •	L’instruction for...of<br>
    L'instruction for...of crée une boucle qui fonctionne avec les objets itérables (qui incluent Array, Map, Set, l'objet arguments, etc.). La boucle appelle un mécanisme d'itération propre à l'objet utilisé et elle parcourt l'objet et les valeurs de ses différentes propriétés.<br>
    <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Loops_and_iteration">Source: site MDN</a>
    `;
});

// Ajout du text page Instruction || Fin