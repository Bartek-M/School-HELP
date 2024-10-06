// Zadanie 5
// Napisz program, który losuje liczbę z danego zakresu, wypisuje ją na ekran, następnie wypisuje liczbę x podzielną przez k (x jest równe wylosowanej lub jest pierwszą wartością większą od wylosowanej). Następnie skrypt wypisuje poziomo czytelnie rosnąco n kolejnych liczb podzielnych przez k zaczynając od wartości x

const POCZ = -10,
    KON = 10,
    K = 3,
    N = 5;

var los = Math.floor(Math.random() * (KON - POCZ) + POCZ);
document.write(`<p>Wylosowano ${los} z zakresu [${POCZ}; ${KON})</p>`);

var x = los;
while (x % K) {
    x++;
}

for (var i = x; i < n; i++) {
    document.write(`${x} `);
    x += K;
}
