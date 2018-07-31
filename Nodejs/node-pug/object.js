const obj = { first:"alben", sencond: "rose",third: "macy"};
const objOne = { premier:"cake", deuxieme:"fruit", troisieme:"wine"};

console.log(Object.keys(obj));
console.log(Object.keys(objOne));

console.log(Object.values(obj));
console.log(Object.values(objOne));

console.log(Object.entries(obj)); 
console.log(Object.entries(objOne)[0]);

var nameObj = {first: "Zaphod", last: "Beeblebrox"};

Object.keys(nameObj).forEach((key)=>
    console.log(key + ':'+  nameObj[key])
)

let students = {
    "john": 50,
    "paul": 60,
    "helen":80,
    "suzie": 120,
    "james":40
}
console.log(">===============================<");
scores = Object.values(students)
console.log(scores);

sum = scores.reduce((val, next) => {
    return val +next
}, 0)

console.log("|||||||||||");

console.log(sum);
nbr = Object.keys(students).length
console.log(Object.keys(students).length);
console.log(sum/nbr + " %");
console.log(">===============================<");

let passed = Object.values(students).filter( function(x){
    return x > 50
})
console.log(passed);

let passedStudents = Object.keys(students).filter(x => students[x] >= 60);

console.log(passedStudents);
