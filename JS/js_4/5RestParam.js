//1 Rest Parameter
// function reciveValues(para1,para2,...para4){
//     console.log(arguments);
//     console.log(arguments[3]);
//     console.log(para4)
// }
// reciveValues(10,20,30,40,50)

//2 unpacking from array [Spread Operator]
let fruits1 = ['apple','banana','guava']
let fruits2 = ['kiwi','jack fruit',fruits1]
console.log(fruits2)
console.log(fruits2.flat())

let fruits_using_spread = [...fruits1,...fruits2,"Water Melon"]
console.log(fruits_using_spread)

let object1 = {
    name: "ashis",
    age: 21
};

let obj = { ...object1 };

console.log(obj);
console.log(typeof(obj))

//3 Destructuring in javascript - Array and object
let array01 = ["one piece","hunter x hunter","jjk","aot"]


var [name1,name2,name3] = array01;
console.log(name1)
console.log(name2)
console.log(name3)

//4. unpacking 1 and packing rest 3
// array destructuring with rest
var [name1,...names_of_3] = array01;
console.log(names_of_3)

//5. object destructuring
let info = {
    name : "aot",
    genere : "dark",
    rating : 9.2
}
let {name,genere,rating} = info
console.log(name)
console.log(genere)
