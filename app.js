let userScore = 0;
let compScore = 0;

const clickSound = new Audio("sound/click.mp3");
const winSound = new Audio("sound/win.mp3");
const loseSound = new Audio("sound/lose.mp3");
const drawSound = new Audio("sound/draw.mp3");
const resetSound = new Audio("sound/reset.mp3");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = (compChoice) => {
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
};

const drawGame = () => {
    drawSound.play();
    msg.innerText = "Game Was Draw. play again.";
    msg.style.backgroundColor = "#081b31";
    msg.style.color = "#fff";
};

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
        winSound.play();
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You lose.";
        msg.style.backgroundColor = "red";
        loseSound.play();
    }
};


const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    


    const resetBtn = document.getElementById("reset-btn");

    resetBtn.addEventListener("click", () => {
        resetSound.play();
        userScore = 0;
        compScore = 0;
        userScorePara.innerText = userScore;
        compScorePara.innerText = compScore;
        msg.innerText = "Game Reset. Play again!";
        msg.style.backgroundColor = "#081b31";
        msg.style.color = "#fff";
    });

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);

    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        clickSound.play();
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    });
});

