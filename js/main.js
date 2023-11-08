const start=document.getElementById("start");
const container=document.getElementById("griglia");
let celle;

// CLICK START

start.addEventListener("click", function() {
    container.innerHTML="";
    const difficolta=document.getElementById("selettore").value
    // condizioni
    if (difficolta=="dif1") {celle=100;}
    else if (difficolta=="dif2") {celle=81;}
    else if (difficolta=="dif3") {celle=49;}
    else {return;}
    // genera celle
    generaGrid(container, "div", "quadrato", difficolta, celle)
});

// FUNZIONI

function generaGrid (contenitore, elemento, classe1, classe2, celle) {
    for (let i = 1; i <= celle; i++) {
        // crea elemento
        const square= document.createElement(elemento);
        // aggiunge classi
        square.classList.add(classe1);
        square.classList.add(classe2);
        // attacca nel DOM
        contenitore.append(square);
        // aggiunge scritta
        square.innerText = i;
        // aggiunge evento click
        square.addEventListener("click", function() {
            console.log(i);
            square.classList.toggle("selected");
        })
    }
}

