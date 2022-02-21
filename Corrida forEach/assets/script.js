//criando tipos de carro que podem ser gerados 
const popular = {
  rarity: "Popular",
  minVelMax: 180,
  maxVelMax: 200,
  minVelMin: 110,
  maxVelMin: 130,
  minSkid: 0.03,
  maxSkid: 0.04,
};
const sport = {
  rarity: "Sport",
  minVelMax: 195,
  maxVelMax: 215,
  minVelMin: 125,
  maxVelMin: 145,
  minSkid: 0.02,
  maxSkid: 0.03,
};
const superSport = {
  rarity: "Super Sport",
  minVelMax: 210,
  maxVelMax: 230,
  minVelMin: 140,
  maxVelMin: 160,
  minSkid: 0.01,
  maxSkid: 0.0175,
};
const cars = [{
    pilotname: "edna",
    level: 0,
    champPoints: 0,
  },
  {
    pilotname: "pedro",
    level: 0,
    champPoints: 0,
  },
  {
    pilotname: "juca",
    level: 0,
    champPoints: 0,
  },
];
//criando tipos de corrida

const quickRace = 10;
const grandPrix = 70;
const enduro = 160;

let pointsEdna = 0
let pointsPedro = 0
let pointsJuca = 0

function startStandardRace(lapNum) {
  console.log(`Campeonato - Edna ${pointsEdna} Pedro ${pointsPedro} Juca ${pointsJuca}`)
  clear();
  console.log("numero de voltas: " + lapNum);

  cars.forEach((element) => {
    let rarity = carRarity();
    element.rarity = rarity.rarity;
    element.maxVel = setMaxVel(rarity);
    element.minVel = setMinVel(rarity);
    element.skid = setSkid(rarity);
  });

  for (let i = 0; i < cars.length; i++) {
    if (cars[i].level == 10) {
      break
    } else{
      cars[i].maxVel = cars[i].maxVel * (1 + 0.01 * cars[i].level)
    cars[i].minVel = cars[i].minVel * (1 + 0.01 * cars[i].level)
  }
}
cars.forEach(showCar);

//corrida

for (let i = 0; i < lapNum; i++) {
  let velJuca = setVel(cars[2]);
  console.log("velocidade Juca: " + velJuca);

  let velPedro = setVel(cars[1]);
  console.log("velocidade Pedro: " + velPedro);

  let velEdna = setVel(cars[0]);
  console.log("velocidade Edna: " + velEdna);

  if (velJuca > velPedro) {
    if (velJuca > velEdna) {
      winsJuca = winsJuca + 1;
    } else {
      winsEdna = winsEdna + 1;
    }

  } else {
    if (velPedro > velJuca) {
      if (velPedro > velEdna) {
        winsPedro = winsPedro + 1;
      } else {
        winsEdna = winsEdna + 1;
      }
    }
  }
}
console.log("vitórias Edna: " + winsEdna);
console.log("vitórias Juca: " + winsJuca);
console.log("vitórias Pedro: " + winsPedro);

let winnerPoints
let secondPoints
let thirdPoints

switch (lapNum) {
  case 10:
    winnerPoints = 200, secondPoints = 120, thirdPoints = 50;
    break;

  case 70:
    winnerPoints = 220, secondPoints = 130, thirdPoints = 75;
    break;

  case 160:
    winnerPoints = 250, secondPoints = 150, thirdPoints = 90;
    break;
}


if (winsPedro > winsJuca && winsPedro > winsEdna) {
  winner = "Pedro";
  winnerlaps = winsPedro;
  pointsPedro = pointsPedro + winnerPoints
  if (winsEdna > winsJuca) {
    second = "Edna"
    pointsEdna = secondPoints
    third = "Juca"
    pointsJuca = thirdPoints
  } else {
    second = "Juca"
    pointsJuca = secondPoints
    third = "Edna"
    pointsEdna = thirdPoints

  }
} else if (winsEdna > winsJuca && winsEdna > winsPedro) {
  winner = "Edna";
  winnerlaps = winsEdna;
  pointsEdna = winnerPoints
  if (winsPedro > winsJuca) {
    second = "Pedro"
    pointsPedro = secondPoints
    third = "Juca"
    pointsJuca = thirdPoints
  } else {
    second = "Juca"
    pointsJuca = secondPoints
    third = "Pedro"
    pointsPedro = thirdPoints
  }
} else if (winsJuca > winsEdna && winsJuca > winsPedro) {
  winner = "Juca";
  winnerlaps = winsJuca;
  pointsJuca = winnerPoints
  if (winsPedro > winsEdna) {
    second = "Pedro"
    pointsPedro = secondPoints
    third = "Edna"
    pointsEdna = thirdPoints
  } else {
    second = "Edna"
    pointsEdna = secondPoints
    third = "Pedro"
    pointsPedro = thirdPoints
  }
}

console.log(`Corrida - Edna ${pointsEdna} Pedro ${pointsPedro} Juca ${pointsJuca}`)

cars[0].champPoints = cars[0].champPoints + pointsEdna
cars[1].champPoints = cars[1].champPoints + pointsPedro
cars[2].champPoints = cars[2].champPoints + pointsJuca

for (let i = 0; i < cars.length; i++) {
  if (cars[i].level == 10) {
    cars[i].level = 10
  }else{
  cars[i].level = Math.floor(cars[i].champPoints / 450)
  }
}

console.log(winner);
console.log(winnerlaps);
console.log(second);
console.log(third);


document.getElementById("winner").innerHTML = `O vencedor(a) é: ${winner}`;
document.getElementById("winnerlaps").innerHTML = `Ganhando um total de ${winnerlaps} voltas`;
document.getElementById("second").innerHTML = `Segundo colocado: ${second}`
document.getElementById("third").innerHTML = `Terceiro colocado: ${third}`
document.getElementById("edna-points").innerHTML = cars[0].champPoints
document.getElementById("pedro-points").innerHTML = cars[1].champPoints
document.getElementById("juca-points").innerHTML = cars[2].champPoints
document.getElementById("edna-nivel").innerHTML = cars[0].level
document.getElementById("pedro-nivel").innerHTML = cars[1].level
document.getElementById("juca-nivel").innerHTML = cars[2].level
}

function carRarity() {
  let rarity = undefined;
  let random = Math.random() * 100;

  if (random <= 60) {
    rarity = popular;
  } else if (random <= 95) {
    rarity = sport;
  } else {
    rarity = superSport;
  }
  return rarity;
}

function setMinVel(rarity) {
  const minVelMin = rarity.minVelMin;
  const maxVelMin = rarity.maxVelMin;
  const minDiff = maxVelMin - minVelMin;
  const velMin = Math.round(Math.random() * minDiff) + minVelMin;

  console.log("valor da velocidade minima customizada: " + velMin);

  return velMin;
}

function setMaxVel(rarity) {
  const minVelMax = rarity.minVelMax;
  const maxVelMax = rarity.maxVelMax;
  const maxDiff = maxVelMax - minVelMax;
  const velMax = Math.round(Math.random() * maxDiff) + minVelMax;

  console.log("valor da velocidade maxima customizada: " + velMax);

  return velMax;
}

function setSkid(rarity) {
  const minSkid = rarity.minSkid * 100;
  const maxSkid = rarity.maxSkid * 100;
  const diffSkid = maxSkid - minSkid;
  const skid = (Math.round(Math.random() * diffSkid) + minSkid) / 100;

  console.log("valor da derrapagem customizada: " + skid);

  return skid;
}

function clear() {
  winsJuca = 0;
  winsPedro = 0;
  winsEdna = 0;
  velJuca = 0;
  velPedro = 0;
  velEdna = 0;
  winner = "";
  winnerlaps = 0;
  pointsEdna = 0
  pointsPedro = 0
  pointsJuca = 0
}

function setVel(carPilot) {
  console.log();
  let diff = carPilot.maxVel - carPilot.minVel;
  carVel =
    (Math.round(Math.random() * diff) + carPilot.minVel) * (1 - carPilot.skid);
  console.log("valor da velocidade customizada: " + carVel);

  return carVel;
}

function showCar(carPilot) {
  let partId = carPilot.pilotname;
  console.log("partID: " + partId);
  document.getElementById(partId).innerHTML = "Piloto: " + carPilot.pilotname;
  document.getElementById(partId + "-rarity").innerHTML =
    "Raridade do carro: " + carPilot.rarity;
  document.getElementById(partId + "-maxvel").innerHTML =
    "Velocidade Máxima: " + carPilot.maxVel;
  document.getElementById(partId + "-minvel").innerHTML =
    "Velocidade Mínima: " + carPilot.minVel;
  document.getElementById(partId + "-skid").innerHTML =
    "Derrapagem: " + carPilot.skid;
}