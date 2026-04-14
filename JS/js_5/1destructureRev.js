// 1. Object destructuring
var obj = {
    name : "ash",
    gender : "male"
}

var dest = {...obj,gender:"chad"}
console.log(typeof(dest),dest)

// 2. Object destructuring methods
var mix = [[1,2,3],[4,5,6],dest]
var {...arr1} = {...mix}
console.log(arr1)

var [[a,b,c],[d,e,f],{name,gender}] = mix
console.log(name)


// 3. destructure with function
var mix2 = [[1,2,3],[4,5,6],{name:"ash",edu:{type:"school"}},(a,b)=>a+b]
// console.log(mix2);
var [[a,b,c],[d,e,f],{name,edu:{type}},fn] = mix2;
console.log(fn(2,3))
// console.log(edu)
console.log(type)

