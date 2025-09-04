//const and let
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const firstPasswordEl = document.getElementById("first-password")
const secondPasswordEl = document.getElementById("second-password")
const numberEl = document.getElementById("number-el")
//functions
function randomPassword() {
    firstPasswordEl.textContent = ""
    secondPasswordEl.textContent = ""
    if (numberEl.value < 8 || numberEl.value > 18) {
        alert("The password should be more that 8 and less than 18 characters length")
    } else {
        for (let i = 0; i < numberEl.value; i++) {
        let randomCharacter = Math.floor(Math.random() * characters.length)
        firstPasswordEl.textContent += characters[randomCharacter]
        }

        for (let i = 0; i < numberEl.value; i++) {
            let randomCharacter = Math.floor(Math.random() * characters.length)
            secondPasswordEl.textContent += characters[randomCharacter]
        }
    }
}

