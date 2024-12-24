let score = 0;
let timeLeft = 30;
let gameInterval;
let moleInterval;
let holes = document.querySelectorAll('.hole');
let scoreDisplay = document.getElementById('score');
let timeDisplay = document.getElementById('time');
let startButton = document.getElementById('start-btn');
let moles = document.querySelectorAll('.mole');

// Start the game
startButton.addEventListener('click', startGame);

// Function to start the game
function startGame() {
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = `Score: ${score}`;
  timeDisplay.textContent = `Time Left: ${timeLeft}`;
  startButton.disabled = true;

  gameInterval = setInterval(updateTime, 1000);
  moleInterval = setInterval(showMole, 1000);
}

// Function to update the time
function updateTime() {
  timeLeft--;
  timeDisplay.textContent = `Time Left: ${timeLeft}`;

  if (timeLeft <= 0) {
    clearInterval(gameInterval);
    clearInterval(moleInterval);
    alert(`Game Over! Your score is ${score}`);
    startButton.disabled = false;
  }
}

// Function to randomly show a mole in one of the holes
function showMole() {
  let randomHole = holes[Math.floor(Math.random() * holes.length)];
  let mole = randomHole.querySelector('.mole');
  
  if (!mole.classList.contains('show')) { // Prevent mole from showing again before disappearing
    mole.classList.add('show');
    
    // Hide the mole after 1 second
    setTimeout(() => {
      mole.classList.remove('show');
    }, 600);
  }
}

// Function to handle a mole being clicked
moles.forEach(mole => {
  mole.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    mole.classList.remove('show'); // Hide the mole immediately after click
  });
});