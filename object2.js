const tinderUser = new Object() //-->singleton based

// console.log(tinderUser)

const tinderUser2 = {}

// console.log(tinderUser2)

tinderUser.name = "ajay"
tinderUser.email = "ajayk@goole.com"
tinderUser.age = "23"


// console.log(tinderUser)

const obj = {
    name :"vijay",
    email:"vijay@.in",
    
}


const obj2 = {
    name :"isdhu",
    email:"ishujay@.in"
}
const obj3 = {
    name :"deepak",
    email:"deepak@.in"
}

const obj6 = Object.assign({},{obj},{obj2})

const obj5 = {...obj, ...obj2, ...obj3}
// console.log(obj6)

const user = [
    {
        id:1,
        username:"A"
    },
    {
        id:1,
        username:"B"
    },
    {
        id:1,
        username:"C"
    }
]


user[1].username
// console.log(user[1].username)

// console.log(Object.keys(tinderUser))


//Destructuring of object

const jsonObj ={
    course:"JavaScript",
    fee:"2000",
    instructor:"ajay"
}


const { instructor:inst,fee,course }= jsonObj
console.log(inst,fee,course)