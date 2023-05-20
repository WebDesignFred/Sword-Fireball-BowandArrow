// Get necessary elements
const SwordBtn = document.getElementById('Sword');
const FireballBtn = document.getElementById('Fireball');
const BowBtn = document.getElementById('Bow');
const resultDiv = document.getElementById('result');

// Attach click event listeners
SwordBtn.addEventListener('click', () => playGame('Sword'));
FireballBtn.addEventListener('click', () => playGame('Fireball'));
BowBtn.addEventListener('click', () => playGame('Bow'));

function playGame(playerSelection) {
    // Generate a random move for the computer
    const computerSelection = generateComputerMove();

    // Determine the winner
    const winner = getWinner(playerSelection, computerSelection);

    // Display the results
    displayResults(playerSelection, computerSelection, winner);
}

function generateComputerMove() {
    // Generate a random number from 0 to 2
    const random = Math.floor(Math.random() * 3);

    // Map the random number to a move (0: rock, 1: paper, 2: scissors)
    switch (random) {
        case 0:
            return 'Sword';
        case 1:
            return 'Fireball';
        case 2:
            return 'Bow';
    }
}

function getWinner(player, computer) {
    if (player === computer) {
        return 'draw';
    } else if (
        (player === 'Sword' && computer === 'Bow') ||
        (player === 'Fireball' && computer === 'Sword') ||
        (player === 'Bow' && computer === 'Fireball')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

function displayResults(player, computer, winner) {
    resultDiv.innerHTML = `
        You played <strong>${player}</strong>.
        The undead played <strong>${computer}</strong>.<br>
        <strong>${winner === 'draw' ? 'It\'s a draw!' : winner.charAt(0).toUpperCase() + winner.slice(1) + ' wins!'}</strong>
    `;
}
//TO BE ADDED LATER .score {
//    display: flex;
//    justify-content: center;
//    gap: 10vw;
 //   margin-bottom: 10vh;
  //  text-align: center;
//}

//<div class="score">  
//<div class="playerScore">
  //  <h2>Player</h2>
   // <p class="p-count count">0</p>

//</div>       
//<div class="computerScore">
  //  <h2>Undead</h2>
  //  <p class="c-count count">0</p>

//</div>
//</div>