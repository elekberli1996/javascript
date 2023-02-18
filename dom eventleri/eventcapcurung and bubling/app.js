// event bubling
//const doc = document.querySelector(".container").addEventListener("click",run);

function run(e){
    console.log(e.type);
    console.log("ccontainer");
}

//const doc1 = document.querySelector("#tasks-title").addEventListener("click",run1);

function run1(e){
    console.log(e.type);
    console.log("todolar");
}

//event capturing

const cardBody = document.querySelectorAll(".card-body")[1];



cardBody.addEventListener("click",run2);

function run2(e){
    console.log(e.target);
}

