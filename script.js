console.log("hello player!");
const choice = ["rock" ,"paper","scissor"];
let userPoint =0;
let cpuPoint = 0 ;


const checkMatch = (userChoicetemp) => {
    let flag=0;
    for(let i=0;i<choice.length;i++){

    
        
        if(userChoicetemp === choice[i] ){
            flag=1;
        }
    }
    if (flag ===0){
        userChoicetemp = (prompt("Please type correctly!Try again.rock,paper,scissor: ")).trim().toLowerCase();
        checkMatch(userChoicetemp);
    }
    return userChoicetemp;
};


const game = (userChoice,cpuChoice) => {
    if(userChoice === cpuChoice){
        userPoint++;
        cpuPoint++;
        console.log(`You drew ${userChoice} and the cpu drew ${cpuChoice}`);
        console.log("Draw");
        console.log(`You: ${userPoint}-${cpuPoint} : CPU`)
    }
    else if(userChoice==="paper" &&cpuChoice==="rock" 
            || userChoice==="scissor"&& cpuChoice==="paper"
            || userChoice==="rock" && cpuChoice==="scissor"){
                userPoint++;
                console.log(`You drew ${userChoice} and the cpu drew ${cpuChoice}`);
                console.log("You  Win");
                console.log(`You: ${userPoint}-${cpuPoint} : CPU`)
            }
    else{
        cpuPoint++;
        console.log(`You drew ${userChoice} and the cpu drew ${cpuChoice}`);
        console.log("CPU Win");
        console.log(`You : ${userPoint}-${cpuPoint} : CPU`)
    }
};

const nRounds = (n)=> {for(let i=1;i<n+1;i++){
    console.log(`Round ${i}`);
    
    let userChoice= (prompt("rock,paper,scissor: ")).trim().toLowerCase();
    userChoice=checkMatch(userChoice);

    const cpuChoice = choice[Math.floor(Math.random()*3)]; 
    game(userChoice,cpuChoice);
    }
};
let n = parseInt(prompt("How many round do you wanna play: "));
nRounds(n);
if(userPoint == cpuPoint){
    alert(`Battle of the luckiests.\nYou : ${userPoint}-${cpuPoint} : CPU`)

}
else if(userPoint> cpuPoint){
    alert(`Congratulation! you won the ai with ${userPoint-cpuPoint} pts ahead.\nYou : ${userPoint}-${cpuPoint} : CPU`)

}
else{
    alert(`Womp womp! you lose to a cpu  with ${cpuPoint-userPoint} pts below LMAOO.\nYou : ${userPoint}-${cpuPoint} : CPU`)

}
 

