
'use strict';

// SLIDE 9 - Anonomous Variables

// let array = [1,2,3]
// console.log(array)

// console.log([4,5,6]);

// function sayHello(){
//     console.log("Hello");
// }

// console.log(sayHello);

// console.log(function (){
//   console.log("Hello");
// });

// // console.log(function() {  // same anonymous function as above
// //     console.log("Hello");
// // })

// console.log(sayHello());


//SLIDE 10 Firsrt assign array to variable, then do same with function
// <!-- assign array to variable -->

// let obj = {};
// let myArray = ['a','b','c'];

// //assign array to object
// obj.array = myArray;

// //access with dot notation
// console.log(obj.array[0]); //gets 'a'


// //assign literal (anonymous value)
// obj.otherArray = [1,2,3];
// console.log(obj.otherArray[0]);

// let obj = {}
// function sayHello(name) { 
//    console.log("Hello, "+name);
// }

// //assign function to object
// obj.sayHi = sayHello;

// //access with dot notation
// obj.sayHi('all'); //prints "Hello all"


// //assign literal (anonymous value)
// obj.otherFunc = function() { 
//     console.log("Hello world!");
// }

// obj.otherFunc();

//SLIDE 11 - FUNCTIONS ARE OBJECTS

// function sayHello(name) { 
//   console.log("Hello, "+name);
// }

// function sayGoodbye(name){
//    console.log("Goodbye, "+name);
// }


// function doWorld(aFunction) {   //takes ANOTHER FUNCTION as an arg will call the arg function passing it "world"
//   aFunction("world");
// }

// // doWorld(sayHello); //call function and pass value - prints "Hello world"

// // doWorld(function(msg) {          //pass literal (anonymous value)
// //  console.log("you said: "+msg);
// // }); //prints "you said: world"


//  let thingsToDo = [sayHello, sayGoodbye, sayGoodbye];

//  for (let action of thingsToDo){
//    doWorld(action);
//  }




// //SLIDE 13 - takes in TWO callback functions!

// function doTogether(firstCallback, secondCallback){
//   firstCallback();  //execute the first function
//   secondCallback();  //execute the second function  
  
    
//     console.log('at the same time!');
// }

// function rubBelly() {
//     console.log('rub your belly');
// }
// function patHead() {
//     console.log('pat your head');
// }


// doTogether(rubBelly, patHead); //pass in the callbacks to do them together

// // let patHead = function() {
// //     console.log('pat your head');
// // }


let myArray1 = [1,2,3,4,5];


// SLIDE 14 - ARRAY ITERATION

// let sum = 0;
// myArray1.forEach(function(n){
//     sum = sum + n;
// });
// console.log(sum);


//SLIDE 15 - MAPPING

// myArray1.forEach(function(n, idx){  //traditional looping method
//     myArray1[idx] = n*n;
// });
// console.log(myArray1);


// myArray1 = myArray1.map(function(n) {   //using map with callback
//     return n*n;
// })
// console.log(myArray1);


// SLIDE 16 - FILTERING
// let myArray1 = [1,2,3,4,5];

// let isACrowd = myArray1.filter(function(n) { 
//     return n >= 3; //keep if > 3
//  }); 

//  console.log(isACrowd);
//  console.log(myArray1);

// //SLIDE 17 -- REDUCING

// let myReduction = myArray1.reduce(function(total, next){
//     return total+next;
// }, 5);
// console.log(myReduction);


//BOOK EXAMPLE OF USING FUNCTION AS PROPERTY (method)


let fido = {        // An object representing a Dog
    name: "Fido",
    bark: function() { console.log(this.name, "woofs")}
  }
  
  
  let spot = {              // An object representing another Dog
    name: "Spot",
    bark: function() { console.log(this.name, "yips")}
  }
  
  console.log('***This is Fido barking:***');
  fido.bark();      //=> "Fido woofs". Note, `this` will refer to the `fido` object. 
  
  console.log('***This is Spot barking***');
  spot.bark();  //=> "Spot yips". Note, `this` will refer to the `spot` object. 
