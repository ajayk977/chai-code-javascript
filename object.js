//singleton -> when a object made with constructor then object become singleton
//when it made with literals then it does not become singleton

//object literals

//object.create() //-->constructor way to make obj it become literals

 const mySym = Symbol("myKey1")

const jsUser = {
    name:"ajay ",
    [mySym]:"myKey1",
    "fullName":"ajay kumar",
    age:18,
    email:"ajayk654@.in",
    city:"panchkula",
    country:"India"
}

// console.log(jsUser.email)

// console.log(jsUser["email","age"])

// Object.freeze(jsUser)

 jsUser.email = "ajayk56t7@.com"

//  console.log(typeof jsUser[mySym])

//  console.log(jsUser)

  jsUser.hello = function(){
console.log("hello im AjayKumar");
}

//  console.log(jsUser.hello())

 //if we want refer then this.{name_var} used for this 

 jsUser.helloTwo = function(){
    console.log(`hello js User, ${this.name}`);
    }

 console.log(jsUser.helloTwo())
