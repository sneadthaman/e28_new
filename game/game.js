// Game logic for Pick A Number

function generateRandomNumber() {
	let randNum = Math.floor((Math.random() * 10) + 1);
  return randNum;
}

function refresh() {
	document.location.reload(true);
}

function playGame() {
	let randNum = generateRandomNumber();
  let playerNum = document.getElementById('playerNum').value;
  const winTextNode = document.createTextNode("Lucky Guess");
	const loseTextNode = document.createTextNode("You Lose! Save your money for the buffet");
  
  if (randNum == playerNum) {
  	node1.appendChild(winTextNode);
    node1.style.color = "green";
    gameDiv.appendChild(node1);
  } else {
  	node1.appendChild(loseTextNode);
    node1.style.color = "red";
    gameDiv.appendChild(node1);
  }
  node2.appendChild(gameOver);
  gameDiv.appendChild(node2);
  gameDiv.removeChild(button);
}

const gameDiv = document.getElementById('game');
const button = document.querySelector('button');
const node1 = document.createElement('p');
const node2 = document.createElement('button');
const gameOver = document.createTextNode("Play Again?");
button.addEventListener('click', playGame);
node2.addEventListener('click', refresh);

