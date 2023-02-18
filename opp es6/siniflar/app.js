

class Employee {

    constructor(name,age){
        this.name=name;
        this.age= age;

    }

    show(){
        console.log(this.name,this.age);
    }



}


const emp = new Employee("emin",25);

console.log(emp);

emp.show();