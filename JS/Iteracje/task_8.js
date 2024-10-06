// Zadanie 8
// Napisz skrypt, który losuje n liczb z określonego zakresu, wyświetla je w przeglądarce i na zakończenie wyświetla poniższe informacje:
// - ilość wylosowanych podzielnych przez k
// - ilość wylosowanych zer
// - suma wylosowanych liczb

const POCZ = -10,
    KON = 10,
    K = 3,
    N = 5;

var suma = 0,
    ilosc_k = 0,
    ilosc_z = 0;

for (var i = 0; i < N; i++) {
    var los = Math.floor(Math.random() * (KON - POCZ + 1) + POCZ);

    if (los % K == 0) ilosc_k++;
    if (los == 0) ilosc_z++;

    suma += los;
}

document.write(`<p>Losowano z zakresu [${POCZ}; ${KON}]</p>`);
document.write(`<p>Ilość wylosowanych podzielnych przez ${K} = ${ilosc_k}</p>`);
document.write(`<p>Ilość wylosowanych 0 = ${ilosc_z}</p>`);
document.write(`<p>Suma wylosowanych liczb = ${suma}</p>`);
