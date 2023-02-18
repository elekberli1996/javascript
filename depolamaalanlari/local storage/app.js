
localStorage.setItem("1","emin");

localStorage.clear();

localStorage.setItem("1","emin");

console.log(localStorage.getItem("1"));


// locat storage array yazma

const todo =["1","2","3"];

localStorage.setItem("1",JSON.stringify(todo));

const value=JSON.parse(localStorage.getItem("1"));

console.log(value);

const form = document.querySelector("#todo-form");

const input = document.querySelector("#todo");

form.addEventListener("submit",run);

function run(e){

    const value=input.value;

    let todos;

    if (localStorage.getItem("todos")===null){
        todos=[];
       //localStorage.setItem("todos",JSON.stringify(todos));
    }

    else{
       todos=JSON.parse( localStorage.getItem("todos"));
       
       
    }
    todos.push(value);
    localStorage.setItem("todos",JSON.stringify(todos));






    e.preventDefault();
}

