// primitive
// 7 types : String, number, boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 356725632167312n //bigInt dataType



// Reference ( non primitive)
// Array, objects, Functions

const heros = ["abc", "def", "xyz"]

let myObj = {
    name : "dev",
    age : 20,

}

const myfunction = function(){
    console.log("hello dev");
    
}

console.log(typeof scoreValue);
console.log("hello");



//MEMORY++++++++++++++++++++++++

//stack(primitive) , heap(non-primitive)

let myYoutubename = "devjadoun"

let anotherName = myYoutubename
anotherName = "chaiaurcode"

console.log(anotherName);

let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "devjadoun04@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);



