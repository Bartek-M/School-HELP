// Zadanie 6
// Napisz skrypt, który losuje i wypisuje liczbę na ekran. Jeśli dodatnia i parzysta, to wypisuje malejąco kolejne parzyste nieujemne (zaczynając od podanej). W przeciwnym razie wypisuje na ekranie pionowo tyle razy imię autora skryptu, ile wynosi wartość bezwzględna wylosowanej liczby.

const POCZ = -10,
    KON = 10;

var los = Math.floor(Math.random() * (KON - POCZ) + POCZ);
document.write(`<p>Wylosowano ${los} z zakresu [${POCZ}; ${KON})</p>`);

if (los > 0 && los % 2 == 0) {
    document.write("Malejąco kolejne parzyste nieujemne: ");
    for (var i = los; i >= 0; i--) {
        if (i % 2) continue;
        document.write(`${i} `);
    }
} else {
    var imie;

    do {
        imie = prompt("Jak masz na imię:");
    } while (!isNaN(imie));

    var bezw = Math.abs(los);
    for (var i = 0; i < bezw; i++) {
        document.write(`<p>${imie}</p>`);
    }
}
