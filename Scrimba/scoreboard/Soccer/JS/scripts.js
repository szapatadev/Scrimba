let homeCount = 0
let guestCount = 0
let homeScore = document.getElementById("home-number")
let guestScore = document.getElementById("guest-number")
let termNumber = document.getElementById("term-number")
let btnTerm = document.getElementById("btn-term")

function homePlusOne() {
    homeCount += 1
    homeScore.innerText = homeCount
}

function guestPlusOne() {
    guestCount += 1
    guestScore.innerText = guestCount
}

function term() {
    termNumber.innerText = 2
    btnTerm.innerText = "Second Term"
}

function ended() {
    termNumber.innerText = 0
    btnTerm.innerText = "Ended"
}


function restart() {
    homeCount = 0
    guestCount = 0
    termNumber.innerText = 1
    btnTerm.innerText = "First Term"
    homeScore.innerText = homeCount
    guestScore.innerText = guestCount
}