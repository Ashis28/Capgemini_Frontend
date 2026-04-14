
//Nested Function A function inside function
function parent(value1,value2){
    return function child(value3){
        return (value1 + value2 ) * value3;
    }
}

var ans = parent(20,30)(25);
console.log(ans);

scope
function scope(){
    var value1 = "scope outside function too";
}
scope();
// console.log(value1);

//block
if(true){
    var value = "accessibl out side the block";
}
console.log(value);