// mouse eventleri;

const cardBody = document.querySelectorAll(".card-body")[1];
const title = document.querySelector("#tasks-title");
//click
//title.addEventListener("click",run);
//dblclick
//title.addEventListener("dblclick",run);
//mousedown
//title.addEventListener("mousedown",run);
//mouseup
//title.addEventListener("mouseup",run);

//mouseover
//title.addEventListener("mouseover",run);
//mouseout\
//title.addEventListener("mouseout",run);
//mouseenter
//mouseleave
function run(e){
    console.log(e.type);
}

cardBody.addEventListener("mouseleave",run)

