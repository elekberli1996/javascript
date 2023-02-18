const input = document.querySelector("#todo");

const form  = document.querySelector("#todo-form");

const ekle = document.querySelectorAll(".card-body")[1].children[4];

const element = document.createElement("li");

const firstCardBody = document.querySelectorAll(".card-body")[0];

const secondCardBody = document.querySelectorAll(".card-body")[1];

const filter = document.querySelector("#filter");

const clearButton = document.querySelector("#clear-todos");

eventLisener();

function eventLisener()
{
    form.addEventListener("submit",run);
    document.addEventListener("DOMContentLoaded",run1);
    secondCardBody.addEventListener("click",run3);
    filter.addEventListener("keyup",run4);
   clearButton.addEventListener("click",run5);


}
function run5(e){

    if (confirm("eminmisniz")){
    console.log("calisdi");
    secondCardBody.children[4].remove();
    localStorage.removeItem("todos");

    }

}



function run4(e){
  
    let deyer=filter.value.toLowerCase();
   
   let array = Array.from(secondCardBody.children[4].children);
   array.forEach(function(e){
    let axtarilacaq=e.textContent.toLowerCase();
    let i=axtarilacaq.indexOf(deyer);
   // console.log(i);
    if(i===-1){
        console.log("esit deil");
    
        e.setAttribute("style"," display :none")
        //console.log(e);


    }
    else{
        e.setAttribute("style"," background-color: blue");
    }
    //console.log(e.textContent);
   })
  

}


function run3(e){
//console.log(e.target.className);

if (e.target.className === "fa fa-remove")
{
 e.target.parentElement.parentElement.remove();
 let todos=gettodos();
 let sil=e.target.parentElement.parentElement.textContent;
 todos.forEach(function(e){
    if(e===sil){

    todos.splice(todos.indexOf(e),1);   
        

    }
 })
   localStorage.setItem("todos",JSON.stringify(todos));
}
}

function run1 (){
    let todos= gettodos();    
    todos.forEach(function(e){
       
        add(e);
        
    });

}

function run(e)
{
    const value= input.value.trim();

    if (value==""){

        alert("danger","boslukdoldurulmali");

    }
    else{
         add(value);
         alert("alert alert-success","basariyla eklendi");
         addLocalStorage(value);
    }

    

    
    

   

    e.preventDefault();

}

function gettodos(){
     let todos;
    if (localStorage.getItem("todos")===null){
        todos=[];
       
    }

    else{
 todos=JSON.parse(localStorage.getItem("todos"));

    }
    return todos;
}


function addLocalStorage(value){
    
 
  let todos= gettodos()
 
    
 todos.push(value);
    localStorage.setItem("todos",JSON.stringify(todos));
    }




function alert(clas11,soz)
{ 
console.log(clas11);

const alert= document.createElement("div");
alert.className=`alert alert-${clas11}`;
alert.role="alert";
alert.appendChild(document.createTextNode(soz));
    form.appendChild(alert);
    window.setTimeout(function(){
        alert.remove();
        input.value="";
    },2000);

}





function add(value){

    const yenielement =document.createElement("li");
    const a= document.createElement("a");
    a.className="delete-item";
    a.href="#";
    a.innerHTML="<i class ='fa fa-remove'></i>";
    yenielement.className="list-group-item d-flex justify-content-between";
    yenielement.appendChild(document.createTextNode(value));
    yenielement.appendChild(a);

    ekle.appendChild(yenielement);

   



   
}










//yenielement.className="list-group-item d-flex justify-content-between";

/*<li class="list-group-item d-flex justify-content-between">
${input.value}
<a href = "#" class ="delete-item">
    <i class = "fa fa-remove"></i>
</a>

</li>*/






//document.body.innerHTML=html;
 
                      
