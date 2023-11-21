#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

// Napisz program. który wymusza wylosowanie liczby całkowitej dodatniej trzycyfrowej (przy założeniu, że zakres losowania jest znacznie szerszy), wypisuje tę wylosowaną liczbę. Następnie program wypisuje od nowego wiersza cyfry tej liczby rozdzielone średnikiem. W kolejnym wierszu program wypisuje sumę cyfr tej liczby.

int main() {
    const int a = -100, b = 2000;
    int losowa, suma;

    srand(time(0));

    do {
        losowa = rand() % (b - a) + a;
    } while ((losowa <= 0) || (losowa < 100) || (losowa > 999));

    cout << "Wylosowana = " << losowa << "\n";
    suma = 0;

    while (losowa != 0) {
        cout << losowa % 10 << ";";
        suma += losowa % 10;
        losowa /= 10;
    }

    cout << "\n" << "Suma cyfr tej liczby = " << suma;

    return 0;
}