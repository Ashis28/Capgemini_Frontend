let computerBallingResult  = []
let userBallingResult = []
var usrWinCnt = 0;
var compWinCnt = 0;

function displayBallHistory(prevBalls){
    var ul = document.getElementById("ballHistory");
    ul.innerHTML = 'Ball History';
    for(var ball of prevBalls){
        var li = document.createElement("li");
        li.textContent = ball;
        ul.appendChild(li);
    }
}

function showWinMsg(batHit,ballHit){
    var winStatus = document.getElementById('winStatus');
    if(batHit==ballHit){
        winStatus.innerHTML="OUT";
    }
    else{
        winStatus.innerHTML = "NOT OUT";
    }
}
function startMatch(){
    
    var whoPlaying = document.getElementById('whoPlaying')
   
    var playerSelect = document.getElementById("playerSelect");
    var batting = document.getElementById('batting')
    var balling = document.getElementById('balling')

    var userInput = document.getElementById('userInput')
    if(userInput){
        var userInp = userInput.value;
    }
    else{
        console.log("No Input");
    }

    if(playerSelect.value.toLowerCase() == 1){
        whoPlaying.innerText = '🎮 Currently Batting: YOU'

        //when i am batting
        //computer generate the random
        var computerRandom = Math.floor(Math.random() * 7);
        balling.textContent = computerRandom;

        //mine will be userInput
        if(userInp>=0 && userInp<=6){
            document.getElementById('errorMSG').style.display = 'none';
            
            batting.textContent = userInp;
            computerBallingResult.push(computerRandom);
            showWinMsg(userInp,computerRandom);
            if(userInp==computerRandom){
                compWinCnt++;
                // winCnt.innerHTML = 'winCount :'+compWinCnt+ ' computer took '+computerBallingResult.length+' tries';
            }
            displayBallHistory(computerBallingResult);
            var winCnt = document.getElementById('winCnt');
            winCnt.innerHTML = 'winCount :'+compWinCnt;
        }
        else{
            document.getElementById('errorMSG').style.display = 'block';
        }
    }
    else{
        whoPlaying.innerText = '🤖 Currently Batting: COMPUTER'
        //user will input the value now
        var computerRandom = Math.floor(Math.random()*7);
        batting.textContent = computerRandom;
        
        document.getElementById('errorMSG').style.display = 'none';
        
        balling.textContent = userInp;
        userBallingResult.push(userInp);
        showWinMsg(userInp,computerRandom);
        displayBallHistory(userBallingResult);

        if(userInp==computerRandom){
            usrWinCnt++;
            // winCnt.innerHTML = 'winCount :'+usrWinCnt+ ' u took '+userBallingResult.length+' tries';
        }
        var winCnt = document.getElementById('winCnt');
        winCnt.innerHTML = 'winCount :'+usrWinCnt;
        }
    
    

}

function clearHISTORY(){
    computerBallingResult = []
    userBallingResult = []
    displayBallHistory([])
    usrWinCnt = 0;
    compWinCnt = 0;
}