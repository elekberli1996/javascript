let element;

element=document.getElementById("todo-form");

element= document.getElementsByClassName("list-group-item")[0];

element=document.getElementsByTagName("li");

element=document.querySelectorAll(".list-group-item");

element.forEach(function(e){
    console.log(e );
})

//console.log(element);
