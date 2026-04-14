function call1(callbackFun){
    console.log("Call1 initiaated");
    // callbackFun(call1);
    callbackFun();
}

function call2(callbackFun){
    console.log("Call2 initiated");
    // callbackFun(call1);
    callbackFun();
}

call1(function(){
    call2(function(){
        call1(function(){
            call2(function(){
                console.log("Callback hell");
            })
        })
    })
})