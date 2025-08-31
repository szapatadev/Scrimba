let homeCount = 0
let guestCount = 0
let homeScore = document.getElementById("home-number")
let guestScore = document.getElementById("guest-number")

function homePlusOne() {
    homeCount += 1
    homeScore.innerText = homeCount
}

function homePlusTwo() {
    homeCount += 2
    homeScore.innerText = homeCount
}

function homePlusThree() {
    homeCount += 3
    homeScore.innerText = homeCount
}

function guestPlusOne() {
    guestCount += 1
    guestScore.innerText = guestCount
}

function guestPlusTwo() {
    guestCount += 2
    guestScore.innerText = guestCount
}

function guestPlusThree() {
    guestCount += 3
    guestScore.innerText = guestCount
}

function restart() {
    homeCount = 0
    guestCount = 0
    homeScore.innerText = homeCount
    guestScore.innerText = guestCount
}