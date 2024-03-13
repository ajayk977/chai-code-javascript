"use strict"// treat all JS code in newer version

// alert(3 + 3) // we are using nodejs, not browser

//.ECMA js documentation
//null => standalone abject 



// let age = 18;
// let name = "ajay";
// let sigma;
// let state;


//primitive 

//7 types :String ,Number, Boolean ,null,undefined,symbol(use to make value unique)
//BigInt

// const numberIn = 12;
// const isLoggedIn= false
// const isLoggedOut= +true

// const temperature = null
// let value;

// const id = Symbol("123")
// const another =Symbol("123")


// console.log();


// //Reference (Non primitive)

// //Array ,Object,Functions

// // const func = () =>{
// //     console.log("hello")
// //   }

//   const heros = ["superman", "batman","spiderman"]

//  let myObj = {
//     age:23,
//     name:"ajay",
//   }

//   const myFunc = function(){
//     console.log("hello")

//   }


//   console.log(typeof myFunc)



//_________________________________________________________________
//memory  used for data type
//Stack -->primitive
//Heap --->Non primitive


// let userName = "ajayKumar"

// let anotherUser = userName

// anotherUser = "vijayKumar"


// console.log(anotherUser)
// console.log(userName)

// let userOne ={
//     email :"ajayk@5678",
//     username:"ajay"
// }

// let userTwo = userOne;

// userTwo.email = "vijayKumar@789"

// console.log(userOne.email)
// console.log(userTwo.email)

// const gameName = new String("ajayKumar")

// console.log(gameName.__proto__)
// console.log(gameName.indexOf('k'))
// console.log(gameName.substring(0,4))
// console.log(gameName.trim())

// const newUrl = "https://localhost:8080/ajay%20kumar/233"
// console.log(newUrl.replace('%20','-'))


// const username = new String("jay-kumar-567")

// console.log(username.split("-"))


// const score = new Number(400)

// console.log(score.toString())
// console.log(score.toFixed(2))

// const score2 = new Number(123.905670)
// const number =1000000

// console.log(number.toLocaleString('en-UK'))

// console.log(Math.random())
// console.log(Math.random()*10)
// console.log(Math.floor(Math.random()*10)+1)

// console.log(Math.ceil(12.34))
// console.log(Math.abs(-12.34))


const min = 10
const max = 20

// console.log(Math.floor(Math.random()* (max - min +1) )+ min)

const myDate = new Date()

console.log(typeof myDate)


