const element=document.querySelector("#clear-todos");


element.style.color="green";
console.log(element.style);

//console.log(element.id );
//console.log(element.className);
//console.log(element.style);

element.className="btn btn-warning";

const elements=document.querySelectorAll(".list-group-item");
console.log(elements);
elements.forEach(function(element){
    element.style.color="blue";
    element.style.background="red";
})
