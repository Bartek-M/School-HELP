// Utwórz przycisk, który będzie zmieniał kolor swojego tekstu na wylosowany RGB.
function losujKolor(POCZ, KON) {
    let r = Math.floor(Math.random() * (KON - POCZ + 1) + POCZ);
    let g = Math.floor(Math.random() * (KON - POCZ + 1) + POCZ);
    let b = Math.floor(Math.random() * (KON - POCZ + 1) + POCZ);

    return `rgb(${r}, ${g}, ${b})`; // CSS -> rgb(r, g, b)
}

window.onload = function() {
    const POCZ = 0, KON = 255; 
    
    const przycisk = document.querySelector("#zmien-kolor"); // # - id | . - class
    const przycisk2 = document.getElementById("zmien-kolor2")

    // Zmiana koloru tekstu przycisku 
    przycisk.addEventListener("click", function () {
        przycisk.style.color = losujKolor(POCZ, KON);
    })

    // Zmiana tła całej strony
    przycisk2.addEventListener("click", function () {
        document.body.style.backgroundColor = losujKolor(POCZ, KON); // background-color -> backgrounColor
    })
}  