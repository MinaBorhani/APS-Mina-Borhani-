//array


let num=[1,2,3,4,5,6,7,8,9];



//  console.log(num[0]);   //1


//  //slice
//  console.log(num.slice(2));        //[3, 4, 5, 6,7, 8, 9]
//  console.log(num.slice(2,3));      //[ 3 ]
//  console.log(num.slice(-2));       //[ 8, 9 ]
//  console.log(num.slice(-1)[0]);       //9 number
//  console.log(num.slice(2,-1));       //[ 3, 4, 5, 6, 7, 8 ]
//  console.log(num.slice());       //[1, 2, 3, 4, 5,6, 7, 8, 9]
// console.log([...num]);              //[1, 2, 3, 4, 5,6, 7, 8, 9]


// let str ="hello"
// console.log([...str]);


//splice
// console.log(num.splice(2 , 3));    //[ 3, 4, 5 ]
// // console.log(num.splice(Index , tedad-cut));
// console.log(num.splice(-1));      //[ 9 ]


//reverse
// console.log(num.reverse());    //[9, 8, 7, 6, 5,4, 3, 2, 1]



// let num2=[10,11];
// console.log([...num , num2]);     //[ 9, 8, 7, 6, 5, 4, 3, 2, 1, [ 10, 11 ] ]



//map , filter  , some , 

// for (const iterator of num) {
//     console.log(iterator);
// }


// num.forEach((num , i) => {
//     console.log(num , i);    //value  index
// });




//filter
// let x= num.filter(function(number){
//     return number>3;
// });                                    //[ 4, 5, 6, 7, 8, 9 ]


// console.log(x);



//map
// let n=num.map((element) => element * 2);
// console.log(n);



//every
// let a=num.every(ele => ele > 5)
// console.log(a);                    //false




//find
// let b=num.find(el => el >4 );
// console.log(b);             //5