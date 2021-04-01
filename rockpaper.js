const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playbutton = document.querySelector('.introbutton');
        const introscreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playbutton.addEventListener("click", () => {
            introscreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    //play match
    const playmatch = () => {
        const option = document.querySelectorAll('.option button');
        const playerhand = document.querySelector('.player-hand');
        const computerhand = document.querySelector('.computer-hand');

        const computerOptions = ["rock", "paper", "scissors"];

        option.forEach(option => {
            //don't use arrow function in the below sentence because of the binding problem
            option.addEventListener("click", function () {
                // console.log(this);
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                //we have to call the compare hands function here
                compareHands(this.textContent, computerChoice);
                //update images
                playerhand.src = `${this.textContent}.png`;
                computerhand.src = `${computerChoice}.png`;
            });
        });

    };

    const updateScore = () => {
        const playerscore = document.querySelector('.player-score p');
        const computerscore = document.querySelector('.computer-score p');
        playerscore.textContent = pScore;
        computerscore.textContent = cScore;
    };

    const compareHands = (playerchoice, computerchoice) => {
        const winner = document.querySelector('.winner');
        //checking for a tie
        if (playerchoice === computerchoice) {
            winner.textContent = 'It is a tie';
            return;
        }
        //check for a rock
        if (playerchoice === 'rock') {
            if (computerchoice === 'paper') {
                winner.textContent = 'computer wins';
                (cScore)++;
                updateScore();
                //just for check that the score is increasing properly or not
                //just for check that the scroe is increasing properly or not by using the console window
                console.log(cScore);
                return;
            }
            else {
                winner.textContent = 'player wins';
                pScore++;
                updateScore();
                return;
            }

        }

        //check for the paper
        if (playerchoice === 'paper') {
            if (computerchoice === 'rock') {
                winner.textContent = 'player wins';
                pScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = 'computer wins';
                cScore++;
                updateScore();
                return;
            }

        }

        //check for the scissors
        if (playerchoice === 'scissors') {
            if (computerchoice === 'paper') {
                winner.textContent = 'player wins';
                pScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = 'computer wins';
                cScore++;
                updateScore();
                return;
            }

        }

    }

    //call all inner function before the last function ends
    startGame();
    playmatch();
};
//start the game
game();

