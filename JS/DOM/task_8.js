// 6. Strona jest podzielona na dwa div'y: prawy i lewy. Na stronie znajduje się przycisk. Po naciśnięciu przycisku, kolor prawego diva oraz kolor samego przycisku zmieniają się. Dodatkowo na stronie znajduje się tekst, a po najechaniu na niego kursorem, zmienia się czcionka tekstu.
function losowyKolor() {
    const POCZ = 0, KON = 255;
    
    let r = Math.floor(Math.random() * (KON - POCZ + 1) + POCZ);
    let g = Math.floor(Math.random() * (KON - POCZ + 1) + POCZ);
    let b = Math.floor(Math.random() * (KON - POCZ + 1) + POCZ);

    return `rgb(${r}, ${g}, ${b})`;
}

window.onload = function () {
    let prawy = document.getElementById("prawy");

    let przycisk = document.querySelector("#przycisk-1");
    let tekst = document.querySelector("#tekst");

    przycisk.addEventListener("click", function () {
        let color = losowyKolor()
        prawy.style.backgroundColor = color;
        przycisk.style.backgroundColor = color;
    })

    tekst.addEventListener("mouseover", function () {
        if (!tekst.style.fontSize) tekst.style.fontSize = "1rem";
        tekst.style.fontSize = `calc(${tekst.style.fontSize} + 0.2rem)`;
    })

    // Powrót do oryginalnej
    // tekst.addEventListener("mouseout", function () {
    //     tekst.style.fontSize = "1rem";
    // })
}