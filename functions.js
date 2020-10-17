//function decleration
 function greet() {         //without parametres..
    console.log("this is function!");

}

function name(a ,b) {   //with parametres
    
    const add = a + b;
    console.log(add);
}
greet();
name(2342,5);




function func() {
    //let name = prompt("what is your name");
   // console.log("welcome to the website " + name);
    greet();
}

func();

let maxnr = Math.max(3423,456);

console.log(maxnr);

function max(a ,b) {
    if (a < b)
    {
        return b;
    }
    else{
        return a;
    }
}

console.log(max(45,2)) ;

