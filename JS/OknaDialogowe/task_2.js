// Zadanie_2
// Zdeklaruj dwie stałe o wartościach 10 i 50 używając odpowiedniego okna dialogowego zapytaj użytkownika, czy chce wypisać parzyste z zakresu [10, 50]? Skrypt ma wyświetlać w oknie dialogowym z zakresu [10,50] parzyste, gdy odpowiedź była ok, lub nieparzyste gdy odpowiedź była anuluj. Zadbaj o właściwy komunikat w oknie wyświetlającym te liczby.
// Na zakończenie pojawi się zapytanie, czy chcesz całą zabawę powtórzyć jeszcze raz? Wybór ok powtarza działanie skryptu.
// Zmiana wartości stałych ma zmieniać też wyświetlane informacje.

const POCZ = 10,
    KON = 50;

var text;

do {
    parz = confirm(`Czy chcesz wypisać parzyste z zakresu [${POCZ}; ${KON}]?`);

    if (parz) {
        // parzyste
        text = `Liczby parzyste z zakresu [${POCZ}; ${KON}]\n`;

        for (var i = POCZ; i <= KON; i++) {
            if (i % 2 == 0) {
                text += i;

                if (i != KON - (KON % 2)) {
                    text += ", ";
                }
            }
        }
    } else {
        // nieparzyste
        text = `Liczby nieparzyste z zakresu [${POCZ}; ${KON}]\n`;

        for (var i = POCZ; i <= KON; i++) {
            if (i % 2 != 0) {
                text += i;

                if (i != KON - (KON % 2 == 0)) {
                    text += ", ";
                }
            }
        }
    }

    alert(text);
} while (confirm("Czy chcesz włączyć jeszcze raz?"));
