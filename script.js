function getHumanChoice(){
    let choice= prompt("Enter Rock, Paper, or Scissors: ");

    if(choice === null) {
        return "No Choice Made";
    }
    else if(choice === "Rock" || choice === "Paper" || choice === "Scissors") {
        return choice;
    }
    else {
        return "Invalid Choice";
    }
}



function getComputerChoice(){
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(3);
    let outcome = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);

    if(outcome===1){
        return "Rock";
    }
    else if(outcome===2){
        return "Paper";
    }
    else if(outcome===3){
        return "Scissors";
    }
    else{
        return "Invalid Choice";
    };

}



function playRound(){
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    console.log(humanChoice, computerChoice);

    if(humanChoice === "No Choice Made" || computerChoice === "Invalid Choice") {
        
        console.log("Game Cancelled")
        return "Game Cancelled";
    }

    if(humanChoice === computerChoice) {
        console.log("It's a tie!");
        return "It's a tie!";
    }
    else if((humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissors" && computerChoice === "Paper")) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return `You win! ${humanChoice} beats ${computerChoice}`;
    }
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}

let computerCounter =0;
let humanCounter = 0;
for( i= 0; i < 5; i++){
    
    playRound(); // Call the function to play a round of Rock, Paper, Scissors
    if(playRound().includes("win")) {
        humanCounter++;
    } else if(playRound().includes("lose")) {
        computerCounter++;
    }
    console.log('computer score: '+computerCounter,'human score: ' + humanCounter);
}
