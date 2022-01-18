//Set timeout


// setTimeout(() => {
//    console.log("hello"); 
// }, 2000);




//setInterval

// setInterval(() => {
//     console.log("Hello Word");
// }, 2000);



let i=0;
setInterval(() => {
   console.log(i++);
   if (i === 5) {
       clearInterval(stop);
   } 
}, 2000);