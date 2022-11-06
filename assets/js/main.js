// Platzhalter für den Score
let playerScore = 0;
let computerScore = 0;

// Platzhalter für Player und Computer
let player = "";
let computer = "";

// Rundenanzahl Platzhalter
let numberOfRounds = 0;
let numberOfRoundsPlayed = 0;

// Zugriff auf rock, paper, scissor buttons
const choiceButtons = document.querySelectorAll(".choiceButtons");
//Zugriff auf das SPAN scorePlay und scoreComputer
const scorePlayer = document.getElementById("scorePlayer");
const scoreComputer = document.getElementById("scoreComputer");
// Ergebnisausgabe
const outputResult = document.getElementById("output");
// Zugriff auf verbleibende Rundenanzahl
const roundsLeft = document.getElementById("roundsLeft");
// Zugriff auf ausgewählte Rundenanzahl
const choosenNumberOfRounds = document.getElementById("choosenNumberOfRounds");
// Zugriff auf reset button 
const resetButton = document.getElementById("resetButton");


// Funktion für den Vergleich von Player vs Comp
compareGame = (player, computer) => {

    // Hinweis sobald die Rundenanzahl bei 0 ist.
    if (numberOfRoundsPlayed === 0) {
        return alert("Starte ein neues Spiel");
    }

    // Bei Unentschieden
    if (player === computer) {
        outputResult.innerHTML = `It was a draw! You both chose ${player}`;
        return;
    }

    // if if else else if labyrinth
    if (player === "Rock") {
        if (computer === "Scissors") {
            playerScore++;
            scorePlayer.innerHTML = playerScore;
            outputResult.innerHTML = `${player}(user) beats ${computer}(comp). You win!`;
        } else {
            computerScore++;
            scoreComputer.innerHTML = computerScore;
            outputResult.innerHTML = `${computer}(comp) beats ${player}(user). You lose!`;
        }
    } else if (player === "Paper") {
        if (computer === "Rock") {
            playerScore++;
            scorePlayer.innerHTML = playerScore;
            outputResult.innerHTML = `${player}(user) beats ${computer}(comp). You win!`;
        } else {
            computerScore++;
            scoreComputer.innerHTML = computerScore;
            outputResult.innerHTML = `${computer}(comp) beats ${player}(user). You lose!`;
        }
    } else {
        if (computer === "Paper") {
            playerScore++;
            scorePlayer.innerHTML = playerScore;
            outputResult.innerHTML = `${player}(user) beats ${computer}(comp). You win!`;
        } else {
            computerScore++;
            scoreComputer.innerHTML = computerScore;
            outputResult.innerHTML = `${computer}(comp) beats ${player}(user). You lose!`;
        }
    }
    // Rundenzähler
    if (numberOfRoundsPlayed > 0) {
        numberOfRoundsPlayed--;
        roundsLeft.innerHTML = numberOfRoundsPlayed;
    }
};

// RUNDENANZAHL VALIDIEREN
const chooseRounds = () => {
    // Rundenanzahl auswählen
    if (document.getElementById("rounds5").checked) {
        numberOfRounds = 5;
        choosenNumberOfRounds.innerHTML = numberOfRounds;

        numberOfRoundsPlayed = 5;
        roundsLeft.innerHTML = numberOfRoundsPlayed;

    } else if (document.getElementById("rounds10").checked) {
        numberOfRounds = 10;
        choosenNumberOfRounds.innerHTML = numberOfRounds;

        numberOfRoundsPlayed = 10;
        roundsLeft.innerHTML = numberOfRoundsPlayed;

    } else if (document.getElementById("rounds15").checked) {
        numberOfRounds = 15;
        choosenNumberOfRounds.innerHTML = numberOfRounds;

        numberOfRoundsPlayed = 15;
        roundsLeft.innerHTML = numberOfRoundsPlayed;

    } else if (document.getElementById("rounds20").checked) {
        numberOfRounds = 20;
        choosenNumberOfRounds.innerHTML = numberOfRounds;

        numberOfRoundsPlayed = 20;
        roundsLeft.innerHTML = numberOfRoundsPlayed;
    } else {
        console.log("kaputt");
    }
};

// SETZE JEDEM BUTTON EIN EVENTLISTENER
const getPlayerChoice = choiceButtons.forEach(button => button.addEventListener("click", () => {
    // Bei Klick führe Funktion aus:

    // 1. Wahl des Spielers als Wert
    player = button.textContent;
    // console.log(player);

    // 2. Wahl des Computers durch Zufall
    const choicesArray = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    computer = choicesArray[randomNumber];
    // console.log(computer);

    if (!numberOfRounds == 0) {
        // Rundenauswahl verschwindet, Rundenzähler erscheint
        document.getElementById("radioContainer").style.display = "none";
        document.getElementById("roundCount").style.display = "block";
    } else {
        return alert("Bitte Auswahl treffen!");
    };

    // Übergabe der Parameter aus 1. Spieler und 2. Computer an die Funktion compareGame
    compareGame(player, computer);
    // console.log(player);
    // console.log(computer);

    // Auswertung
    if (numberOfRoundsPlayed == 0) {
        if (playerScore === computerScore) {
            outputResult.innerHTML = "Draw! No one has won.";
        } else if (playerScore > computerScore) {
            outputResult.innerHTML = "Super! You have won!";
        } else if (playerScore < computerScore) {
            outputResult.innerHTML = "You have lost. The machines are taking over the world.";
        }
    }
}));

// RESET GAME
resetButton.addEventListener("click", () => {

    document.getElementById("radioContainer").style.display = "grid";
    document.getElementById("roundCount").style.display = "none";

    playerScore = 0;
    computerScore = 0;
    numberOfRounds = 0;
    numberOfRoundsPlayed = 0;

    scorePlayer.innerHTML = "0";
    scoreComputer.innerHTML = "0";
    outputResult.innerHTML = `Let's Play`;
});


