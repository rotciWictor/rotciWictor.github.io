let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]
let showed = ""
let oPlaysNumber = 0
let xPlaysNumber = 0
let endGame = false

function setPlay(boardPosition, line, column) {
    let checkedPosition = board[line][column]
    let message = "Escolha Outra Casa!!!"

    if (endGame === true) {
        alert("O jogo terminou!!! Se quiser jogar novamente aperte o botão reiniciar")
    } else {
        if (checkedPosition !== "") {
            alert(message)
        } else {
            whoPlays()
            board[line][column] = showed
            // checkedPosition = showed
        }
        document.getElementById(boardPosition).innerHTML = showed
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
    } else if (board[0][0] !== "" && board[0][1] !== "" && board[0][2] !== "" &&
        board[1][0] !== "" && board[1][1] !== "" && board[1][2] !== "" &&
        board[2][0] !== "" && board[2][1] !== "" && board[2][2] !== "") {

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
        showed = "&#129304;"
        xPlaysNumber = xPlaysNumber + 1
    } else {
        showed = "&#128526;"
        oPlaysNumber = oPlaysNumber + 1
    }
}