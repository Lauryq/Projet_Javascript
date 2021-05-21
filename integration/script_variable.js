// Ajout du text page Variable || Début

let boutonVar1 = document.getElementById('bouton_variable1');
let boutonVar2 = document.getElementById('bouton_variable2');
let boutonVar3 = document.getElementById('bouton_variable3');
let boutonVar4 = document.getElementById('bouton_variable4');

boutonVar1.addEventListener('click', function() {
    p1.innerHTML = '<h2>Les Variables :</h2><hr>Une variable est un conteneur ou un espace de stockage temporaire qui va pouvoir stocker une valeur. Lorsqu’on stocke une valeur dans une variable, on dit également qu’on assigne une valeur à une variable.';
});

boutonVar2.addEventListener('click', function() {
    p1.innerHTML = '<h2>Le type Const :</h2><hr>Cette instruction permet de déclarer une constante disponible uniquement en lecture. A l’inverse de let, const a besoin d’être déclaré avec une valeur initiale. Comme const déclare une constante, on ne peut pas en re-déclarer une qui partage le même nom, dans la même portée. De la même manière, on ne peut pas changer sa valeur après déclaration';
});

boutonVar3.addEventListener('click', function() {
    p1.innerHTML = `<h2>Le type Var :</h2><hr>C’est la plus connue, celle qui existe depuis Javascript 1.0. On peut résumer, même si c’est plus subtile que ça, que var est similaire à let, mais avec une portée de fonction (là ou let a une portée de bloc). La portée de la variable est celle du contexte dans lequel elle est déclarée :<br>
    - Si elle est déclarée dans une fonction, la portée est celle de la fonction, qu’importe le bloc dans lequel elle se trouve.<br>
   - Si elle est déclarée hors d’une fonction, la portée sera celle du contexte global.
   `;
});

boutonVar4.addEventListener('click', function() {
    p1.innerHTML = '<h2>Le type Let :</h2><hr>Sa principale caractéristique est sa portée : elle est limité à celle du bloc courant. Pour rappel, un bloc en Javascript, c’est ce qu’on retrouve entre accolades : une comparaison en if, une boucle while etc… Comme c’est une variable, on peut modifier sa valeur après sa déclaration.';
});

// Ajout du text page Variable || Fin