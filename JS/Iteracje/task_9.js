// Zadanie 9
// Napisz skrypt, który wymusza losowanie liczby dodatniej i podzielnej przez k, następnie wypisuje poziomo czytelnie na ekran n wartości podzielnych przez k rosnąco, zaczynając od wylosowanej. W nowym wierszu wypisuje również informację o sumie wszystkich wypisanych liczb.

const POCZ = -10,
    KON = 10,
    K = 3,
    N = 5;

var los,
    suma = 0;

do {
    los = Math.floor(Math.random() * (KON - POCZ) + POCZ);
} while (los % K || los <= 0);

document.write(`<p>Wylosowano ${los} z zakresu [${POCZ}; ${KON})</p>`);
document.write(
    `<p>${N} liczb całkowitych podzielnych przez ${K} od ${los}</p>`
);

for (var i = 0; i < N; i++) {
    document.write(`${los} `);
    suma += los;
    los += K;
}

document.write(`<p>Suma wszystkich wypisanych = ${suma}</p>`);
