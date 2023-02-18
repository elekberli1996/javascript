
const form =  document.querySelector("#film-form");

const title1 = document.querySelector ("#title");

const director1 = document.querySelector("#director");

const url1 = document.querySelector("#url");

const films = document.querySelector("#films")

const clearFilms = document.querySelector("#clear-films");

const ui = new UI();

const st = new ST();

form.addEventListener("submit",run);
document.addEventListener("DOMContentLoaded",run2);
films.addEventListener("click",run3);
clearFilms.addEventListener("click",run4);

function run4(e){
   st.deleteAll();
   ui.deleteAll();
}

function run3(e){
  
   if(e.target.id==="delete-film"){
      console.log("silindi");
      ui.deleteFilm(e.target);
      st.deleteFilm(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
   }
}

function run2(e){
  let kino= st.getSorage();
  //console.log(kino);
  ui.load(kino);
}

function run(e){
    const title=title1.value;
    const director= director1.value;
    const url=url1.value;
 if(title ==="" || director==="" || url==="")
 {

  ui.alert("warning","alanlarin hepsi doldurulmali");


   
    
 }
 else{
    const newFilm = new Film(title,director,url);

   ui.add(newFilm);
   st.addStorage(newFilm);
   ui.alert("success","basarila eklendi");
   ui.clear(title1,director1,url1);
 }

   
    e.preventDefault();
}