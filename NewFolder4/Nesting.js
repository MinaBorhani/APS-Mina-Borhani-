// let pass="mina";
// let pass="mina 1377";
let pass="mina1377";
if(pass.length>6){
    if(pass.indexOf(" ")===-1){
        console.log("you'r password is strong");
    }else{
        console.log("you' password have space");
    }
}else{
    console.log("you' password is not!");
}