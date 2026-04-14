//1multipleCallback functions

// function calculator(val1,val2,callbackFunction){
//     return callbackFunction(val1,val2);
// }

// var sum1 = calculator(10,20,(a,b)=>a+b);
// var diff1 = calculator(10,20,(a,b)=>a-b);
// var mul1 = calculator(10,20,(a,b)=>a*b);
// var div1 = calculator(10,20,(a,b)=>a/b);
// var mod1 = calculator(10,20,(a,b)=>a%b);

// console.log(sum1,diff1,mul1,div1,mod1);

//calling all of them in one go
function calculator(val1,val2,callbackFunction){
    return callbackFunction(val1,val2);
}

function all2Gether(val1,val2,callbackFunction){
    var sum1 = callbackFunction(val1,val2,(val1,val2)=>val1+val2);
    var diff1 = callbackFunction(val1,val2,(val1,val2)=>val1-val2);
    var mul1 = callbackFunction(val1,val2,(val1,val2)=>val1*val2);
    var div1 = callbackFunction(val1,val2,(val1,val2)=>val1/val2);
    var mod1 = callbackFunction(val1,val2,(val1,val2)=>val1%val2);

    console.log(sum1,diff1,mul1,div1,mod1);
}
all2Gether(10,20,calculator)


