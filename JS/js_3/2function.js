
let t = +"10";console.log(t)
let t1 = +"a";console.log(t1)
//1
function displayListOfStudents(){
    console.log(arguments);
}
displayListOfStudents("ashis","billa","edwin")
displayListOfStudents()

//2. undefined return type
function noreturn(){
    console.log("Nothing to return");
}
console.log(noreturn());
function afunction(){

}
console.log(afunction);
console.log(typeof(afunction))

//3. Function expresson
let functionExpression = function hello() {console.log("Hello Angular JS folks")}
console.log("Function expression " , functionExpression)
console.log("Function expression calling :" ); functionExpression()

//4. Function Expression with parameters
console.log("function expression with parameters")
let functionExpression2 = function hello(name,age) { console.log("hello",name," ur age is : ",age) };
functionExpression2("Ashh",22)

//4. Hoisting
greet()
function greet(){
    console.log("Function gets caled before its declaration")
}

//5. Arrow Function
const arrowFn = ()=>"This is angular training" + 43 + 4
console.log(arrowFn())

//6.
const arrows = ()=> 45 + +"45"
console.log(arrows());

//7. One param and one return type
const arrowFn3 = (value)=> value;
console.log(arrowFn3(10))

//8.
const arrowFn4 = (val1,val2)=>{
    console.log(val1);
    console.log(val2);
    console.log(arguments[0])  //arrow functions do not store values as arguments objects
    return val1 + val2;
}
let sum = arrowFn4(10,30);
console.log(typeof sum, sum);

let sume = arrowFn4(10);
console.log(typeof sume, sume);

//9. High order function
function highorderFun(value1,value2,callbackFunction){
    return callbackFunction(value1,value2);
}
var ans = highorderFun(10,20,(a,b)=>a+b);
console.log(ans)

//callback function 
var arr1 = [10,40,20,30,11];
console.log(arr1.sort());
console.log(arr1.sort((a,b)=>b-a));