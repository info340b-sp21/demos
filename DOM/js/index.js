'use strict';

// Slide 8 - (example 1)
let theH1 = document.querySelector('h1');
console.log(theH1);

//change content
let subtitle = document.querySelector('header p');
subtitle.innerHTML = subtitle.textContent + " <em>Prof Carlson</em>";


//  change attributes - SLIDE 9 (example 2)
let imgElem = document.querySelector('img');
imgElem.src = 'img/husky.jpg';
imgElem.alt = "an adult dog";



//change style - SLIDE 10 (example 3)
theH1.classList.add('text-success');
// theH1.classList.add('animated', 'infinite','tada');

imgElem.classList.add('anim');

// in console add this : imgElem.classList.toggle('scale-out')



//create an element -- SLIDE 11 (example 4)
let newLi = document.createElement('li')
newLi.innerHTML = '<a href="https://ischool.uw.edu/">Another iSchool Link</a>'
let linkList = document.querySelector('ul')
linkList.appendChild(newLi);

let new2Li = document.createElement('li');
let anchorElem = document.createElement('a');
anchorElem.textContent = "espn.com";
anchorElem.href = "https://espn.com";
new2Li.appendChild(anchorElem);

linkList.appendChild(new2Li);



//USE Function to add item(s) - SLIDE 12 (example 5)
function renderCookie() {
    let jar = document.querySelector('#cookie-jar');
    let cookie = document.createElement('img')
    cookie.src = "img/cookie.png"
    cookie.alt = "a cookie"
    jar.appendChild(cookie);
}

renderCookie();


// USE Function to add n number by iterating - SLIDE 12 (example 5 continued)
function renderCookieJar(number) {
    let jar = document.querySelector('#cookie-jar')
    jar.innerHTML = '';             // deleting any cookies that used to be there
    for (let i = 0; i < number; i++) {
        renderCookie()
    }
}

// actually do that
renderCookieJar(10);


renderCookieJar(5);

// Add Event Listener - SLIDE 14 (example 6)

let button1 = document.querySelector('#button1');
button1.addEventListener('click', function () {      //register this callback inline function
    console.log("button clicked")
    renderCookieJar(3);

});

// Keep state as events occur - SLIDE 15 (example 7)

let isPuppy = false;     //global variable

imgElem.addEventListener('click', function () {
    if (isPuppy) {
        imgElem.src = 'img/husky.jpg';
        isPuppy = false;
    } else {
        imgElem.src = 'img/puppy.jpg';
        isPuppy = true;
    }
})


// // Temporary local data store
// let DATA = {
//     username: "tim",
//     cookietype: "choclate chip",

// }


// example 8 

// try adding to ordered list
let myButton = document.querySelector('#add-item');
myButton.addEventListener('click', input);

function input() {
    console.log("input function");
    let input = document.querySelector('input');
    addItem(input.value);
    input.value = '';
}

function addItem(input) {
    console.log("add function");
    let ol = document.querySelector('ol');
    let newLi = document.createElement('li');
    // newLi.innerHTML = input;
    newLi.textContent = input;
    ol.appendChild(newLi);

}

// example 9 - shows you how you can loop through an array of objects to put stuff
// on the display. This idea will come in handy when you are reading from an api, or 
// your test file.
// 

const LINKS = [
    { url: 'https://espn.com', title: 'espn.com website' },
    { url: 'https://ischool.uw.edu/', title: 'iSchool' },
    { url: 'https://canvas.uw.edu/courses/1449811', title: 'Info340b Canvas' }
]


function createLink(url, title) {
    let newListItemElem = document.createElement('li');
    let newAnchorElem = document.createElement('a');
    newAnchorElem.textContent = title;
    newAnchorElem.href = url;
    newListItemElem.appendChild(newAnchorElem);
    return newListItemElem
}

let listElement = document.querySelector('#dynamicGen');
let firstLink = createLink("https://ischool.uw.edu", "iSchool link");
listElement.appendChild(firstLink);
listElement.appendChild(createLink("example.com", "Example"));


// Here's how you can read in from an array of objects to automate this
function renderAllLinks(linksArray) {
    listElement.innerHTML = '';  // clear it out if you want to start from scratch
    for (let linkObj of linksArray) {
        let linkElem = createLink(linkObj.url, linkObj.title);
        listElement.appendChild(linkElem);

    }
}

renderAllLinks(LINKS);




