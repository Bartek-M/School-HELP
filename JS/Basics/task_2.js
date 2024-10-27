// Zadanie 2
// Zakres losowania i wartość k zdeklaruj jako stałe. Przetestuj skrypt dla różnych wartości stałych.
const POCZ = -20, KON = 20, K = 3, N = 20;

// Napisz skrypt, który losuje liczbę z danego zakresu wartości dotąd, aż wylosuje liczbę podzielną przez k. Skrypt wszystkie wylosowane wartości wypisuje poziomo czytelnie na ekran. Po zakończeniu losowania wypisuje komunikat o ilości wylosowanych liczb.
var los, ilosc = 0;
var text = `Losowanie liczby podzielnej przez ${K} z zakresu <${POCZ}; ${KON}): `

do {
    los = Math.floor(Math.random() * (KON - POCZ) + POCZ);
    text += `${los}, `
    ilosc++;
} while (los % K != 0);

text += `<br/>Wylosowano ${los}, po ${ilosc} próbach.<br/>`
document.write(text)

// a)	wyświetla w oknie przeglądarki tyle rzędów gwiazdek po 20 gwiazdek w każdym, ile było wylosowanych liczb
var prostText = "";
for (let i = 0; i < ilosc; i++) { // - wiersze
    prostText += "<br/>";

    for (let j = 0; j < N; j++) { // - kolumny
        prostText += "* "
    }
}
document.write(prostText);

// b)	wyświetla w oknie przeglądarki tyle rzędów gwiazdek, ile było wylosowanych liczb w postaci trójkąta prostokątnego, tzn:
var gwiazdText = "<br/>"
for (let i = 1; i <= ilosc; i++) { 
    gwiazdText += "<br/>"

    // ilosc = 5, i = 0
    // i < 5

    // 1, 2, 3, 4, 5
    
    // * 1
    // * * 2
    // * * * 3
    // * * * * 4
    // * * * * * 5

    for (let j = 0; j < i; j++) {
        gwiazdText += "* "
    }
}

document.write(gwiazdText)