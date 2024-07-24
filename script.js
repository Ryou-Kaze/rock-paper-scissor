const choice = ["🗿" , "📃" , "✂️"]
let i=1;

let userChoice=0;
let cpuChoice=0;
let userScore =0;
let cpuScore =0;
const userScoreDisplay = document.querySelector('#userScore')
const cpuScoreDisplay = document.querySelector('#cpuScore')
const roundNum = document.querySelector('#roundNum');
const buttonSelect = document.querySelectorAll('.choice button');
const userChoiceDisplay = document.querySelector('#userChoiceDisplay');
const userChoiceDisplayCont = document.querySelector('#userChoiceDisplayCont')
const cpuChoiceDisplayCont = document.querySelector('#cpuChoiceDisplayCont')
const userStatus = document.querySelector('#userStatus');
const cpuStatus = document.querySelector('#cpuStatus');
const cpuChoiceDisplay = document.querySelector('#cpuChoiceDisplay');

buttonSelect.forEach((button) => {
    button.addEventListener('click', () =>{
        userChoice= button.getAttribute('id');
        userChoiceDisplay.textContent=userChoice;
        userStatus.textContent="You CHOOSE: ";  
    });
});



let n = parseInt(prompt("Enter how many round you want to play:"));

const userInput = ()=>{
    userStatus.textContent="Press the button to attack: ";
    cpuStatus.textContent="thinking...";

}

const cpuTurn = () =>{
    cpuChoice = choice[Math.floor(Math.random()*2)];
    cpuStatus.textContent="CPU CHOOSE: "; 
    cpuChoiceDisplay.textContent=cpuChoice;
    if(userChoice === "📃" && cpuChoice === "📃"
       ||userChoice === "🗿" && cpuChoice === "🗿"
       || userChoice === "✂️" && cpuChoice === "✂️"
    ){

        userScore++;
        userScoreDisplay.textContent=userScore;
        cpuScore++;
        cpuScoreDisplay.textContent=cpuScore;

    }
    else if(userChoice === "🗿" && cpuChoice === "✂️"
            ||userChoice === "📃" && cpuChoice === "🗿"
            ||userChoice === "✂️" && cpuChoice === "📃"
    ){
        userScore++;
        userScoreDisplay.textContent=userScore;
    }
    else{
        cpuScore++;
        cpuScoreDisplay.textContent=cpuScore;
    }
    


}

const endGame =() => {
    if (userScore<cpuScore){
        alert("you lose");
    }
    else if (cpuScore<userScore){
        alert("you win");
    }
    else{
        alert("draw");
    }
}


const nround = () =>{
    roundNum.textContent=i;
    userInput();
    let roundInterval = setInterval(() => {

        
        
        setTimeout(()=>{

            i++;
            roundNum.textContent=i;
            userChoiceDisplay.textContent="";
            cpuChoiceDisplay.textContent="";
            cpuStatus.textContent="thinking...";
            userInput();
        },1000);
        if (i == n){
            setTimeout(()=>{      
                let iDis=i-1;
                roundNum.textContent=iDis;     
                userChoiceDisplayCont.remove();
                cpuChoiceDisplayCont.remove();
                endGame();
                let answer=prompt('Play again?');
                if((answer.trim()).toLowerCase() == "yes"){
                    location.reload();
                }

            },1000)
            clearInterval(roundInterval);

        }
        cpuTurn();

    },5000);


    
};



nround();
