// all js code is valid in ts as typescript is a superset of js
/* function log(msg){
    console.log(msg);
}
let mes = "Hi, Welcome";

log(mes);
 */
// Declaring variables

/* function doSomething() {
    for(let i=0; i<6; i++){
        console.log(i);
    }
    console.log("Finally", +i);
}
doSomething() */

/* let count: number = 5; */
//types
/*
number
string
array number[] - string[]
any*/

//enum


/* let message: string;

message. */

//Interfavr
let drwaPoint= (point) => {

}
/* 
drawPoint({
    x:1,
    y:2,
    z:3
}) */


//inteface
interface Point{
    x:number,
    y:number
}

let drawPoint= (point:Point){
    //...
}

drawPoint({
    x:3,
    y: 2
})
