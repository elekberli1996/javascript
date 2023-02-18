class UI{
    add (newFilm){

   
        films.innerHTML+=`<tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>`
        
        }
        clear (e1,e2,e3){
            e1.value="";
            e2.value="";
            e3.value="";
        }
        alert(type,message){
  
            const element = document.createElement("div");
            element.className=`alert alert-${type}`;
            element.role="alert";
            element.textContent=`${message}`;
              form.appendChild(element);
          
          
          window.setTimeout(function(){
              element.remove();
          },2000)
          
          
          }

          load (kino){
  
            kino.forEach(function (k) {
                   
        films.innerHTML+=`<tr>
        <td><img src="${k.url}" class="img-fluid img-thumbnail"></td>
        <td>${k.title}</td>
        <td>${k.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>`
        
                
            });
        }

        deleteFilm (e){
   
            e.parentElement.parentElement.remove();
           }
           
         deleteAll(){
               console.log(films);
               console.log(films.children.length);
               let children= Array.from(films.children);
               children.forEach(function(e){
                  e.remove();
               });
              
           }

}

/*UI.prototype.add = function(newFilm){

   
films.innerHTML+=`<tr>
<td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
<td>${newFilm.title}</td>
<td>${newFilm.director}</td>
<td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
</tr>`

}

UI.prototype.clear= function(e1,e2,e3){
    e1.value="";
    e2.value="";
    e3.value="";
}

UI.prototype.alert = function (type,message){
  
  const element = document.createElement("div");
  element.className=`alert alert-${type}`;
  element.role="alert";
  element.textContent=`${message}`;
    form.appendChild(element);


window.setTimeout(function(){
    element.remove();
},2000)


}

UI.prototype.load= function(kino){
  
    kino.forEach(function (k) {
           
films.innerHTML+=`<tr>
<td><img src="${k.url}" class="img-fluid img-thumbnail"></td>
<td>${k.title}</td>
<td>${k.director}</td>
<td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
</tr>`

        
    });
}

UI.prototype.deleteFilm= function(e){
   
 e.parentElement.parentElement.remove();
}

UI.prototype.deleteAll=function(){
    console.log(films);
    console.log(films.children.length);
    let children= Array.from(films.children);
    children.forEach(function(e){
       e.remove();
    });
   
}*/