const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]
let showed = ""
let oPlaysNumber = 0
let xPlaysNumber = 0
let endGame = false

function setPlay(position) {
    let checkedPosition = ""
    let message = "Escolha Outra Casa!!!"
    if (endGame === true) {
        alert("O jogo terminou!!! Se quiser jogar novamente aperte o botão reiniciar")
    } else {
        if (position === 1) {
            if (board[0][0] !== "") {
                alert(message)
            } else {
                whoPlays()
                checkedPosition = "one"
                board[0][0] = showed
            }
        } else if (position === 2) {
            if (board[0][1] !== "") {
                alert(message)
            } else {
                whoPlays()
                checkedPosition = "two"
                board[0][1] = showed
            }
        } else if (position === 3) {
            if (board[0][2] !== "") {
                alert(message)
            } else {
                whoPlays()
                checkedPosition = "three"
                board[0][2] = showed
            }
        } else if (position === 4) {
            if (board[1][0] !== "") {
                alert(message)
            } else {
                whoPlays()
                checkedPosition = "four"
                board[1][0] = showed
            }
        } else if (position === 5) {
            if (board[1][1] !== "") {
                alert(message)
            } else {
                whoPlays()
                checkedPosition = "five"
                board[1][1] = showed
            }
        } else if (position === 6) {
            if (board[1][2] !== "") {
                alert(message)
            } else {
                whoPlays()
                checkedPosition = "six"
                board[1][2] = showed
            }
        } else if (position === 7) {
            if (board[2][0] !== "") {
                alert(message)
            } else {
                whoPlays()
                checkedPosition = "seven"
                board[2][0] = showed
            }
        } else if (position === 8) {
            if (board[2][1] !== "") {
                alert(message)
            } else {
                whoPlays()
                checkedPosition = "eight"
                board[2][1] = showed
            }
        } else if (position === 9) {
            if (board[2][2] !== "") {
                alert(message)
            } else {
                whoPlays()
                checkedPosition = "nine"
                board[2][2] = showed
            }
        }
        document.getElementById(checkedPosition).innerHTML = showed
        whoWins(showed)
        console.log(board[0][0], board[0][1], board[0][2])
        console.log(board[1][0], board[1][1], board[1][2])
        console.log(board[2][0], board[2][1], board[2][2])
    }
}


function whoWins(player) {
    if ((board[0][0] === player && board[0][1] === player && board[0][2] === player) ||
        (board[1][0] === player && board[1][1] === player && board[1][2] === player) ||
        (board[2][0] === player && board[2][1] === player && board[2][2] === player) ||
        (board[0][0] === player && board[1][0] === player && board[2][0] === player) ||
        (board[0][1] === player && board[1][1] === player && board[2][1] === player) ||
        (board[0][2] === player && board[1][2] === player && board[2][2] === player) ||
        (board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
        (board[0][2] === player && board[1][1] === player && board[2][0] === player)) {

        document.getElementById("winner").innerHTML = "O jogador que usou " + showed + " ganhou!!!"
        endGame = true
    } else if (    board[0][0] !== "" && board[0][1] !== "" && board[0][2] !== "" 
                && board[1][0] !== "" && board[1][1] !== "" && board[1][2] !== "" 
                && board[2][0] !== "" && board[2][1] !== "" && board[2][2] !== "") {

        document.getElementById("winner").innerHTML = "Deu Velha!!!"
        endGame = true
    }
}

function clean() {
    board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]
    oPlaysNumber = 0
    xPlaysNumber = 0
    showed = ""
    // document.querySelectorAll('h2[class=element]').innerHTML = ""
    document.querySelector('h2[id=one]').innerHTML = ""
    document.querySelector('h2[id=two]').innerHTML = ""
    document.querySelector('h2[id=three]').innerHTML = ""
    document.querySelector('h2[id=four]').innerHTML = ""
    document.querySelector('h2[id=five]').innerHTML = ""
    document.querySelector('h2[id=six]').innerHTML = ""
    document.querySelector('h2[id=seven]').innerHTML = ""
    document.querySelector('h2[id=eight]').innerHTML = ""
    document.querySelector('h2[id=nine]').innerHTML = ""
    document.getElementById("winner").innerHTML = ""
    endGame = false
}

function whoPlays() {

    if (oPlaysNumber > xPlaysNumber) {
        showed = "X"
        xPlaysNumber = xPlaysNumber + 1
    } else {
        showed = "O"
        oPlaysNumber = oPlaysNumber + 1
    }
}