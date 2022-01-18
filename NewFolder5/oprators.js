//math
//assigment
//comparison
//logical


//math
// + - ++ -- * / % **
   

//assigment
//= += -= *= /= 


//comparison
//=== < > <= >= != == !== 


//logical
// &&  || !


console.log((100+0/0));  //NaN


let s=10;
s+5;
console.log(s);  //10


let x=100;
console.log(x++);   //100


let y=100;
console.log(++y);   //101



let g1=19;
let g2=20;
console.log((g1+g2)/2);  //avg



//type conversion

//Number()
//String()
//Boolean()
//parsInt

let num = prompt("enter number:");   //20
console.log(num+10);               //2010
console.log(Number(num)+10);      //30




console.log(5 + null);            //5
console.log(Number(null));      //0
console.log("5" + null);          //5null
console.log("6" - "5" );        //1
console.log("6" + 1 );        //61


let number1="1" + 1;   //11
number1 -= 1;      //10 
number1 += 1;      //111
console.log(number1);


let flt="13.5";
console.log(parseInt(flt));    //13
console.log(parseFloat(flt));    //13.5