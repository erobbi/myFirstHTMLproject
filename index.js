const form = document.querySelector("#form")
console.log(form); // form structure does appear


form.addEventListener('submit', logSubmit);
function logSubmit(event) {
    log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
    event.preventDefault(); // stop page refresh
    console.log('hi there, here is what you submitted');
    let formText = document.getElementById("form");
    console.log(formText.fname)
    let textElement = "";
    let i;
    for (i = 0; i < formText.length ;i++) {
      textElement += formText.elements[i].value + "<br>";
    }// src: https://www.w3schools.com/js/tryit.asp?filename=tryjs_form_elements
    document.getElementById("submissions").innerHTML = textElement;
}

let buttonAdd = document.querySelector('#buttonAdd');
//buttonAdd.onclick = function() {console.log("thanks for clicking me");}
buttonAdd.addEventListener("click", addDiv);
function addDiv() {
    console.log("thanks again, here's a new div for you")
    block = document.createElement('div');
    buttonDiv = document.createElement('button')
    buttonDiv.innerText = "Remove"
    // buttonDiv.class = "Remove Button"
    console.log(buttonDiv)
    block.append(buttonDiv)
    console.log(block)
    block.textContent = "you made me!";
    console.log(block)
    container_block = document.getElementById( 'addToMe' );
    container_block.appendChild(block); 
 }

let buttonRemoveiExist = document.querySelector('#buttonRemoveiExist');
buttonRemoveiExist.onclick = function() {console.log("thanks for removing sense of self");}
buttonRemoveiExist.addEventListener("click", removeiExist);
function removeiExist() {
    console.log("thanks, let's destroy statement");
    let removeMe = document.getElementById('addToMe');
    let iExist = document.getElementById('iExist')
    removeMe.removeChild(iExist);
}

let buttonRemoveDiv = document.querySelector('#buttonRemoveDiv');
buttonRemoveDiv.onclick = function() {removeDiv}
// {
//     console.log("thanks for clicking remove div")
//     buttonRemoveDiv.addEventListener("click", removeiExist);
// }

function removeDiv() {
    console.log("thanks, let's destroy div you created");
    let removeMe = document.getElementById('addToMe');
    let divTag = document.getElementsByTagName('div')
    removeMe.removeChild(divTag);
}

let buttonChangePageColor = document.querySelector('#changePageColor')
buttonChangePageColor.onclick = 
function changeBackgroundColor() {
    console.log("thanks for clicking change background color")
    bodyObject = document.querySelector('body')
    let colors = ['#ff0000', '#00ff00', '#0000ff'];
    let random_color = colors[Math.floor(Math.random() * colors.length)];
    console.log(random_color)
    // src: https://stackoverflow.com/questions/14984643/css-pick-a-random-color-from-array
}