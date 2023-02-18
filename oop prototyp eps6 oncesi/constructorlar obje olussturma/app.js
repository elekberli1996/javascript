//conustructor yapici metodlar



const emp3 ={  // objesct literal
    name:"ilkane",
    age:31
}


 function Employee (name,age,salary) {

    //constructor yapici fonksyon
   
    this.name=name;
    this.age=age;
     this.salary=salary;
     console.log(this);
     this.showinfos= function (){
        console.log(this.name);
     }
 }

 const emp = new Employee("emin",27,1000);

 const emp2 = new Employee("evez",31,1000);
 
 console.log(emp2);

 console.log(emp3);

 emp.showinfos();

 

