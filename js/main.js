const start = document.getElementById("start");
const container = document.getElementById("griglia");
const pointBox = document.getElementById("punti");
let celle;
const nBombe = 16;
let point = 0;
pointBox.innerText = "PUNTI: " + point;

// CLICK START

start.addEventListener("click", function () {
    container.innerHTML = "";
    const difficolta = document.getElementById("selettore").value
    // condizioni
    if (difficolta == "dif1") { celle = 100; }
    else if (difficolta == "dif2") { celle = 81; }
    else if (difficolta == "dif3") { celle = 49; }
    else { return; }
    // genera bombe
    const bombList = genBombe();
    console.log(bombList);
    // genera celle
    generaGridBomb(container, "div", "quadrato", difficolta, celle, bombList, point)


});

// FUNZIONI

// genera griglia
function generaGridBomb(contenitore, elemento, classe1, classe2, celle, arrayBombe, contatorePunti) {
    for (let i = 1; i <= celle; i++) {
        // crea elemento
        const square = document.createElement(elemento);
        // aggiunge classi
        square.classList.add(classe1);
        square.classList.add(classe2);
        // attacca nel DOM
        contenitore.append(square);
        // aggiunge scritta
        square.innerText = i;
        // aggiunge bombe
        if (arrayBombe.includes(i)) {
            square.classList.add("bomb");
        }
        // aggiunge evento click
        square.addEventListener("click", function () {
            console.log(i);
            square.classList.toggle("selected");
            if (square.classList.contains("bomb") == true) {
                square.classList.add("bum");
            }
            else {
                point++;
                pointBox.innerText = "PUNTI: " + point;

            }
        })
    }
}

// genera intero casuale
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//   genera bombe
function genBombe() {

    let i = 1
    let bomba = [];
    do {
        bomba.push(getRndInteger(1, celle));
        i++
    } while (i <= nBombe)
    return bomba;
}