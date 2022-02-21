let priceBread = 0
let priceHamburguer = 0
let priceSalad = 0
let priceCheese = 0
let priceOrder = 0
let bread = ""
let hamburguer = ""
let salad = ""
let cheese = ""

// Function that shows order 
function showOrder() {

    getitens()

    findPrice()

    document.getElementById("pao").innerHTML = "Pão " + bread + " R$ " + priceBread;
    document.getElementById("hamburguer").innerHTML = "Hamburguer " + hamburguer + " R$ " + priceHamburguer;
    document.getElementById("salad").innerHTML = "Tipo de salada: " + salad + " R$ " + priceSalad;
    document.getElementById("cheese").innerHTML = "Queijo " + cheese + " R$ " + priceCheese;

    sumOrder()

    document.getElementById("total").innerHTML = "Total do pedido: R$ " + priceOrder;

}
// Function that searches the selected items 
function getitens() {
    bread = document.querySelector('input[name=bread]:checked').value;
    hamburguer = document.querySelector('input[name=hamburguer]:checked').value;
    salad = document.querySelector('input[name=salad]:checked').value;
    cheese = document.querySelector('input[name=cheese]:checked').value;
}
// Function that determines the price of items 
function findPrice() {

    if (bread === "Francês") {
        priceBread = 3;
    } else if (bread === "Australiano") {
        priceBread = 8;
    } else if (bread === "Brioche") {
        priceBread = 6;
    }
    if (hamburguer === "Picanha") {
        priceHamburguer = 13;
    } else if (hamburguer === "Costela") {
        priceHamburguer = 10;
    } else if (hamburguer === "Vegano") {
        priceHamburguer = 12;
    }
    if (salad === "Alface") {
        priceSalad = 1.50;
    } else if (salad === "Tomate") {
        priceSalad = 1.50;
    } else if (salad === "Sem Salada") {
        priceSalad = 0;
    }
    if (cheese === "Muçarela") {
        priceCheese = 3;
    } else if (cheese === "Prato") {
        priceCheese = 3;
    } else if (cheese === "Cheddar") {
        priceCheese = 5;
    }
}
// Function that calculates total order price 
function sumOrder() {
    priceOrder = priceBread + priceHamburguer + priceSalad + priceCheese;
}