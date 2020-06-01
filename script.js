let amountofColumns = 2;
let amountofRows = 1;
let coloring = false

function addColumn() {
    let mainGrid = document.getElementById("main-grid");
    let allRows = document.querySelectorAll("tr");
    let rowCounter = 0;

    for(let i = 0; i < amountofRows; i++) {
        let cell = document.createElement("td");
        initializeCell(cell)
        allRows[rowCounter].appendChild(cell);
        rowCounter++;
    }
    amountofColumns++;
}

function addRow() {
    let mainGrid = document.getElementById("main-grid");
    let newRow = document.createElement("tr");

    for(let i = 0; i < amountofColumns; i++) {
        let cell = document.createElement("td");
        initializeCell(cell)
        cell.classList.add("uncolored");
        newRow.appendChild(cell);
    }
    mainGrid.appendChild(newRow);
    amountofRows++;
}


function removeRow() {
    let mainGrid = document.getElementById("main-grid");
    mainGrid.deleteRow(amountofRows-1);
    amountofRows--;
}

function removeColumn() {
    let mainGrid = document.getElementById("main-grid");
    let allRows = document.querySelectorAll("tr");
    let rowCounter = 0;

    for(let i = 0; i < amountofRows; i++) {
        allRows[rowCounter].removeChild(allRows[rowCounter].lastChild);
        rowCounter++;  
    }
    amountofColumns--;
}

let currentColor = `${document.getElementById("color-select").value}`

function initializeCell(cell) {
    cell.addEventListener("click", changeColor);
    cell.classList.add("uncolored");
    cell.addEventListener("mousedown", e => {
        coloring = true
    });
    cell.addEventListener("mousemove", e => {
        if (coloring) {
            cell.style.backgroundColor = currentColor;
            cell.classList.remove("uncolored");
        }
    });
    cell.addEventListener("mouseup", e => {
        if (coloring) {
            coloring = false;
        }
    })
}

let cells = document.getElementsByTagName("td");
let cellList = [...cells];

for (let i=0; i < cellList.length; i++) {
    const cell = cellList[i];
    initializeCell(cell)
}
function changeColor() {
    this.style.backgroundColor = currentColor;
    this.classList.remove("uncolored")
}
