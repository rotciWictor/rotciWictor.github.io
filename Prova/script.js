const list = [];
let counter = 0;

function insertActivity() {

    const id1 = `activity${counter}`;
    const id2 = `date${counter}`;
    const id3 = `button${counter}`;

    let newActivity = readData();

    list.push(newActivity);

    const tbody = document.getElementById("tbody");
    let row = document.createElement("tr");

    const cell1 = document.createElement("td");
    const activity = document.createTextNode(newActivity.newActivity);

    const cell2 = document.createElement("td");
    const date = document.createTextNode(newActivity.date);

    const cell3 = document.createElement("td");
    const button = document.createElement("input");
    button.setAttribute("type", "button");
    button.setAttribute("class", "scribe");
    button.setAttribute("value", "riscar");

    cell1.appendChild(activity);
    cell2.appendChild(date);
    cell3.appendChild(button);

    cell1.setAttribute('id', id1);
    cell2.setAttribute('id', id2);
    cell3.setAttribute('id', id3);

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);

    tbody.appendChild(row);

    let marked = false

    button.addEventListener("click", function () {

        if (marked === false) {
            row.setAttribute("style", "text-decoration: line-through")
            marked = true
        } else {
            row.setAttribute("style", "text-decoration: none")
            marked = false
        }
    })

    clearInputs()
    counter += 1
}

function readData() {
    let newInput = {}

    newInput.newActivity = document.getElementById("new-activity").value;
    newInput.date = document.getElementById("date").value;

    return newInput;
}

function clearInputs() {
    document.getElementById("new-activity").value = "";
    document.getElementById("date").value = "";
}