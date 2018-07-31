const Direction = {
  UP: "UP",
  Down: "Down",
  LEFT: "LEFT",
  RIGHT: "RIGHT"
};

function sayDirection(direction) {
  switch (direction) {
    case Direction.UP:
      console.log("We goin up!");
      break;
    case Direction.DOWN:
      console.log("We goin DOWN!");
      break;
    case Direction.LEFT:
      console.log("We goin LEFT!");
      break;
    case Direction.RIGHT:
      console.log("We goin RIGHT!");
      break;
    default:
      console.log("Not a direction");
  }
}

//sayDirection("right");

// Objet Destructuring
const person = {
  name: "alben",
  age: "10",
  gender: "Male"
};

let { age, name, gender = "Unknown" } = person;
//console.log(`his  name is ${name} and he's ${age} `);

function printData({ name, age }) {
  //console.log(`his  name is ${name} and he's ${age} `);
}

// Array Destructuring
let numbers = [1, 2, 3, 4, 5];

let [one, two, three] = numbers;

//console.log(one, two, three);

// default Value
const result = 0 || 40;

//console.log(result);

// fill

let myArray = ["meat", "egg", "butter"];
myArray.fill("sugar");
myArray.fill({
  name: "rose",
  job: "student"
});
//console.log(myArray);

// Join method

const names = ["dom", "nick", "Ann"];
const newNames = names.join(" 😝  ");
//console.log(newNames);
// get mouse position

window.addEventListener("mousemove", e => {
  //console.log(`x: ${e.x} , Y: ${e.y}`);
  let X = document.getElementById("x-value");
  let Y = document.getElementById("y-value");

  X.textContent = e.x;
  Y.textContent = e.y;
});

const asyncResult =   () => {
  return new Promise((resolve, reject) => {
    resolve("hey all went well");
    reject("uhmm, things went bad !");
  });
};
//asyncResult().then(res=>console.log(res))

// console.log(asyncResult());


const async2 = async ()=> {
   let res = await asyncResult();
   console.log(res);
}

async2();
