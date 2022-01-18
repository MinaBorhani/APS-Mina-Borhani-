let num=[1 , -1 , 2 , 6 , 7 , 0 , -6 ];
const sumNum=num.reduce((num , sum )=> {
    return num + sum
});

console.log(sumNum);