
let J = document.getElementById('j');
let A = document.getElementById('a');
let V = document.getElementById('v');
let A2 = document.getElementById('a2');
let S = document.getElementById('s');
let C = document.getElementById('c');
let R = document.getElementById('r');
let I = document.getElementById('i');
let P = document.getElementById('p');
let T = document.getElementById('t');
let barre = document.getElementById('barre');
let li1 = document.querySelector('#li1');
let li2 = document.querySelector('#li2');
let li3 = document.querySelector('#li3');
let li4 = document.querySelector('#li4');
let li5 = document.querySelector('#li5');

var array = [J,A,V,A2,S,C,R,I,P,T,barre];

array.forEach((element, i) => {
    setTimeout(() => { 
    element.style.display ='block';
    },i * 200);
});
    
setTimeout(function(){
    li1.style.display ='block'}, 2300);
setTimeout(function(){
    li2.style.display ='block'}, 2300);
setTimeout(function(){
    li3.style.display ='block'}, 2300);
setTimeout(function(){
    li4.style.display ='block'}, 2300);
setTimeout(function(){
    li5.style.display ='block'}, 2300);
  

    //             console.log(i)
    //             js.style.display ='block';
    //         }, i * 200);

// // animation du javascript dans l'index
// setTimeout(function(){ 
//     J.style.display ='block'}, 200);
// setTimeout(function(){ 
//     A.style.display ='block'}, 400);
// setTimeout(function(){ 
//     V.style.display ='block'}, 600);
// setTimeout(function(){ 
//     A2.style.display ='block'}, 800);
// setTimeout(function(){ 
//     S.style.display ='block'}, 1000);
// setTimeout(function(){ 
//     C.style.display ='block'}, 1200);
// setTimeout(function(){ 
//     R.style.display ='block'}, 1400);
// setTimeout(function(){ 
//     I.style.display ='block'}, 1600);
// setTimeout(function(){ 
//     P.style.display ='block'}, 1800);
// setTimeout(function(){ 
//     T.style.display ='block'}, 2000);
// setTimeout(function(){
//     barre.style.display ='block'}, 2200);

// ANIMATION QUI MARCHE ^^^^^^



// let J = document.getElementById('j');
// let A = document.getElementById('a');
// let V = document.getElementById('v');
// let A2 = document.getElementById('a2');
// let S = document.getElementById('s');
// let C = document.getElementById('c');
// let R = document.getElementById('r');
// let I = document.getElementById('i');
// let P = document.getElementById('p');
// let T = document.getElementById('t');
// let barre = document.getElementById('barre');
// let li1 = document.querySelector('#li1');
// let li2 = document.querySelector('#li2');
// let li3 = document.querySelector('#li3');
// let li4 = document.querySelector('#li4');
// let li5 = document.querySelector('#li5');

// animation du javascript dans l'index

// var array = [J,A ,V, A2, S, C, R, I, P, T, barre ,li1 ,li2 ,li3 ,li4, li5]

// function x() {
//     for (let i = 0; i < array.length; i++) {
//         var js = array[i]
//         function close(i){
//         setTimeout(function(){ 
//             console.log(i)
//             js.style.display ='block';
//         }, i * 200);
//     }     
//             close(i);
//         }
// }
// x(); 
// var js = array[i]
// function doSetTimeout(i) {
    
//     setTimeout(function(){
//         i.style.display ='block';
//     },200);
// }

// for (let i = 1; i < array.length; ++i)
//     doSetTimeout(i);^






// const output = document.querySelector("#output");
// const display = s => output.innerText = s;

// display ("Hello World");

// const js = ["J","A","V","A","S","C","R","I","P","T"];

// ["J","A","V","A","S","C","R","I","P","T"].forEach((letter, i) => {
//     setTimeout (() =>{
//         display(letter);
//     }, i * 300);
// });