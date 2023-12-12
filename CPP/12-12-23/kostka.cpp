#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

/*
Napisz program, który będzie symulacją rzutów kostką do gry.
Rzucamy kostką, która ma k ścian i na kolejnych ścianach są liczby oczek:
1, 2, 3, ...k
Utwórz n-elementową tablicę z wynikami rzutów tą kostką. Wyniki rzutów, to wylosowane liczby całkowite z zakresu [1, k].
Program wypisuje na ekranie całą zawartość tablicy (poziomo rozdzielając liczby przecinkiem i spacją, po w liczb w każdym wierszu).
Program wypisuje również poniższą informację:
oczek 1 wypadło ……...razy
oczek 2 wypadło ……...razy
oczek 3 wypadło ……...razy
…
…
oczek k wypadło ……...razy

Do testowania programu przyjmij następujące stałe:
n=100   k=6       w=20
*/

int main() {
    const int n = 100, k = 6, w = 20; // n - liczba rzutów, k - maksymalna liczba oczek, w - ilosc liczb w każdym wierszu

    int rzuty[n]; // wszystkie wylosowane liczby
    int k_rzuty[k + 1]; // rzuty 

    srand(time(0));

    // Wyczyszczenie tablicy k_rzuty
    for (int i = 1; i <= k; i++) { // i <= k, bo mamy k+1 elementów
        k_rzuty[i] = 0;
    }

    // Przypisanie rzutów
    for (int i = 0; i < n; i++) {
        rzuty[i] = rand() % k + 1; // [1, k] 
        k_rzuty[rzuty[i]]++;
    }

    // Wypisywanie
    cout << "Elementy tablicy rzuty:\n";
    for (int i = 0; i < n; i++) {
        cout << rzuty[i];

        if ((i + 1) % w == 0) { // sprawdzamy, czy wypisaliśmy w elementów
            cout << "\n";
        } else {
            cout << ", ";
        }
    }

    cout << "\nElementy tablicy k_rzuty:\n";
    for (int i = 1; i <= k; i++) {
        cout << "oczek " << i << " wypadlo " << k_rzuty[i] << " razy\n";
    }

    return 0;
}