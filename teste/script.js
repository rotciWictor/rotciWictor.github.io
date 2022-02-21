const times = ["Vasco", "Flamengo", "Fluminense", "Botafogo"];
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < times.length; i++) {
    console.log(times[i]);

}

const meuTime = times.map(function (time) {
    console.log(`Meu time é ${time}`)
})

function eUmNumeroPar(numero) {
    return numero % 2 === 0
}

const pares = numeros.filter(eUmNumeroPar)
console.log(pares)

const somar = (valorAnterior, valorAtual) => valorAnterior + valorAtual;
const concatenar = (valorAnterior, valorAtual) => ` ${valorAnterior},${valorAtual}`;

console.log(numeros.reduce(somar, 5))
console.log(`Os principais times do Rio são:${times.reduce(concatenar)}`)