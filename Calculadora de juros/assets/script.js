const database = [];
let counter = 0;

const defaultInterest = 0.02;
const dayInterest = 0.001;


function insertData() {

    let id1 = `client-name${counter}`;
    let id2 = `due-date${counter}`;
    let id3 = `value${counter}`;
    let id4 = `actual-value${counter}`;

    let newInput = readData();

    if (validation(newInput) === false) {
        return false
    };

    database.push(newInput);

    let table = document.getElementById("table");
    let row = document.createElement("tr");
    let cell1 = document.createElement("td");

    let name = document.createTextNode(newInput.clientName);
    let cell2 = document.createElement("td");

    let date = document.createTextNode(newInput.dueDate);
    let cell3 = document.createElement("td");

    let amount = document.createTextNode(`R$ ${newInput.pucharseAmount}`);
    let cell4 = document.createElement("td");

    cell1.appendChild(name);
    cell2.appendChild(date);
    cell3.appendChild(amount);

    cell1.setAttribute('id', id1);
    cell2.setAttribute('id', id2);
    cell3.setAttribute('id', id3);
    cell4.setAttribute('id', id4);

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);

    table.appendChild(row);

    let today = new Date();
    let day = today.getDate()
    let month = today.getMonth()
    let year = today.getFullYear()
    let weekDay = today.getDay()
    let week = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]
    let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    document.getElementById("today").innerHTML = `Hoje é ${week[weekDay]}, ${day} de ${months[month]} de ${year}`


    counter += 1

    clearInputs()
}

function actualValueCalc() {

    const actualValue = database.map(function (object) {
        let value = parseFloat(object.pucharseAmount) +
            (parseFloat(object.pucharseAmount) * parseFloat(defaultInterest)) +
            (parseFloat(object.pucharseAmount) * parseFloat(dayInterest) * getDaysOfDelay(object.dueDate));
        return value
    })

    database.forEach((element, i) => {

                element.actualValue = actualValue[i]
                document.getElementById("actual-value" + i).innerHTML = "R$ " + actualValue[i].toFixed(2);
                
    }
    
    )}
            function getDaysOfDelay(dueDate) {

                let date1 = new Date(dueDate);
                let date2 = new Date();

                let Difference_In_Time = date2.getTime() - date1.getTime();

                let Difference_In_Days = (Math.floor(Difference_In_Time / (1000 * 3600 * 24)) - 1);

                console.log(Difference_In_Days)
                return Difference_In_Days

            }

            function readData() {
                let newInput = {}

                newInput.clientName = document.getElementById("client-name").value;
                newInput.dueDate = document.getElementById("due-date").value;
                newInput.pucharseAmount = document.getElementById("purchase-amount").value;

                return newInput
            }

            function validation(newInput) {
                if (newInput.clientName === "" || newInput.dueDate === "" || newInput.pucharseAmount === "") {
                    alert("Preencha todos os campos")
                    return false
                }

                return true
            }

            function clearInputs() {
                document.getElementById("client-name").value = "";
                document.getElementById("due-date").value = "";
                document.getElementById("purchase-amount").value = "";
            }