const filterinput = document.getElementById("filter");
const todoform = document.getElementById("todo-form");

//filterinput.onfocus=function () {
  //  console.log("merhaba");
//}

filterinput.addEventListener("focus",function run(e){
    console.log("merhaba");
    console.log(e);

    console.log(e.target);
    console.log(e.target.placeholder);

});

todoform.addEventListener("submit",submit);

function submit(e) {
    console.log("submit oldu");

    
    e.preventDefault();

}



console.log(filterinput);