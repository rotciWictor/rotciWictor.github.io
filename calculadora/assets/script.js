
function result(){

let number1 = parseFloat(document.getElementById("first-operation").value);
let number2 = parseFloat(document.getElementById("second-operation").value);
let oper = document.getElementById("oper").value
let resultado = 0

if (oper == 'somar'){
    resultado = number1+number2
}
if (oper == 'subtrair'){
    resultado = number1-number2}
if( oper == 'multiplicar')
{ resultado = number1*number2}
}
if(oper == 'dividir') 
{ resultado =  number1 / number2
}
return resultado

function mostrarresultado(){
    let resultado = result()
    document.getElementById("result").innerHTML = resultado
}