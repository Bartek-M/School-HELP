// Zadanie_4
// Zdeklaruj dwie stałe o wartościach -20 i 60
// Wylosuj dwie liczby całkowite dodatnie z zakresu [-20,60), druga wylosowana musi być większa od pierwszej.
// Wyświetl w oknie przeglądarki:
//  zakres losowania,
//  liczby wylosowane
// prostokąt z gwiazdek, który będzie miał wierszy i kolumn tyle, co wylosowane liczby (wierszy mniej niż kolumn!!!!)
// Zmiana wartości stałych ma zmieniać też wyświetlane informacje.

const POCZ = -20,
    KON = 20;

var los1, los2;

// <;) Math.floor(Math.random() * (end - start) + start)
// <;> Math.floor(Math.random() * (end - start + 1) + start)

do {
    los1 = Math.floor(Math.random() * (KON - POCZ) + POCZ);
    los2 = Math.floor(Math.random() * (KON - POCZ) + POCZ);
} while (los1 <= 0 || los2 <= los1);

document.write(`<p>Zakres losowania: [${POCZ}; ${KON})</p>`);
document.write(`<p>Liczby wylosowane: ${los1}, ${los2}</p>`);

var prost = "";

// wiersze - w dół
for (var i = 0; i < los1; i++) {
    // kolumny - w bok
    for (var j = 0; j < los2; j++) {
        prost += "* ";
    }

    prost += "<br/>"; // nowy wiersz
}

document.write(prost);
