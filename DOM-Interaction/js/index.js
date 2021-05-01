'use strict';

//slide 5 with a different example from the slide

let head1 = document.querySelector('h1');
console.log(head1);   //see it's an object

head1.textContent = 'Hello world!';  //setter
console.log(head1.textContent);  

head1.textContent = 'Changed to Hello galaxy!';  //setter
console.log(head1.textContent);


// slide 6 buttons 

let buttonElem = document.querySelector('#demo-button');

// let whatToDo = function(){
//     console.log("you clicked me!");
// }

// buttonElem.addEventListener('click', whatToDo);

// Anonymous function as parameter
// buttonElem.addEventListener('click', function() {
//     console.log("you clicked me!");
// });

//Example with event parameter
buttonElem.addEventListener('click', function(event) {
    console.log(event);
});

// // Example with changing style
// buttonElem.addEventListener('click', function() {
//     buttonElem.classList.toggle('btn-success');
// })

// Example with altering button text and changing, not toggling
buttonElem.addEventListener('click', function() {
    buttonElem.classList.add('btn-success');
    buttonElem.textContent = "Consider me a changed button";
})

// //slide 14 - adding new element

// //DOM

// part 1, Create a new element in DOM
let newP = document.createElement('p')   //example using the DOM create element
newP.textContent = "I'm new!"

// part 2, we need to add to the DOM
// add to the end
document.querySelector('#text .card-body').append(newP)

// move it to the start
document.querySelector('#text .card-body').prepend("I'm first!")



// // //Slide 15 - Event Listeners - mouseenter and mouseleave (hover)
// let imgElem = document.querySelector('img');

// imgElem.addEventListener('click', (function () {
//     console.log('you clicked me');
// }));

// imgElem.addEventListener('mouseenter', (function (event) {
//     event.target.setAttribute('src', 'img/surprised.png')
// }));

// imgElem.addEventListener('mouseleave', (function (event) {
//     event.target.setAttribute('src', 'img/happy.png')
// }));
 

// // Slide 15a

// let state = {
//     currentEmotion: "happy"
// }

// let imgElem = document.querySelector('img');

// function renderEmotion() {
    
//     imgElem.setAttribute('src', "img/" + state.currentEmotion + ".png");

//     if (state.currentEmotion === "happy") {
//         document.querySelector('#mood').textContent = "happy!";
//     }
//     else {
//         document.querySelector('#mood').textContent = "surprised";
//     }
// }

// imgElem.addEventListener('mouseenter', (function (event) {
//     state.currentEmotion = "surprised";
//     renderEmotion();
// }));

// imgElem.addEventListener('mouseleave', (function (event) {
//     state.currentEmotion = "happy";
//     renderEmotion();
// }));
