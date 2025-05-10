let playgame = confirm("shall we play rock, paper, scissors?")
if(playgame) {
    //play
    let playerchoice = prompt("please enter rock, paper or scissors.")
    if(playerchoice) {
        //chosen value is playerhand
        let playerhand = playerchoice.trim().toLowerCase()
        if(playerhand === "rock" ||playerhand === "paper"||playerhand === "scissors") {
            //continue
            let computerchoice = Math.floor(Math.random()*3 +1)
            let computerhand = computerchoice === 1 ? "rock" : computerchoice === 2 ? "paper" : "scissors";

            let result =
              playerOne === computer
                ? "Tie game!"
                : playerOne === "rock" && computer === "paper"
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : playerOne === "paper" && computer === "scissors"
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : playerOne === "scissors" && computer === "rock"
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
            alert(result);
            let playAgain = confirm("Play Again?");
            playAgain ? location.reload() : alert("Ok, thanks for playing.");
        } else {
            alert("enter valid option")
        }
    } else {
        alert("no choice was chosen :(")
    }
} else {
    alert("np! maybe another time")
}