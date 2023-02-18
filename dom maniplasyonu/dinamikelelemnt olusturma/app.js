 let value;
//<a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>
 const newlink=document.createElement("a");

 newlink.className="btn btn-dark";

 newlink.id = "id";

 newlink.href="http://www.google.com";

 newlink.target="_blank";

 newlink.appendChild(document.createTextNode("farkli sayfa"));
 

 console.log(newlink);

 const cardbody= document.querySelectorAll(".card-body")[1];

 cardbody.appendChild(newlink);
 

 //console.log(cardbody.children);