const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  const startGame = () => {
    const playButton = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playButton.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");

    const computerOptions = ["rock", "paper", "scissors"];

    //add event listeners to all the buttons
    options.forEach((option) => {
      option.addEventListener("click", function () {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        console.log(computerChoice);

        compareHands(this.textContent, computerChoice);

        //Update Images
        playerHand.src = `./assets/${this.textContent}.png`;
      });
    });
  };

  //Update the scores.
  const updateScore = () => {
    const pScore = document.querySelector(".player-score p");
    const cScore = document.querySelector(".computer-score p");
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
  };

  //Update the scores.
  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
    } else if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        playerScore++;
      } else {
        winner.textContent = "Computer Wins";
        copmuterScore++;
      }
    } else if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        winner.textContent = "Player Wins";
        playerScore++;
      } else {
        winner.textContent = "Computer Wins";
        computerScore++;
      }
    } else {
      if (computerChoice === "paper") {
        winner.textContent = "Player Wins";
        playerScore++;
      } else {
        winner.textContent = "Computer Wins";
        computerScore++;
      }
    }
    updateScore();
  };

  //start the game
  startGame();
  playMatch();
};

//start the game
game();
