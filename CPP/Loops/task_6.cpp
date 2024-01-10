#include <iostream>
using namespace std;

// Zdeklaruj stałą k o wartości 7. Napisz program, który wczyta z klawiatury dwie różne liczby całkowite i wypisze rosnąco wszystkie liczby nieparzyste z wczytanego zakresu. Program wypisze również informację o ilości i sumie tych nieparzystych

int main() {
    const int k = 7;
    int x, y, a, b, ilosc, suma;

    cout << "Podaj liczbe calkowita: ";
    cin >> x;

    do {
        cout << "Podaj liczbe calkowita inna od pierwszej: ";
        cin >> y;
    } while (y == x);

    if (x < y) { a = x; b = y; }
    else { a = y; b = x; }

    ilosc = 0;
    suma = 0;

    for (int i = a; i <= b; i++) {
        if (i % 2 != 0) {
            cout << i << " ";

            ilosc++;
            suma += i;
        }
    }

    cout << "\nIlosc liczb nieparzystych = " << ilosc << "; suma liczb nieparzystych " << suma;

    return 0;
}