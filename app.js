let userScore=0;
let compScore=0;

const choices=document.querySelectorAll('.choice');
let msg=document.querySelector('#msg'); 

const userScorePara=document.querySelector('#user-score');
const compScorePara=document.querySelector('#comp-score');

const genCompChoice=()=>{
    const options=['rock','paper','scissors'];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        msg.innerText=`You won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor='green';
        userScorePara.innerText=userScore;
    }
    else{
        compScore++;
        msg.innerText=`You lost! Your ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor='red';
        compScorePara.innerText=compScore;
    }
}

const playGame=(userChoice)=>{
    // Generate computer choice
    const compChoice=genCompChoice();
    let userWin=true;
    if(compChoice===userChoice){
        msg.innerText="Game was draw! Play again.";
        msg.style.backgroundColor='#081b31';
    }
    else{
    if(userChoice==='rock'){
        userWin= compChoice==='paper'? false: true;
    }
    else if(userChoice==='paper'){
        userWin= compChoice==='scissors'? false: true;
    }
    else{
        userWin= compChoice==='rock'? false: true;
    }
    showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        let userChoice=choice.getAttribute('id');
        playGame(userChoice);
    });
});
