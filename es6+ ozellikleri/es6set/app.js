//setler 
//1 deyeri sadecce 1 defat tasir

const myset = new Set();

myset.add(100);
myset.add(100);
myset.add(1);

console.log(myset);

const myset2 = new Set([1,2,200,200]);

console.log(myset2);

console.log(myset.size);

console.log(myset.has(100));

myset.delete(1);

console.log(myset);

myset2.forEach(function(e) {

    console.log(e);
    
});

for (let e of myset2){
    console.log(e);
}

const aray = Array.from(myset2);

console.log(aray);