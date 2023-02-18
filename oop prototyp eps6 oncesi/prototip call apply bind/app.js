
const obj1 = { a:10,b:20};
const obj2 = { a:30,b:40};

function topla(arg1,arg2){
    console.log(this.a+this.b+arg1+arg2);
}

topla(22,22);
// calin yapisi funksyonu baska objeye baglamak
topla.call(obj1,22,22);
//apply yapisi ayni islemi apar
topla.apply(obj2,[22,22]);

// bind ayni islemi yapar fakat kopya fonsyon yaratir fakat yapisi asagidaki kimi

function numune(ar1,ar2){
    return ar1+ar2+this.a+this.b
}
const copy = numune.bind(obj1);

console.log(copy(22,22));