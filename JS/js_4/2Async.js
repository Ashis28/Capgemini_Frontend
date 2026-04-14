// setInterval(()=>{console.log("hello")},3000)


// var count = 1;
// let interval01 = setInterval(()=>{
//     console.log("Synchronous");
//     count++;
//     if(count===6){
//         clearInterval(interval01);
//     }
// },2000);


// setTimeout(()=>{console.log("Hello")},2000);


//3.promise
//resolve , request are two callback method here;
// let promise = new Promise((resolve,request)=>{   
// })
// console.log(promise);

//4.request
// let promise = new Promise((resolve,request)=>{
//     resolve("This promise is resolved")
// })
// console.log(promise);

//5.reject
// let promise = new Promise((resolve,request)=>{
//     request("This is rejected")
// })
// console.log(promise);

//6.then
// let promise = new Promise((resolve,request)=>{
//     resolve("This promise is resolved")
// })
// promise.then((data)=>console.log(data))

//7.catch
// let promise = new Promise((resolve,rejected)=>{
//     rejected("aiaiai errrorr..")
// })

// promise.then((data)=>console.log(data)).catch(()=>console.log("Exception mannn"));

//8. finally
let promise = new Promise((resolve,rejected)=>{
    rejected("aiaiai errrorr..")
})
let finalFun = ()=>console.log("finally executed whatever happens");
promise.then((data)=>console.log(data)).catch((errorMessage)=>console.log("Exception mannn")).finally(finalFun);