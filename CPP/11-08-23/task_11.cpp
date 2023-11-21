#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

// Napisz program, który wyświetla poziomo czytelnie n parzystych liczb wylosowanych z zakresu [a, b). W kolejnym wierszu wyświetla komunikat o sumie dodatnich liczb wśród tych parzystych. Wartości n, a, b zdeklaruj jako stałe.

int main() {
    const int a = -10, b = 20, n = 8;
    int los, suma;

    srand(time(0));
    suma = 0;

    for (int i = 0; i < n; i++) {
        do {
            los = rand() % (b - a) + a;
        } while (los % 2 != 0);

        cout << los << " ";
        if (los > 0) { suma += los; }
    }

    cout << "\nSuma dodatnich: " << suma;

    return 0;
}