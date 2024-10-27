// Zadanie 3
// Napisz skrypt, który losuje n wartości zero lub jeden, wszystkie wylosowane wartości wypisuje poziomo czytelnie na ekran. Po zakończeniu losowania wypisuje komunikat o ilości wylosowanych jedynek
const N = 5, POCZ = 0, KON = 1
var ilosc = 0, text = "";

for (let i = 0; i < N; i++) {
    var los = Math.floor(Math.random() * (KON - POCZ + 1) + POCZ)
    text += los

    if (i != N - 1) { // N - 1 = nasze ostatnie i
        text += ", "
    }

    if (los == 1) {
        ilosc++;
    }
}

text += `<br/>Wylosowano ${ilosc} jedynek`
document.write(text)