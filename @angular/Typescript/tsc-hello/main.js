// all js code is valid in ts as typescript is a superset of js
/* function log(msg){
    console.log(msg);
}
let mes = "Hi, Welcome";

log(mes);
 */
// Declaring variables
function doSomething() {
    for (var i = 0; i < 6; i++) {
        console.log(i);
    }
    console.log("Finally", +i);
}
doSomething();
