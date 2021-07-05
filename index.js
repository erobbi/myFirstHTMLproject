const form = document.querySelector("#form")
console.log(form); // form structure does appear

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
form.addEventListener('submit', logSubmit);



let buttonAdd = document.querySelector('#buttonAdd');
buttonAdd.onclick = function() {console.log("thanks for clicking me");}
buttonAdd.addEventListener("click", addDiv);
function addDiv() {
    console.log("thanks again, here's a new div for you")
    block = document.createElement('div');
    block.innerHTML = "you made me!";
    container_block = document.getElementById( 'addToMe' );
    container_block.appendChild( block ); 
 }

let buttonRemove = document.querySelector('#buttonRemove');
buttonRemove.onclick = function() {console.log("thanks for clicking remove me");}
buttonRemove.addEventListener("click", removeDiv); // having issues here

function removeDiv() {
    console.log("thanks, let's destroy that div");
    let removeMe = document.getElementById('addToMe');
    let iExist = document.getElementById('iExist')
    removeMe.removeChild(iExist);
}

//alert("js works")
