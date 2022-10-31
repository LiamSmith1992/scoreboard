let playerName = ''
let playerName2 = ''

let homeScore = 0
let awayScore = 0

let gameLength = 10000
let timeRemaining = 0
let clockId = 0

// function Begin() {
//   document.getElementById("buttons").classList.remove("hidden")
//   document.getElementById("points").classList.remove("hidden")
//   startClock()
//   stopClock()
//   setTimeout(stopGame, gameLength)
// }



function startClock() {
  console.log("time remaining", timeRemaining)
  timeRemaining = gameLength
  console.log(timeRemaining)
  drawClock()
  clockId = setInterval(drawClock, 1000)
  if (timeRemaining == 0) {
    stopClock()
  }
}

function drawClock() {
  let countdownElm = document.getElementById('Countdown')
  console.log(countdownElm)
  countdownElm.innerHTML = (timeRemaining / 1000).toString()
  timeRemaining -= 1000
}


function addPointHome1() {
  homeScore += 1;
  console.log("Homescore:", homeScore);
  drawHomeScore()
}

function addPointHome3() {
  homeScore += 3;
  console.log("Homescore:", homeScore);
  drawHomeScore()
}
function addPointAway1() {
  awayScore += 1;
  console.log(awayScore);
  drawAwayScore()
}

function addPointAway3() {
  awayScore += 3;
  console.log(awayScore);
  drawAwayScore()
}

function drawHomeScore() {
  let scoreElem = document.getElementById('home-score')
  console.log(scoreElem);
  scoreElem.innerText = homeScore
}
function drawAwayScore() {
  let awayScoreElem = document.getElementById('away-score')
  console.log(awayScoreElem);
  awayScoreElem.innerText = awayScore
}

function clearScore() {
  homeScore = 0
  awayScore = 0
  drawAwayScore()
  drawHomeScore()

}
