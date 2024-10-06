// Zadanie 2
// Napisz skrypt, który losuje liczbę z danego zakresu wartości dotąd, aż wylosuje liczbę podzielną przez k. Skrypt wszystkie wylosowane wartości wypisuje poziomo czytelnie na ekran. Po zakończeniu losowania wypisuje komunikat o ilości wylosowanych liczb. W nagrodę:
// a)	wyświetla w oknie przeglądarki tyle rzędów gwiazdek po 20 gwiazdek w każdym, ile było wylosowanych liczb
// b)	wyświetla w oknie przeglądarki tyle rzędów gwiazdek, ile było wylosowanych liczb w postaci trójkąta prostokątnego, tzn:
//      *
//      **
//      ***
//      ****
//       czyli zaczynamy jedną gwiazdką, w każdym następnym wierszu jest o 1 więcej, a w ostatnim wierszu jest tyle gwiazdek, ile było wylosowanych liczb.
// Zakres losowania i wartość k zdeklaruj jako stałe. Przetestuj skrypt dla różnych wartości stałych.

const POCZ = -10,
    KON = 10,
    K = 3,
    G = 20;

var ilosc = 0;

document.write(`<p>Losowanie z zakresu [${POCZ}; ${KON}):</p>`);
do {
    var los = Math.floor(Math.random() * (KON - POCZ) + POCZ);
    document.write(`${los} `);
    ilosc++;
} while (los % K != 0);

document.write(`<p>Ilość wylosowanych: ${ilosc}</p>`);

// A)
var prost = "";

for (var i = 0; i < ilosc; i++) {
    for (var j = 0; j < G; j++) {
        prost += "* ";
    }

    prost += "<br/>";
}

document.write("<h4>A)</h4>");
document.write(prost);

// B) 
var troj = ""

for (var i = 1; i <= ilosc; i++) {
    for (var j = 0; j < i; j++) {
        troj += "* ";
    }

    troj += "<br/>";
}

document.write("<h4>B)</h4>");
document.write(troj)