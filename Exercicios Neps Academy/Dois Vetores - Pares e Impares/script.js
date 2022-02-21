const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let even = []
let odd = []
let searchedNumber = 0

// Function who separates the numbers in odd and even
function setEvenNOdd() {

    let even = []
    let odd = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            even.push(array[i])
        } else {
            odd.push(array[i])
            console.log(odd)
            console.log(even)
        }

        document.getElementById("even").innerHTML = even
        document.getElementById("odd").innerHTML = odd
        
    }
    // pertence()
}
// function pertence(){
//     searchedNumber = parseFloat(document.getElementById("n").value)
//     n= false
//     for( let i = 0; i < even.length; i++)
//         if (searchedNumber == even[i]){
//         }
//         if (n === true){
//             document.getElementById("ss").innerHTML = "O numero "+searchedNumber+" pertence aos pares" 
//         }else{
//             document.getElementById("ss").innerHTML = "O numero "+searchedNumber+" não pertence aos pares"
//         }

// }
