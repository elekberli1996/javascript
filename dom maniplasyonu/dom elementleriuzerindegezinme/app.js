let value;

const todolist = document.querySelector(".list-group");
const todo= document.querySelector(".list-group-item:nth-child(2)");
const cardrow=document.querySelector(".card.row");

value=todolist.childNodes; //

value = todolist.children;

value = todolist.children[0]; 

value=cardrow.children[2].children[1].textContent="merhaba";

value= todolist.firstElementChild;

value = todo.lastElementChild;

value = todo.children.length;

value = todolist.childElementCount;

value = todolist.parentElement.previousElementSibling.children[0];





console.log(value);