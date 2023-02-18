

 function Person(name,age){
    this.name=name;
    this.age=age;
    
 }

 Person.prototype.showInfo= function(){
        console.log("ad:"+this.name+"yas:"+this.age);
    }
    const per = new Person("aaa",22);

    console.log(per);

 function Employee(name,age,salary){
    //this.name=name;
   /// this.age=age;
   Person.call(this,name,age);
    this.salary=salary;
 }


 
 Employee.prototype= Object.create(Person.prototype);

 Employee.prototype.showInfo= function () // override iptal etme
{
    console.log(this.salary);
}
 const emp = new Employee("emin",25,5000);

 console.log(emp);

 emp.showInfo();

 emp.toString();

 per.showInfo()