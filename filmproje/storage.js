class ST
{
   deleteAll (){
        console.log("silindi");
        localStorage.removeItem("kino");
    }
    deleteFilm(e){
   
        let kino= this.getSorage();
       
        kino.forEach(function (k) {
            console.log(k.title);
            if(e===k.title){
              
              kino.splice(kino.indexOf(k),1)
            }
    
            
        }); 
        localStorage.setItem("kino",JSON.stringify(kino)) ;
        
    }
     addStorage (newFilm){
   
    const kino= this.getSorage();
     console.log(kino);
     kino.push(newFilm);
     localStorage.setItem("kino",JSON.stringify(kino))  
     
 }
  getSorage (){
    let kino;
       if (localStorage.getItem("kino")===null)
       {  
            kino = [];
           
           
       }
       else
       {
           kino= JSON.parse(localStorage.getItem("kino"));
          
          }
          return kino;
   
   }

}

/*ST.prototype.addStorage =  function (newFilm){
   
   const kino= this.getSorage();
    console.log(kino);
    kino.push(newFilm);
    localStorage.setItem("kino",JSON.stringify(kino))  
    
}
ST.prototype.getSorage = function (){
 let kino;
    if (localStorage.getItem("kino")===null)
    {  
         kino = [];
        
        
    }
    else
    {
        kino= JSON.parse(localStorage.getItem("kino"));
       
       }
       return kino;

}

ST.prototype.deleteFilm= function(e){
   
    let kino= this.getSorage();
   
    kino.forEach(function (k) {
        console.log(k.title);
        if(e===k.title){
          
          kino.splice(kino.indexOf(k),1)
        }

        
    }); 
    localStorage.setItem("kino",JSON.stringify(kino)) ;
    
}

ST.prototype.deleteAll =function (){
    console.log("silindi");
    localStorage.removeItem("kino");
}*/