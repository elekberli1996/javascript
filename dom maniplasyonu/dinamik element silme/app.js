 const todolist= document.querySelector("ul.list-group");

 const todo = document.querySelectorAll ("li.list-group-item");

 todo[1].remove();

 //removechild

 todolist.removeChild(todolist.lastElementChild);