// Zadanie 7
// Napisz skrypt, który losuje dwie różne liczby z danego zakresu i wypisuje je na ekran. Następnie skrypt wyświetla poziomo czytelnie malejąco kolejne parzyste z zakresu, którego krańce zostały wylosowane.

const POCZ = -10,
    KON = 10;

var los2,
    los1 = Math.floor(Math.random() * (KON - POCZ) + POCZ);

do {
    los2 = Math.floor(Math.random() * (KON - POCZ) + POCZ);
} while (los2 == los1); // wychodzimy jak są różne -> los2 != los1 -> los2 == los1

document.write(
    `<p>Wylosowano z zakresu [${POCZ}; ${KON}): ${los1}, ${los2}</p>`
);

var start = Math.max(los1, los2);
var koniec = Math.min(los1, los2);

document.write(`<p>Malejące, parzyste z zakresu: [${start}, ${koniec}]:</p>`);

for (var i = start; i >= koniec; i--) {
    if (i % 2 == 0) document.write(`${i} `);
}
