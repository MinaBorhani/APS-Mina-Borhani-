const exam = [80 , 20 , 90 ,30 ,40, 70, 10 ,50 ];
let ispass = exam.every(num => num > 70);
console.log("is pass:", ispass);