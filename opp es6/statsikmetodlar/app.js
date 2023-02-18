// statik metodlar
// kullanmak icin obje yaratkaq ucun etiyac olmur

class Mathr {

    static cube(x){
        console.log(x*x*x);
    }
    sqrt (y){
        console.log(y*y);
    }
}

Mathr.cube(4) //calisir static oldugu icin
//Mathr.sqrt(22);// calismaz static deil

const math = new Mathr();

//math.cube(3); // calismaz static oldugu icin
math.sqrt(8); //calisir static deil