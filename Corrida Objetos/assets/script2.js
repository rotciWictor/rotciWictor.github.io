const popular = {
    rarity: "Popular",
    minVelMax: 180,
    maxVelMax: 200,
    minVelMin: 110,
    maxVelMin: 130,
    minSkid: 0.03,
    maxSkid: 0.04
}
const sport = {
    rarity: "Sport",
    minVelMax: 195,
    maxVelMax: 215,
    minVelMin: 125,
    maxVelMin: 145,
    minSkid: 0.02,
    maxSkid: 0.03
}
const superSport = {
    rarity: "Super Sport",
    minVelMax: 210,
    maxVelMax: 230,
    minVelMin: 140,
    maxVelMin: 160,
    minSkid: 0.01,
    maxSkid: 0.0175
}

const pilots = ["edna", "pedro", "juca"]
const cars = [car00 = {}, car01 = {}, car02 = {}]

const quickRace = 10
const grandPrix = 70
const enduro = 160


function startStandardRace(lapNum) {
    clear()
    console.log("numero de voltas: " + lapNum)

    cars.forEach((element, index) => {
        element.name = pilots[index]
        let rarity = carRarity()
        element.maxVel = setMaxVel(rarity)
        element.minVel = setMinVel(rarity)
        element.skid = setSkid(rarity)

    });



    
    showCar(cars[0])

    
    showCar(cars[1])

    
    showCar(cars[2])

    for (let i = 0; i < lapNum; i++) {

        let velJuca = setVel(cars[2])
        console.log("velocidade Juca: " + velJuca)

        let velPedro = setVel(cars[1])
        console.log("velocidade Pedro: " + velPedro)

        let velEdna = setVel(cars[0])
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

    console.log("vitórias Edna: " + winsEdna)
    console.log("vitórias Juca: " + winsJuca)
    console.log("vitórias Pedro: " + winsPedro)

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


function createCar(indexPilot) {
    let newCar = {

    }
    let rarity = carRarity()
    newCar.name = pilots[indexPilot]
    newCar.rarity = rarity.rarity
    newCar.maxVel = setMaxVel(rarity)
    newCar.minVel = setMinVel(rarity)
    newCar.skid = setSkid(rarity)

    console.log(newCar)

    return newCar
}

function carRarity() {
    let rarity = undefined
    let random = (Math.random() * 100)

    if (random <= 60) {
        rarity = popular
    } else if (random <= 95) {
        rarity = sport
    } else {
        rarity = superSport
    }
    return rarity
}

function setMinVel(rarity) {
    const minVelMin = rarity.minVelMin;
    const maxVelMin = rarity.maxVelMin;
    const minDiff = maxVelMin - minVelMin;
    const velMin = (Math.round(Math.random() * minDiff) + minVelMin);

    console.log("valor da velocidade minima customizada: " + velMin);

    return velMin
}

function setMaxVel(rarity) {
    const minVelMax = rarity.minVelMax;
    const maxVelMax = rarity.maxVelMax;
    const maxDiff = maxVelMax - minVelMax;
    const velMax = (Math.round(Math.random() * maxDiff) + minVelMax);

    console.log("valor da velocidade maxima customizada: " + velMax);

    return velMax
}

function setSkid(rarity) {
    const minSkid = rarity.minSkid * 100;
    const maxSkid = rarity.maxSkid * 100;
    const diffSkid = maxSkid - minSkid;
    const skid = ((Math.round(Math.random() * diffSkid) + minSkid) / 100);

    console.log("valor da derrapagem customizada: " + skid)

    return skid
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

function setVel(carPilot) {
    console.log()
    let diff = carPilot.maxVel - carPilot.minVel;
    carVel = (Math.round(Math.random() * diff) + carPilot.minVel) * (1 - carPilot.skid);
    console.log("valor da velocidade customizada: " + carVel)

    return carVel
}

function showCar(carPilot) {
    let partId = carPilot.name
    console.log("partID: " + partId)
    document.getElementById(partId).innerHTML = "Piloto: " + carPilot.name
    document.getElementById(partId + "-rarity").innerHTML = "Raridade do carro: " + carPilot.rarity
    document.getElementById(partId + "-maxvel").innerHTML = "Velocidade Máxima: " + carPilot.maxVel
    document.getElementById(partId + "-minvel").innerHTML = "Velocidade Mínima: " + carPilot.minVel
    document.getElementById(partId + "-skid").innerHTML = "Derrapagem: " + carPilot.skid
}