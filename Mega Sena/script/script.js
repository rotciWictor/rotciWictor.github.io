const num0 = document.getElementById("num1");
const num1 = document.getElementById("num2");
const num2 = document.getElementById("num3");
const num3 = document.getElementById("num4");
const num4 = document.getElementById("num5");
const num5 = document.getElementById("num6");


function startar() {
    const timer = setInterval(sortear, 1000);
    const sorteados = [];
    let contadorDeVoltas = 0;

    for (let i = 0; i < 6; i++) {
        let nome = "num" + i;
        eval(nome).innerHTML = "";
    }

    function sortear() {
        sortearNum(colocarSorteadoNoArray);
        contadorDeVoltas++
        if (contadorDeVoltas === 6) {
            clearInterval(timer);
        }
    }

    function colocarSorteadoNoArray(__num) {
        sorteados.push(__num);
        let nome = "num" + contadorDeVoltas;
        eval(nome).innerHTML = `${sorteados[contadorDeVoltas]}`
        console.log(`o contador eh: ${contadorDeVoltas}`);

        console.log(`o array Sorteados está assim: ${sorteados}`);
    }

    function sortearNum(callback) {

        let num = Math.ceil(Math.random() * 60);
        while (sorteados.includes(num)) {
            num = Math.ceil(Math.random() * 60);
        }
        console.log(`o numero sorteado foi: ${num}`);
        callback(num);
    }

};