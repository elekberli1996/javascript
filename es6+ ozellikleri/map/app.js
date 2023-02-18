// maplar key(anahtar)  value(deger)
let myMap =  new Map();

const key1= "emin elekberli";

const key2 = {a:2,b:3};

const key3 = () => 2 ;

myMap.set(key1,"stirng veri");

myMap.set(key2,"objct deyer");

myMap.set (key3,"function deyer");

console.log(myMap.get(key1));

console.log(myMap.get(key2));

console.log(myMap)

console.log(myMap.size);

myMap.forEach(function(value,key) {
    console.log(key,value);
    
});

const citi = new  Map();

citi.set("ankara",5);

citi.set("istanbul",15);

citi.set("adana",5);

citi.set("naxcivan",19);

console.log(citi.size);

citi.forEach(function(value,key){
    console.log(key,value);
});

for (let [key,value] of citi)
{
    console.log(key,value);
}

for (let  key of citi.keys())
{
    console.log(key);
}

for (let value of citi.values())
{
    console.log(value);
}

//arraydan map olusturmak olur mapdan aray olusturmaq olurr