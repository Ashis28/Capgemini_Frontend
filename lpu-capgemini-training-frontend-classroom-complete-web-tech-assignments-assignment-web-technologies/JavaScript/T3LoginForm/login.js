let loginFailure;
function validateUserName(name,userName){
    let p1 = document.getElementById("userWarning")
    if(name.length<3 || name.length>25){
        p1.style.display = "block";
        loginFailure = true;
        userName.style.border = "2px solid red";
    }
    else{
        p1.style.display = "none";
        userName.style.border = "3px solid green";
    }
    console.log("user name loginFailure happend",loginFailure)
}
function validateEmail(email,emailElement){
    let emailWarning =  document.getElementById('emailWarning')
    if(!/^(?!.*\.\.)[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.(com|in)$/.test(email)){
       emailWarning.style.display = 'block';
       loginFailure = true;
       emailElement.style.border = "2px solid red";
    }
    else{
        emailWarning.style.display = 'none';
        emailElement.style.border = "3px solid green";
    }
    console.log("validateEmail loginFailure happend",loginFailure)
}
function vaildatePassword(pwd,pwdElement){
    let error = false;
    let pwdWarning1 = document.getElementById("pwdWarning1")
    if(!pwd.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/)){
        error = true;
        pwdWarning1.style.display = "block";
        loginFailure = true;
        pwdElement.style.border = "2px solid red";
    }
    else{
        pwdWarning1.style.display = 'none';
        pwdElement.style.border = "3px solid green";
    }
    console.log("Is wrong pwd ? ",error);
    console.log("valid pwd loginFailure happend",loginFailure)
    
}
function validateRePwd(pwd,rePwd,repwdElement){
    pwdWarning2 = document.getElementById("pwdWarning2");
    if(pwd !== rePwd ){
        pwdWarning2.style.display = "block";
        loginFailure = true;
        repwdElement.style.border = "2px solid red";
        console.log(pwd," ",rePwd," doesn't match");
    }
    else{
        pwdWarning2.style.display = 'none';
        repwdElement.style.border = "3px solid green";
    }
    console.log("validate repwd loginFailure happend",loginFailure)
}
function successMessage(isFailed){
    console.log("succcess Message loginFailure happend",loginFailure)
    console.log(isFailed)
    let successMsg = document.getElementById('successMsg')
    if(!isFailed){
        successMsg.style.display = 'block';
        console.log("success")
    }
    else{
        successMsg.style.display = 'none';
    }
}
function fetchData(){
    loginFailure = false;
    let userName = document.getElementById("userName")
    console.log("User Name",userName.value);
    validateUserName(userName.value,userName);

    let email = document.getElementById("email");
    console.log("Email ",email.value);
    validateEmail(email.value,email);

    let pwd = document.getElementById('pwd');
    console.log("Password ",pwd.value);
    vaildatePassword(pwd.value,pwd);

    let rePwd = document.getElementById("rePwd");
    validateRePwd(pwd.value,rePwd.value,rePwd)

    console.log("b4 success Message loginFailure happend",loginFailure)
    successMessage(loginFailure);
    console.log("fail hogya kya ",loginFailure)

}