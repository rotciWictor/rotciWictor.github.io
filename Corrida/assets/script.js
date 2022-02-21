const velMinPedro = 150
const velMaxPedro = 230
const skidPedro = 0.03
const velMinJuca = 120
const velMaxJuca = 260
const derrapagemJuca = 0.05
const velMinEdna = 180
const velMaxEdna = 220
const derrapagemEdna = 0.01
const quickRace = 10
const grandPrix = 70
const enduro = 160
let winsJuca = 0
let winsPedro = 0
let winsEdna = 0
let velJuca = 0
let velPedro = 0
let velEdna = 0
let winner = ""
let winnerlaps = 0


function startStandardRace(lapNum) {
    clear()
    console.log("numero de voltas: " + lapNum)

    for (let i = 0; i < lapNum; i++) {

        setVelJuca()
        console.log("velocidade Juca: " + velJuca)

        setVelPedro()
        console.log("velocidade Pedro: " + velPedro)

        setVelEdna()
        console.log("velocidade Edna: " + velEdna)

        if (velJuca > velPedro) {
            if (velJuca > velEdna) {
                winsJuca = winsJuca + 1
            } else {
                winsEdna = winsEdna + 1
            }
        } else {
            if (velPedro > velJuca) {
                if (velPedro > velEdna) {
                    winsPedro = winsPedro + 1
                } else {
                    winsEdna = winsEdna + 1
                }
            }
        }

    }

    console.log("vitorias Edna: " + winsEdna)
    console.log("vitorias Juca: " + winsJuca)
    console.log("vitorias Pedro: " + winsPedro)
    
    if (winsPedro > winsJuca) {
        if (winsPedro > winsEdna) {
            winner = "Pedro"
            winnerlaps = winsPedro
        } else {
            winner = "Edna"
            winnerlaps = winsEdna
        }
    } else {
        if (winsJuca > winsEdna) {
            winner = "Juca"
            winnerlaps = winsJuca
        } else {
            winner = "Edna"
            winnerlaps = winsEdna
        }

    }
    console.log(winner)
    console.log(winnerlaps)
    
    document.getElementById("winner").innerHTML = "O vencedor(a) é: " + winner
    document.getElementById("winnerlaps").innerHTML = "Ganhando um total de " + winnerlaps + " voltas"
}
function startCustomRace() {
    clear()
    lapNum = document.getElementById("customLaps").value
    console.log("numero de voltas: " + lapNum)

    for (let i = 0; i < lapNum; i++) {

        velJuca = setRandomVel()
        console.log("velocidade Juca: " + velJuca)

        velPedro = setRandomVel()
        console.log("velocidade Pedro: " + velPedro)

        velEdna = setRandomVel()
        console.log("velocidade Edna: " + velEdna)

        if (velJuca > velPedro) {
            if (velJuca > velEdna) {
                winsJuca = winsJuca + 1
            } else {
                winsEdna = winsEdna + 1
            }
        } else {
            if (velPedro > velJuca) {
                if (velPedro > velEdna) {
                    winsPedro = winsPedro + 1
                } else {
                    winsEdna = winsEdna + 1
                }
            }
        }

    }

    console.log("vitorias Edna: " + winsEdna)
    console.log("vitorias Juca: " + winsJuca)
    console.log("vitorias Pedro: " + winsPedro)
    
    if (winsPedro > winsJuca) {
        if (winsPedro > winsEdna) {
            customWinner = "Pedro"
            customWinnerlaps = winsPedro
        } else {
            customWinner = "Edna"
            customWinnerlaps = winsEdna
        }
    } else {
        if (winsJuca > winsEdna) {
            customWinner = "Juca"
            customWinnerlaps = winsJuca
        } else {
            winner = "Edna"
            winnerlaps = winsEdna
        }

    }
    console.log(customWinner)
    console.log(customWinnerlaps)

    document.getElementById("customwinner").innerHTML = "O vencedor(a) é: " + customWinner
    document.getElementById("custom-laps").innerHTML = "Ganhando um total de " + customWinnerlaps + " voltas"
}
function setVelJuca() {
    let diff = velMaxJuca - velMinJuca;
    velJuca = (Math.round(Math.random() * diff) + velMinJuca) * (1 - derrapagemJuca);

}
function setVelPedro() {
    let diff = velMaxPedro - velMinPedro;
    velPedro = (Math.round(Math.random() * diff) + velMinPedro) * (1 - skidPedro);

}
function setVelEdna() {
    let diff = velMaxEdna - velMinEdna;
    velEdna = (Math.round(Math.random() * diff) + velMinEdna) * (1 - derrapagemEdna);

}
function setRandomVel(){
    
    const minVelMin = 100;
    const maxVelMin = 150;
    const minDiff = maxVelMin - minVelMin;
    const velMin = (Math.round(Math.random() * minDiff) + minVelMin);
    
    console.log("valor da velocidade minima customizadas: "+velMin);
    
    const minVelMax = 200;
    const maxVelMax = 280;
    const maxDiff = maxVelMax - minVelMax;
    const velMax = (Math.round(Math.random() * maxDiff) + minVelMin);
    console.log("valor da velocidade maxima customizadas: "+velMax);
    
    const minSkid = 1;
    const maxSkid = 8;
    const diffSkid = minSkid - maxSkid;
    const skid = ((Math.round(Math.random() * diffSkid) + minSkid)/100);
    console.log("valor da derrapagem customizadas: "+skid)
    
    let diff = velMax - velMin;
    carVel = (Math.round(Math.random() * diff) + velMin) * (1 - skid);
    console.log("valor da velocidade customizada: "+carVel)
    
    return carVel
    
}
function clear() {
    winsJuca = 0
    winsPedro = 0
    winsEdna = 0
    velJuca = 0
    velPedro = 0
    velEdna = 0
    winner = ""
    winnerlaps = 0
}