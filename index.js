let form = document.querySelector("#form")
console.log(form);
form.onsubmit = function(event) { // on submit
    if (!isFormVolid(this)) {
        event.preventDefault(); // prevent form submission if form is not valit
    }
}

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
buttonRemove.addEventListener("click", removeDiv()); // having issues here

function removeDiv() {
    console.log("thanks, let's destroy that div");
    block =document.removeDiv();
    container_block = document.getElementById( 'addToMe' );
}

//alert("js works")
