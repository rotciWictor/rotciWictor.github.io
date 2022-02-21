let array = []

function getNumbersToArray() {

    array[0] = parseFloat(document.getElementById("number1").value)
    array[1] = parseFloat(document.getElementById("number2").value)
    array[2] = parseFloat(document.getElementById("number3").value)
    array[3] = parseFloat(document.getElementById("number4").value)

    document.getElementById("display1").innerHTML = array[0]
    document.getElementById("display2").innerHTML = array[1]
    document.getElementById("display3").innerHTML = array[2]
    document.getElementById("display4").innerHTML = array[3]
}

function backwards() {

    getNumbersToArray()
    
    let n = 0
    let array2 = []
    for (let i = array.length - 1; i >= 0; i--) {
        array2[n] = array[i]
        n = n + 1 
    }
    array = array2
    document.getElementById("display1").innerHTML = array[0]
    document.getElementById("display2").innerHTML = array[1]
    document.getElementById("display3").innerHTML = array[2]
    document.getElementById("display4").innerHTML = array[3]
}
function crescent() {
    
    getNumbersToArray()

    for (let i = 0; i < array.length; i++) { 
        for (let j = 0; j < (array.length - i - 1); j++) { 
                 if(array[j] > array[j+1]) {
                         let holded= array[j]; 
              array[j] = array[j+1]; 
              array[j+1] = holded; 
                 }
        }
    }
    document.getElementById("display1").innerHTML = array[0]
    document.getElementById("display2").innerHTML = array[1]
    document.getElementById("display3").innerHTML = array[2]
    document.getElementById("display4").innerHTML = array[3]
}


