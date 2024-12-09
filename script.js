const chaser = document.getElementById('chaser');
const chasee = document.getElementById('chasee');
const dialogueBox = document.getElementById('dialogueBox');
const dialogueText = document.getElementById('dialogueText');
const choices = document.getElementById('choices');

// Initial positions
let chaserPos = { x: 50, y: 300 };
let chaseePos = { x: 400, y: 300 };
const chaserSpeed = 5;
const chaseeSpeed = 3;

// Update character positions
function updatePositions() {
  chaser.style.left = `${chaserPos.x}px`;
  chaser.style.top = `${chaserPos.y}px`;
  chasee.style.left = `${chaseePos.x}px`;
  chasee.style.top = `${chaseePos.y}px`;
}

// Move characters in the same direction
function moveCharacters() {
  chaserPos.x += chaserSpeed;
  chaseePos.x += chaseeSpeed;

  // Detect collision
  if (chaserPos.x + 100 >= chaseePos.x) {
    clearInterval(gameLoop);
    showDialogue();
  }

  updatePositions();
}

// Show dialogue box
function showDialogue() {
  dialogueBox.classList.remove('hidden');
  dialogueBox.style.display = 'block';
  dialogueText.textContent = "I'm sorry! Can you forgive me? I know I can be difficult sometimes.";

  // Show choices after a slight delay
  setTimeout(() => {
    choices.classList.remove('hidden');
  }, 2000);
}

// Handle user choices
choices.addEventListener('click', (e) => {
  if (e.target.classList.contains('choice')) {
    const response = e.target.dataset.response;
    handleChoice(response);
  }
});

// Handle choice responses
function handleChoice(response) {
  choices.classList.add('hidden'); // Hide choices
  if (response === 'accept') {
    dialogueText.textContent = "Thank you! I promise to make things better.";
  } else if (response === 'reject') {
    dialogueText.textContent = "Not an option! Try again.";
  }
}

// Start the animation
const gameLoop = setInterval(moveCharacters, 50); // Adjust interval for smoother movement

// Initialize positions
updatePositions();
