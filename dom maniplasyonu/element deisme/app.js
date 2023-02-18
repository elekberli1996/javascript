//replace
//<h5 class="card-title" id = "tasks-title">Todolar</h5>
const cardbody = document.querySelectorAll(".card-body")[1];

const newelement = document.createElement("h3");

newelement.className="card-title";

newelement.id="tasks-tite";

newelement.appendChild(document.createTextNode("todoalra"));

const oldelement=cardbody.children[1];

cardbody.replaceChild(newelement,oldelement);

console.log(cardbody.children[1]);

