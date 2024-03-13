//array

// let array = []
const myArray = [1,2,3,4,5];

// console.log("o",myArray);

//  console.log( "b",myArray.slice(1,3));

 const myArray1 = myArray
//  console.log("c",myArray1.splice(1,3));
 
//  console.log(myArray);


const marble_heroes = ["spiderman","ironman","hulk"]

const Dc_heroes = ["batman","superman"]

// marble_heroes.push(Dc_heroes)
// console.log(marble_heroes);
// console.log(marble_heroes[3][0]);

const new_array = marble_heroes.concat(Dc_heroes)
// console.log(new_array);


const new_array1 = [...marble_heroes, ...Dc_heroes]
// console.log(new_array1);


const another_array = [1,3,4,[1,4],5,[3,6,[4,5,6,[6,9]]]]
// console.log(another_array);
const another_array1 = another_array.flat(Infinity)
// console.log(another_array1);

console.log(Array.isArray("ajay"))
console.log(Array.from("ajay"))
console.log(Array.from({name:"ajay"})) //interesting case

let num =1
let num2 = 34
let num3 = 98

console.log(Array.of(num,num2,num3))
