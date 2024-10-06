// Zadanie 1
// Napisz skrypt, który losuje liczbę z danego zakresu wartości, wypisuje ją na ekran oraz wypisuje informację o parzystości tej liczby i jej znaku (dodatnia, ujemna, zero).
// Jeśli będzie to liczba parzysta, to po kilku wolnych liniach wypisze poziomo czytelnie n kolejnych parzystych rosnąco, w przeciwnym razie w ten sam sposób wypisze n kolejnych malejąco.
// Zakres losowania i wartość n zdeklaruj jako stałe. Przetestuj skrypt dla różnych wartości stałych.

const POCZ = -10,
    KON = 10,
    N = 5;

var los = Math.floor(Math.random() * (KON - POCZ) + POCZ);
document.write(`<p>Wylosowano ${los} z zakresu [${POCZ}; ${KON})</p>`);

document.write(
    `<p>Liczba jest ${los % 2 == 0 ? "parzysta" : "nieparzysta"}.</p>`
);

if (los > 0) document.write("<p>Liczba jest dodatnia.</p>");
else if (los < 0) document.write("<p>Liczba jest ujemna.</p>");
else document.write("<p>Liczba jest zerem.</p>");

for (var i = 0; i < N; i++) {
    document.write(`${los}, `);

    if (los % 2 == 0) los += 2;
    else los -= 2;
}
