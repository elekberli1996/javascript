//spread operatoru
const langs =["a","b","c","d"];

console.log(...langs);


const lang2 = ["1","2",...langs];

console.log(lang2);

const add = (a,b,c) => console.log(a+b+c);

const numbers = [100,22,3];

add(...numbers);





