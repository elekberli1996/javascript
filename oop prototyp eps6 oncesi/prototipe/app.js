// javascriptin nfarki prototip tapanli dildir
const object = new Object();

const object2 = new Object();
object.name="emin";

console.log(object2);

function Employee(name,age){
    this.name=name;
    this.age=age;
   
}

const emp = new Employee("emin",23);

const emp2 = new Employee("evez",36)

Employee.prototype.show = function () {
    console.log(this.name,this.age);
} 

//  yeni prototip eklemek

console.log(emp);//  0605301412

emp.show();