#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

// Napisz program, który wyświetla poziomo czytelnie n parzystych liczb wylosowanych z zakresu [a, b). W kolejnym wierszu wyświetla komunikat o ilości ujemnych liczb wśród tych parzystych. Wartości n, a, b zdeklaruj jako stałe.

int main() {
    const int a = -10, b = 20, n = 6;
    int ilosc, los;

    srand(time(0));
    ilosc = 0;

    for (int i = 0; i < n; i++) {
        do {
            los = rand() % (b - a) + a; // [a,b)
        } while (los % 2 != 0);

        cout << los << " ";
        if (los < 0) { ilosc++; }
    }

    cout << "\nIlosc ujemnych: " << ilosc;

    return 0;
}