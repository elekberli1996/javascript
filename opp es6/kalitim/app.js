

class Person {
     
    constructor (name,age){
        this.name= name;
        this.age= age;

    }

    showInfo(){
        console.log(this.name,this.age);
    }
}

class Employee extends Person{  // extends ile miras alinir
     
    constructor (name,age,salary)
    {
        super(name,age);  // super sozu ile calli evez edir personan cal edir
        this.salary=salary;
    }
}

const emp = new Employee("emin",26,5000);
emp.showInfo();