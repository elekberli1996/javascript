//input evenleri

const filter = document.querySelector("#filter");

document.addEventListener("DOMContentLoaded",load);

function load(e){
    console.log("sayfa yuklendi")
}

//focus

filter.addEventListener("copy",run);

function run(e){
    console.log(e.type);
}

//blur focusdan cikan zaman aktif olur

//paste

//copy