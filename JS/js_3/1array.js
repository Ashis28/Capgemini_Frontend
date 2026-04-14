let arr = ["apple", "banana", "mango"];
let result = arr.join("-");

console.log(result);
console.log(typeof(result))

//2. sorting an array
var arr1 = [30,20,11,9]
arr1 = arr1.sort((a,b)=>a-b);
console.log(arr1);

//3. flat
var arr2d = [[1,2,3,4] , [5,6,3,6]]
console.log("Flatten array is ",arr2d.flat())

//4. reverse an array
console.log("Reverse an array ",arr1.reverse())