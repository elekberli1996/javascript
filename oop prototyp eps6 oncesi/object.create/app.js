
const obj = {
    test1: ()=> console.log("test100"),
    test12: ()=> console.log("test12")
}

const emp = Object.create(obj);

console.log(emp);

emp.test12();

function Person(){
}

Person.prototype.test2 = function(){
     console.log("test2");
}

Person.prototype.test3 = function (){
    console.log("test3");
}

const pers = new Person();

function Employee (name,age){
    this.name=name;
    this.age= age;

}
// mirass alma  
Employee.prototype = Object.create(Person.prototype);

const e = new Employee("emin",24);

e.test3();

console.log(e);