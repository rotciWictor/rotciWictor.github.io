const a = [1, 2, 3, 4, 5];
const b = [6, 7, 8, 9, 10];
var ab = a.reduce((acumulador, elemento) => acumulador += elemento, b.reduce((acumulador, elemento) => acumulador += elemento, 0))
// console.log(ab);

const lista = [{
    id: 1,
    nome: "gol"
  },
  {
    id: 2,
    nome: "ferrari"
  },
  {
    id: 3,
    nome: "camaro :)"
  }
];
const callback = (acumulador, valor) => {
  acumulador[valor.id] = valor.nome
  return acumulador
};
const valorInicial = {};
const carrosIndexadosPorId = lista.reduce(callback, valorInicial);
// console.log(carrosIndexadosPorId[3])

var objs = [{
    first_nom: 'Lazslo',
    last_nom: 'Jamf'
  },
  {
    first_nom: 'Pig',
    last_nom: 'Bodine'
  },
  {
    first_nom: 'Pirate',
    last_nom: 'Prentice'
  }
];

function compare(a, b) {


  if (a.last_nom < b.last_nom) {
    return -1;
  }
  if (a.last_nom > b.last_nom) {
    return 1;
  }
  return 0;
}
console.log(objs)

objs.sort(compare);

console.log(objs)