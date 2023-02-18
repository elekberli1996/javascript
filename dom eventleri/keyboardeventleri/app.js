//keypress

//document.addEventListener("keypress",run);

function run(e) {
    console.log("naber");
    console.log(e.which);
    console.log(e.key);
}

//keydown

//document.addEventListener("keydown",run);

// keyup

document.addEventListener("keyup",run);

const header = document.querySelector(".card-header");

const input = document.getElementById("todo");

input.addEventListener("keyup",run1);

function run1(e){
    header.textContent=e.target.value;
    console.log(e.target.value);
}

console.log(input);

