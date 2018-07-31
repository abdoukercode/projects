
// First Method
let reSlash = /^matchthis$/i ; 

// second method
let reConstructor = new RegExp("^matchthis$", "i");

let pattern = "^matchthis$";
let flags = "i";

reConstructor = new RegExp(pattern, flags);

console.log(reConstructor.test(" MATCHTHIS"));

let theSpecialChars = "[({})]\\^.|?*+"
console.log(theSpecialChars);

let phoneNumber = "+46-702-11 12 13";
let isValidNumber = phoneNumber.match(/^[\+\d\-\s]+$/)
console.log(`${phoneNumber } is ${isValidNumber ? '😆 valid 😁' : 'INVALID 😌😡'}`);

let text = " david is writing code. david is in a video. david likes regex";

let extractDavid = text.match(/david/g);

console.log(`there are ${extractDavid.length} occurrences in ' ${text} '`);

let replaceDavid = text.replace(/david/g , "devManiac");
console.log(`'Repword -DevManiac': ${replaceDavid}`);
