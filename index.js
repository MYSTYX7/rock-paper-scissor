const options = document.querySelectorAll('.buttons');

let userScore = 0;
let compScore = 0;

options.forEach((e) => {
  e.addEventListener("click", function () {

    const userChoice = this.textContent;
    const compOptions = ["Rock", "Paper", "Scissors"];
    const compChoice = compOptions[Math.floor(Math.random() * 3)];

    result(userChoice, compChoice);
    updateScore();
    gameOver();
  });
});


function result(userChoice, compChoice){
    if (userChoice === "Rock") {
        if (compChoice === "Scissors") {
        userScore++;
        // winImg()
        document.querySelector("#container").textContent = userChoice + " beats " + compChoice + " - You win!";
        } else if (compChoice === "Paper") {
        compScore++;
        // lossImg()
        document.querySelector("#container").textContent = compChoice + " beats " + userChoice + " - Heh! Try again!";
        }
    }

    if (userChoice === "Paper") {
        if (compChoice === "Rock") {
        userScore++;
        // winImg()
        document.querySelector("#container").textContent = userChoice + " beats " + compChoice + " - You win!";
        } else if (compChoice === "Scissors") {
        compScore++;
        // lossImg()
        document.querySelector("#container").textContent = compChoice + " beats " + userChoice + " - Heh! Try again!";
        }
    }

    if (userChoice === "Scissors") {
        if (compChoice === "Paper") {
        userScore++;
        // winImg()
        document.querySelector("#container").textContent = userChoice + " beats " + compChoice + " - You win!";
        } else if (compChoice === "Rock"){
        compScore++;
        // lossImg()
        document.querySelector("#container").textContent = compChoice + " beats " + userChoice + " - Heh! Try again!";
        }
    }

    if (userChoice === compChoice) {
      document.querySelector("#container").textContent = compChoice + " equals " + userChoice + " - Finally! A worthy opponent! (Draw)";
      userScore += 0.5;
      compScore += 0.5;
      // drawImg();
      return;
    }
}

function updateScore() {
    document.getElementById("userScore").textContent = userScore;
    document.getElementById("compScore").textContent = compScore;
}

function gameOver() {
  if (userScore >= 10 || compScore >= 10){
    if (userScore >= 10){
      alert("You win by " + userScore + " : " + compScore);
    } else {alert("You lost by " + userScore + " : " + compScore);}
    userScore = 0;
    document.getElementById("userScore").textContent = userScore;
    compScore = 0;
    document.getElementById("compScore").textContent = compScore;
  } else if (userScore == 10 && compScore == 10) {
    userScore -= 0.5;
    compScore -= 0.5;
  }
}

// function winImg() {
//   var img = document.createElement('img');
//   img.src = 'https://sayingimages.com/wp-content/uploads/pissed-off-face-winner-meme.jpg'
//   document.getElementById('meme').appendChild(img).width='300';
// }

// function drawImg() {
//   var img = document.createElement('img');
//   img.src = 'https://www.memestemplates.com/wp-content/uploads/2020/05/finally-a-worthy-opponent-our-battle-will-be-legendary-Kung-fu-panda-1024x675.png'
//   document.getElementById('meme').appendChild(img).height='300';
// }

// function lossImg() {
//   var img = document.createElement('img');
//   img.src = 'http://www.quickmeme.com/img/ec/ec77205f1b0cae0514a8cdbd5813ac60e98bf762c2805c33e5d8a5076421ab15.jpg'
//   document.getElementById('meme').appendChild(img).width='300';
// }