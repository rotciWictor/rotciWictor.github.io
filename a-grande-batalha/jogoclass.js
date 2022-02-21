class Hero {
  constructor(name, type, universe, st, agi, int, atksound, atk2sound, atk3sound, img, rageimg) {
    this.name = name //Nome
    this.type = type //Tipo
    this.universe = universe //Universo. Ex.: Disney, Marvel, League of Legends
    this.st = st //Força
    this.agi = agi //Agilidade
    this.int = int //Inteligência
    this.hp = this.st * 12 //Pontos de Vida
    this.hpactual = this.hp // Pontos de Vida atualizado
    this.mp = this.int * 7 //Mana (Pontos para execução de habilidades)
    this.mpactual = this.mp
    this.rage = 0
    this.rageactual = this.rage
    this.def = this.agi * 2 //Defesa
    this.atkPower = 20 //Ataque base
    this.damage = 0 //força do ataque da vez (danocausado)
    this.recoil = this.hp * 0.05
    this.atksound = atksound;
    this.atk2sound = atk2sound;
    this.atk3sound = atk3sound;
    this.img = img
    this.rageimg = rageimg
    this.dmgUp()

  }

  /*
      Método que ajusta os pontos de ataque do personagem com base no seu tipo
  */
  dmgUp() {
    /*	
          Types: 
        1 - Strength
        2 - Agility
        3 - Intelligence
      */
    switch (this.type) {
      case 1:
        this.atkPower += this.st
        break;

      case 2:
        this.atkPower += this.agi
        break;

      case 3:
        this.atkPower += this.int
        break;

    }
  }

  lightAtk() {
    this.damage = Math.ceil(this.atkPower * ((Math.random() * 0.4) + 0.4))
  }

  heavyAtk() {
    this.damage = Math.ceil(this.atkPower * ((Math.random() * 0.3) + 0.7))
  }

  special() {
    this.damage = Math.ceil(this.atkPower * ((Math.random() * 0.5) + 1))
  }

}
const backgrounds = ["assets/images/backgrounds/battleback0.png", "assets/images/backgrounds/battleback1.png", "assets/images/backgrounds/battleback2.png", "assets/images/backgrounds/battleback3.png", "assets/images/backgrounds/battleback4.png", "assets/images/backgrounds/battleback5.png", "assets/images/backgrounds/battleback6.png", "assets/images/backgrounds/battleback7.png", "assets/images/backgrounds/battleback8.png", "assets/images/backgrounds/battleback9.png"]
const types = ["", "Força", "Agilidade", "Inteligência"]
const soundeffect = document.getElementById("soundeffect");
const soundeffect2 = document.getElementById("soundeffect2");
const music = document.getElementById("theme")
const textBox = document.getElementById("text-box")
music.setAttribute("src", "assets/sounds/y2meta.com - Pokemon Stadium Intro HD (256 kbps) (1).mp3")
music.volume = 1;
$("#teladeinicio").mousemove(function () {
  music.play();
});


//tela de inicio
function start() {
  document.querySelector("#escolhap1").setAttribute('src', 'assets/images/nada.png');
  document.querySelector("#escolhap2").setAttribute('src', 'assets/images/nada.png');
  document.getElementById('teladeinicio').style.display = 'none';
  document.getElementById('parte1').style.display = 'flex';
  music.setAttribute("src", "assets/sounds/y2meta.com - Naruto Ultimate Ninja Storm 2 OST - Character Select (256 kbps).mp3")
  music.volume = 1;
  music.play();

}

// muda a tela de seleção de personagens para campo de batalha
// esconde a seleção e mostra a batalha 
function batalhar() {
  document.getElementById('teladeinicio').style.display = 'none';
  document.getElementById('parte1').style.display = 'none';
  document.getElementById('parte2').style.display = 'block';
  music.pause()
  music.setAttribute("src", "assets/sounds/y2meta.com - Pokemon Red, Yellow, Blue Battle Music- Trainer (256 kbps).mp3")
  music.volume = 0.4;
  music.play();
  randomBackground()
  definesTurn()
}
//Define um fundo para a batalha randomicamente
function randomBackground() {
  const randomNumber = Math.floor(Math.random() * 10)
  const background = backgrounds[randomNumber]
  const groundColors = ["#72ad73", "#7e9f73", "#cdd0cf", "#f1c66a", "#e6a959", "#8b6c56", "#cc9b4d", "#ba5945", "#4d6461", "#93745c"]
  document.getElementById("battle-area").style.backgroundImage = `url("${background}"`
  document.getElementById("ground-p1").setAttribute("style", `background: ${groundColors[randomNumber]};box-shadow: inset 0 0 1em black;`)
  document.getElementById("ground-p2").setAttribute("style", `background: ${groundColors[randomNumber]};box-shadow: inset 0 0 1em black;`)
}

// personagens criados pela class Hero pré definidos
let mula = new Hero("Mula sem Cabeça", 2, "Malora", 20, 26, 10, "assets/sounds/mula/mula1.wav", "assets/sounds/mula/mula2.wav", "assets/sounds/mula/mula3.wav", "assets/images/mula/mula1.png", "assets/images/mula/mula2.png");
let monica = new Hero("Mônica", 3, "Bairro do Limoeiro", 15, 16, 18, 'assets/sounds/monica/monica1.mp3', 'assets/sounds/monica/monica2.mp3', 'assets/sounds/monica/monica3.mp3', "assets/images/monica/monica1.png", "assets/images/monica/monica2.png");
let princesa = new Hero("Xena", 1, "Guerreira", 23, 20, 20, 'assets/sounds/chena/chena1.mp3', 'assets/sounds/chena/chena2.mp3', 'assets/sounds/chena/chena3.mp3', "assets/images/princesa/princesa1.png", "assets/images/princesa/princesa2.png");
let darth = new Hero("Darth Vader", 1, "Galáxia muito distante", 33, 13, 20, 'assets/sounds/darth/darth1.wav', 'assets/sounds/darth/darth2.wav', 'assets/sounds/darth/darth3.wav', "assets/images/darth/darth1.png", "assets/images/darth/darth2.png");
let chucky = new Hero("Chucky", 1, "Brinquedo Assassino", 25, 20, 15, 'assets/sounds/chucky/chucky1.mp3', 'assets/sounds/chucky/chucky2.mp3', 'assets/sounds/chucky/chucky3.mp3', "assets/images/chucky/chucky1.png", "assets/images/chucky/chucky2.png");
let freddy = new Hero("Freddy", 2, "Animatronic", 18, 35, 25, 'assets/sounds/freddy/freddy1.wav', 'assets/sounds/freddy/freddy2.mp3', 'assets/sounds/freddy/freddy3.wav', "assets/images/freddy/freddy1.png", "assets/images/freddy/freddy2.png");
let pintinho = new Hero("Pintinho Amarelinho", 3, "Fazenda", 15, 20, 30, 'assets/sounds/pintinho/pintinho1.mp3', 'assets/sounds/pintinho/pintinho2.mp3', 'assets/sounds/pintinho/pintinho3.mp3', "assets/images/pintinho/pintinho1.png", "assets/images/pintinho/pintinho2.png");
let lula = new Hero("Lula Molusco", 3, "Fenda do biquini", 15, 12, 12, 'assets/sounds/lula/lula1.mp3', 'assets/sounds/lula/lula2.mp3', 'assets/sounds/lula/lula3.mp3', "assets/images/lula/lula1.png", "assets/images/lula/lula2.png");
let yoshi = new Hero("Yoshi", 2, "Mario World", 19, 30, 12, 'assets/sounds/yoshi/yoshi1.mp3', 'assets/sounds/yoshi/yoshi2.mp3', 'assets/sounds/yoshi/yoshi3.mp3', "assets/images/yoshi/yoshi1.png", "assets/images/yoshi/yoshi2.png");
let bart = new Hero("Bart Simpson", 2, "Springfield", 16, 25, 10, 'assets/sounds/bart/bart1.mp3', 'assets/sounds/bart/bart2.mp3', 'assets/sounds/bart/bart3.mp3', "assets/images/bart/bart1.png", "assets/images/bart/bart2.png");
let boitata = new Hero("Boitatá", 1, "No rio mais próximo", 29, 18, 16, 'assets/sounds/boitata/boitata1.mp3', 'assets/sounds/boitata/boitata2.mp3', 'assets/sounds/boitata/boitata3.mp3', "assets/images/boitata/boitata1.png", "assets/images/boitata/boitata2.png");
let charizard = new Hero("Charizard", 1, "Kanto", 30, 25, 18, 'assets/sounds/charizard/charizard1.mp3', 'assets/sounds/charizard/charizard2.mp3', 'assets/sounds/charizard/charizard3.mp3', "assets/images/charizard/charizard1.png", "assets/images/charizard/charizard2.png");
let canarinho = new Hero("Canarinho Pistola", 2, "Granja Comary", 23, 32, 25, 'assets/sounds/canarinho/canarinho1.mp3', 'assets/sounds/canarinho/canarinho2.mp3', 'assets/sounds/canarinho/canarinho3.mp3', "assets/images/canarinho/canarinho1.png", "assets/images/canarinho/canarinho2.png");
let relampago = new Hero("Relâmpago McQueen", 2, "Radiator Springs", 21, 35, 20, 'assets/sounds/relampago/relampago1.mp3', 'assets/sounds/relampago/relampago2.mp3', 'assets/sounds/relampago/relampago3.mp3', 'assets/images/relampago/relampago1.png', 'assets/images/relampago/relampago2.png');
let tanjiro = new Hero("Tanjiro Kamado", 1, "Caçador de demônios", 28, 28, 25, "assets/sounds/tanjiro/tanjiro1.mp3", "assets/sounds/tanjiro/tanjiro2.mp3", "assets/sounds/tanjiro/tanjiro3.mp3", "assets/images/tanjiro/tanjiro1.png", "assets/images/tanjiro/tanjiro2.png");

//variaveis globais:
//vez - indica qual player é a vez
// player1 - recebe o jogador da vez
// player2 - recebe o jogador da vez
let vez = 1;
let player1;
let player2;
let tag1;
let prob;

// escolhe a personagem de acordo com o que o usuario escolheu 
// lista de personagens pré definidas 
function escolherpersonagem(value) {
  tag1 = value;
  document.getElementById("btn-alternar").style.display = 'block';
  document.querySelectorAll(".imgpoke").forEach(element => {
    element.setAttribute('src', 'assets/images/pokeball.png')
  });
  document.querySelector(`#img${value}`).setAttribute('src', 'assets/images/pokebola-aberta.png');
  soundeffect2.setAttribute('src', 'assets/sounds/pokeballsound.mp3');
  soundeffect2.play();

  if (value === 1) {
    aparecerimagem(boitata.img, boitata);
  } else if (value === 2) {
    aparecerimagem(bart.img, bart);
  } else if (value === 3) {
    aparecerimagem(yoshi.img, yoshi);
  } else if (value === 4) {
    aparecerimagem(lula.img, lula);
  } else if (value === 5) {
    aparecerimagem(pintinho.img, pintinho);
  } else if (value === 6) {
    aparecerimagem(freddy.img, freddy);
  } else if (value === 7) {
    aparecerimagem(chucky.img, chucky);
  } else if (value === 8) {
    aparecerimagem(darth.img, darth);
  } else if (value === 9) {
    aparecerimagem(princesa.img, princesa);
  } else if (value === 10) {
    aparecerimagem(monica.img, monica);
  } else if (value === 11) {
    aparecerimagem(mula.img, mula);
  } else if (value === 12) {
    aparecerimagem(charizard.img, charizard);
  } else if (value === 13) {
    aparecerimagem(canarinho.img, canarinho);
  } else if (value === 14) {
    aparecerimagem(relampago.img, relampago);
  } else if (value === 15) {
    aparecerimagem(tanjiro.img, tanjiro);
  }
}

function alternarVez() {
  vez = 2;
  document.getElementById("btn-alternar").disabled = true;
  document.getElementById(`${tag1}`).setAttribute("onclick", "alertar()");
  document.getElementById(`img${tag1}`).className = "imgEscolhida";
  document.getElementById("choose-phrase").innerHTML = "Player2 - Escolha seu pokémon:"
}

function finalizarSelecao() {
  document.getElementById("btn-finalizarSelecao").disabled = true;
  document.getElementById("div-btn").style.display = "flex";
  document.querySelectorAll(".poke").forEach(element => {
    element.disabled = true
  });
}
function reselect() {
  vez = 1;
  document.getElementById("div-btn").style.display = "none";
  document.getElementById("choose-phrase").innerHTML = "Player1 - Escolha seu pokémon:"
  document.querySelector(".imgEscolhida").className = "imgpoke"
  document.querySelectorAll(".imgpoke").forEach(element => {
    element.setAttribute('src', 'assets/images/pokeball.png')
  });
  document.querySelectorAll(".poke").forEach(element => {
    element.disabled = false;
  });
  document.querySelectorAll(".poke").forEach(element => {
    element.setAttribute("onclick", `escolherpersonagem(${element.getAttribute("id")})`);
  });

  document.getElementById("btn-alternar").disabled = false;
  document.getElementById("btn-finalizarSelecao").disabled = false;
  document.getElementById("btn-alternar").style.display = 'none';
  document.getElementById("btn-finalizarSelecao").style.display = 'none';

  document.querySelector("#img-player1").setAttribute('src', 'assets/images/nada.png');
  document.querySelector("#escolhap1").setAttribute('src', 'assets/images/nada.png');
  document.querySelector("#escolhap2").setAttribute('src', 'assets/images/nada.png');
  document.querySelector("#img-player2").setAttribute('src', 'assets/images/nada.png');


  document.getElementById("nome-personagem-p1").innerHTML = "";
  document.getElementById("universo-personagem-p1").innerHTML = "";
  document.getElementById("player1-monster-name").innerHTML = "";
  document.getElementById("hp1").innerHTML = "";
  document.getElementById("mp1").innerHTML = "";
  document.getElementById("st1").innerHTML = "";
  document.getElementById("agi1").innerHTML = "";
  document.getElementById("int1").innerHTML = "";
  document.getElementById("type1").innerHTML = "";
  document.getElementById("description-p1").innerHTML = "";

  document.getElementById("nome-personagem-p2").innerHTML = "";
  document.getElementById("universo-personagem-p2").innerHTML = "";
  document.getElementById("player2-monster-name").innerHTML = "";
  document.getElementById("hp2").innerHTML = "";
  document.getElementById("mp2").innerHTML = "";
  document.getElementById("st2").innerHTML = "";
  document.getElementById("agi2").innerHTML = "";
  document.getElementById("int2").innerHTML = "";
  document.getElementById("type2").innerHTML = "";
  document.getElementById("description-p2").innerHTML = "";
}

// mostra a imagem do personagem escolhido na tela de seleção de personagens e 
//no campo de batalha (imagem e nome)
function aparecerimagem(imagem, selecionado) {
  if (vez === 1) {
    document.querySelector("#img-player1").setAttribute('src', imagem);
    document.querySelector("#escolhap1").setAttribute('src', imagem);
    player1 = selecionado;
    //vez = 2;
    document.getElementById("nome-personagem-p1").innerHTML = player1.name;
    document.getElementById("universo-personagem-p1").innerHTML = player1.universe;
    document.getElementById("player1-monster-name").innerHTML = player1.name;
    document.getElementById("actual-hp-player1").innerHTML = player1.hp;
    document.getElementById("total-hp-player1").innerHTML = player1.hp;
    document.getElementById("actual-mp-player1").innerHTML = player1.mp;
    document.getElementById("total-mp-player1").innerHTML = player1.mp;
    document.getElementById("hp1").innerHTML = `HP:${player1.hp}`;
    document.getElementById("mp1").innerHTML = `MP:${player1.mp}`;
    document.getElementById("st1").innerHTML = `ST:${player1.st}`;
    document.getElementById("agi1").innerHTML = `AGI:${player1.agi}`;
    document.getElementById("int1").innerHTML = `INT:${player1.int}`;
    document.getElementById("type1").innerHTML = `TYPE: ${types[player1.type]}`;
    document.getElementById("description-p1").innerHTML = `P1 - ${player1.name}`;

  } else {
    document.getElementById("btn-finalizarSelecao").style.display = 'block';
    document.querySelector("#escolhap2").setAttribute('src', imagem);
    document.querySelector("#img-player2").setAttribute('src', imagem);
    player2 = selecionado;
    //vez = 1;
    document.getElementById("nome-personagem-p2").innerHTML = player2.name;
    document.getElementById("universo-personagem-p2").innerHTML = player2.universe;
    document.getElementById("player2-monster-name").innerHTML = player2.name;
    document.getElementById("actual-hp-player2").innerHTML = player2.hp;
    document.getElementById("total-hp-player2").innerHTML = player2.hp;
    document.getElementById("actual-mp-player2").innerHTML = player2.mp;
    document.getElementById("total-mp-player2").innerHTML = player2.mp;
    document.getElementById("hp2").innerHTML = `HP:${player2.hp}`;
    document.getElementById("mp2").innerHTML = `MP:${player2.mp}`;
    document.getElementById("st2").innerHTML = `ST:${player2.st}`;
    document.getElementById("agi2").innerHTML = `AGI:${player2.agi}`;
    document.getElementById("int2").innerHTML = `INT:${player2.int}`;
    document.getElementById("type2").innerHTML = `TYPE: ${types[player2.type]}`;
    document.getElementById("description-p2").innerHTML = `P2 - ${player2.name}`;

  }
}
// ataques
function lightAttack(player, victim) {
  let attacker = {};
  let attacked = {};
  if (player === 1) {
    attacker = player1
    attacked = player2
    turnp1 += 1
  } else if (player === 2) {
    attacker = player2
    attacked = player1
    turnp2 += 1
  }
  soundeffect2.setAttribute('src', `${attacker.atksound}`);
  soundeffect2.play();
  attacker.lightAtk();
  textNDamage(attacker, attacked, 0)
  updateHP(attacked, attacker, victim,player);
  attacked.rageactual += 10
  $(`#img-player${victim}`).effect("shake");
  updateRG()
  definesTurn();
}

function heavyAttack(player, victim) {
  let attacker = {};
  let attacked = {};
  if (player === 1) {
    attacker = player1
    attacked = player2
    turnp1 += 1
  } else if (player === 2) {
    attacker = player2
    attacked = player1
    turnp2 += 1
  }
  soundeffect2.setAttribute('src', `${attacker.atk2sound}`);
  soundeffect2.play();

  prob = Math.random();
  if (prob <= 0.65) {
    attacker.heavyAtk();
    textNDamage(attacker, attacked, 1)
    updateHP(attacked, attacker, victim, player);
    attacker.mpactual -= 20;
    updateMP();
    attacked.rageactual += 15
    $(`#img-player${victim}`).effect("shake");
    updateRG()
  } else {
    textBox.innerHTML = `${attacker.name} errou o ataque!`
    attacker.mpactual -= 20;
    updateMP();
  }
  definesTurn();
}

function specialAttack(player, victim) {
  let attacker = {};
  let attacked = {};
  if (player === 1) {
    attacker = player1
    attacked = player2
    turnp1 += 1
  } else if (player === 2) {
    attacker = player2
    attacked = player1
    turnp2 += 1
  }
  soundeffect2.setAttribute('src', `${attacker.atk3sound}`);
  soundeffect2.play();

  prob = Math.random();
  if (prob <= 0.4) {
    attacker.special();
    textNDamage(attacker, attacked, 2)
    updateHP(attacked, attacker, victim,player);
    attacker.mpactual -= 50;
    updateMP();
    attacked.rageactual += 30
    $(`#img-player${victim}`).effect("shake");
    updateRG()
  } else {
    textBox.innerHTML = `${attacker.name} errou o ataque!`
    attacker.mpactual -= 50;
    updateMP();
  }

  definesTurn();

}

function recoilAttack(player, victim) {
  let attacker = {};
  let attacked = {};
  if (player === 1) {
    attacker = player1
    attacked = player2
    turnp1 += 1
  } else if (player === 2) {
    attacker = player2
    attacked = player1
    turnp2 += 1
  }
  if ((attacker.hpactual - Math.round(attacker.recoil)) > 0) {
    // soundeffect2.play();
    attacker.heavyAtk();
    textNDamage(attacker, attacked, 3)
    attacker.hpactual -= Math.round(attacker.recoil);
    updateHP(attacked, attacker, victim, player);
    attacked.rageactual += 20
    $(`#img-player${victim}`).effect("shake");
    $(`#img-player${player}`).effect("shake");
    updateRG()
    definesTurn();
  } else {
    textBox.innerHTML = `${attacker.name} não pode realizar esse ataque! Ele poderia causar danos graves à sua própria saúde! Escolha outro ataque!`
    document.getElementById(`#btnOrange${player}`).disabled = true;
    document.getElementById(`#btnOrange${victim}`).disabled = true;
  }
}

function attBoost(player) {
  let boostedPlayer = ""
  if (player === 1) {
    boostedPlayer = player1
  } else if (player === 2) {
    boostedPlayer = player2
  }
  document.querySelector(`#img-player${player}`).setAttribute('src', boostedPlayer.rageimg);
  boostedPlayer.st = Math.round(boostedPlayer.st * 1.25);
  boostedPlayer.agi = Math.round(boostedPlayer.agi * 1.25);
  boostedPlayer.int = Math.round(boostedPlayer.int * 1.25);
  boostedPlayer.dmgUp()
  boostedPlayer.hpactual += Math.round(boostedPlayer.hp * 0.25);
  updateHP(boostedPlayer);
  boostedPlayer.mpactual += Math.round(boostedPlayer.mp * 0.25);
  updateMP();
  boostedPlayer.rageactual = 0;
  updateRG();
  turnp1 = 0;
  turnp2 = 0;
  textBox.innerHTML = `${boostedPlayer.name} teve seus atributos aumentados em 25% <br>`;
  textBox.innerHTML += ` ${boostedPlayer.name} teve ${Math.round(boostedPlayer.hp * 0.25)} de HP recuperado <br>`;
  textBox.innerHTML += ` ${boostedPlayer.name} teve ${Math.round(boostedPlayer.mp * 0.25)} de MP recuperado <br>`;
  definesTurn();
}
// atualiza as barras de hp
function updateHP(attackedPlayer, otherPlayer, victim, player) {
  document.getElementById("actual-hp-player1").innerHTML = player1.hpactual;
  document.getElementById("actual-hp-player2").innerHTML = player2.hpactual;
  const hp1 = (player1.hpactual / player1.hp) * 100;
  const hp2 = (player2.hpactual / player2.hp) * 100;
  document.getElementById("hp-p1").style.setProperty('--hp', hp1);
  document.getElementById("hp-p2").style.setProperty('--hp', hp2);
  if (attackedPlayer.hpactual <= 0) {
    soundeffect.setAttribute('src', 'assets/sounds/ganhador.wav');
    soundeffect.play();
    $(`#player${victim}`).fadeOut();
    $(`#ground-p${player}`).fadeOut();
    $(`.btn`).fadeOut();
    document.getElementById("restart").setAttribute('style','z-index:0;');
    music.pause()
    textBox.innerHTML = `${attackedPlayer.name} desmaiou! ${otherPlayer.name} ganhou!`
  }

}

// atualiza as barras de mp
function updateMP() {
  document.getElementById("actual-mp-player1").innerHTML = player1.mpactual;
  document.getElementById("actual-mp-player2").innerHTML = player2.mpactual;
  const mp1 = (player1.mpactual / player1.mp) * 100;
  const mp2 = (player2.mpactual / player2.mp) * 100;
  document.getElementById("mp-p1").style.setProperty('--mp', mp1);
  document.getElementById("mp-p2").style.setProperty('--mp', mp2);
}
// atualiza as barras de rg
function updateRG() {
  const rg1 = player1.rageactual;
  const rg2 = player2.rageactual;
  document.getElementById("rage-p1").style.setProperty('--rg', rg1);
  document.getElementById("rage-p2").style.setProperty('--rg', rg2);
}

// Define o dano e o mostra
function textNDamage(playerWhoAttacked, otherPlayer, attackType) {
  const damageNow = Math.ceil(playerWhoAttacked.damage * (1 - (player2.def / 100)));
  const attackTypes = ["ATK Fraco", "ATK Forte", "Especial", "ATK com Recuo"]
  otherPlayer.hpactual = otherPlayer.hpactual - damageNow;
  textBox.innerHTML = `${playerWhoAttacked.name} causou ${damageNow} de dano em ${otherPlayer.name} com ${attackTypes[attackType]}`
}

let turnp1 = 0;
let turnp2 = 0;
let first = 0;

// define qual jogador pode jogar desabilitando o atk do outro
function definesTurn() {
  if (turnp1 === 0 && turnp2 === 0) {
    whoPlaysFirst()
  } else if (turnp1 < turnp2) {
    p1 = false;
    p2 = true;
  } else if (turnp1 > turnp2) {
    p1 = true;
    p2 = false;
  } else if (turnp1 === turnp2) {
    if (first === 1) {
      p1 = false;
      p2 = true;
    } else if (first === 2) {
      p1 = true;
      p2 = false;
    }

  }
  document.getElementById("btnFraco1").disabled = p1;
  document.getElementById("btnForte1").disabled = p1;
  document.getElementById("btnEspecial1").disabled = p1;
  document.getElementById("btnOrange1").disabled = p1;
  document.getElementById("btnBlack1").disabled = p1;

  document.getElementById("btnFraco2").disabled = p2;
  document.getElementById("btnForte2").disabled = p2;
  document.getElementById("btnEspecial2").disabled = p2;
  document.getElementById("btnOrange2").disabled = p2;
  document.getElementById("btnBlack2").disabled = p2;

  if (player1.mpactual < 50) {
    document.getElementById("btnEspecial1").disabled = true;
  }
  if (player1.mpactual < 20) {
    document.getElementById("btnForte1").disabled = true;
  }
  if (player1.rageactual < 100) {
    document.getElementById("btnBlack1").disabled = true
  }
  if (player2.mpactual < 50) {
    document.getElementById("btnEspecial2").disabled = true;
  }
  if (player2.mpactual < 20) {
    document.getElementById("btnForte2").disabled = true;
  }
  if (player2.rageactual < 100) {
    document.getElementById("btnBlack2").disabled = true
  }
}
// Define quem joga primeiro comparando as agilidades
function whoPlaysFirst() {
  if (player1.agi > player2.agi) {
    p1 = false
    p2 = true
    first = 1
  } else if (player1.agi < player2.agi) {
    p1 = true
    p2 = false
    first = 2
  } else {
    let luck = Math.random()
    if (luck < 0.5) {
      p1 = false
      p2 = true
      first = 1
    } else {
      p1 = true
      p2 = false
      first = 2
    }
  }
  stPlayer = ""
  ndPlayer = ""
  if (first === 1) {
    stPlayer = player1.name
    ndPlayer = player2.name
  } else {
    stPlayer = player2.name
    ndPlayer = player1.name
  }

  textBox.innerHTML += `${stPlayer} ataca primeiro por ser mais ágil que ${ndPlayer}`

  if (player1.rageactual < 100) {
    document.getElementById("btnBlack1").disabled = true

  }
  if (player2.rageactual < 100) {
    document.getElementById("btnBlack2").disabled = true
  }
}