let timesRepetition = 0;
let repeatCont = 0;
let boardCount = 0;
let phrase = ""

function repetition() {

    clear()

    timesRepetition = document.getElementById("times-repetition").value;
    boardCount = Math.ceil(timesRepetition / 11, 1);
    lines = timesRepetition % 11
    if (lines === 0) {
        lines = 11
    }
    getBartPhrase()

    while (repeatCont < lines) {
        let textTag = document.createElement("h2");
        let text = document.createTextNode(phrase);
        let board = document.getElementById("board")
        textTag.appendChild(text);
        board.appendChild(textTag);
        repeatCont = repeatCont + 1;
        if (repeatCont === 11) {
            break;
        }

    }
    document.getElementById("repetitions-lines").innerHTML = " Número de linhas escritas: " + timesRepetition
    document.getElementById("repetitions-boards").innerHTML = " Número de quadros preenchidos: " + boardCount
}

function clear() {
    let board = document.getElementById("board");
    while (board.firstChild) {
        board.removeChild(board.firstChild);
        repeatCont = 0;
    }


}
function getBartPhrase() {
    let phrasesCollection = ["nothing",
        "Eu não desperdiçarei giz.",
        "Eu não andarei de skate nos corredores",
        "Eu não arrotarei na aula",
        "Eu não instigarei revoluções",
        "Eu não vou desenhar mulheres nuas na sala de aula",
        "Eu não vi Elvis",
        "Eu não chamarei minha professora de Bolo Quente",
        "Chiclete de alho não é engraçado",
        "Eles estão rindo de mim, e não comigo.",
        "Eu não gritarei “Fogo” em uma sala de aula cheia"
    ]

    random = Math.round((Math.random()) * (10 - 1) + 1);

    phrase = phrasesCollection[random]

}