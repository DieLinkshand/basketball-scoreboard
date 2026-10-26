let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

// Home Add Points
function homeAdd1() {
    let homeScoreNumber = parseInt(homeScore.textContent)
    homeScore.textContent = homeScoreNumber + 1
}

function homeAdd2() {
    let homeScoreNumber = parseInt(homeScore.textContent)
    homeScore.textContent = homeScoreNumber + 2
}

function homeAdd3() {
    let homeScoreNumber = parseInt(homeScore.textContent)
    homeScore.textContent = homeScoreNumber + 3
}

// Guest Add Points
function guestAdd1() {
    let guestScoreNumber = parseInt(guestScore.textContent)
    guestScore.textContent = guestScoreNumber + 1
}

function guestAdd2() {
    let guestScoreNumber = parseInt(guestScore.textContent)
    guestScore.textContent = guestScoreNumber + 1
}

function guestAdd3() {
    let guestScoreNumber = parseInt(guestScore.textContent)
    guestScore.textContent = guestScoreNumber + 1
}

// Reset scores for both home and guest teams
function reset() {
    homeScore.textContent = 0
    guestScore.textContent = 0
}