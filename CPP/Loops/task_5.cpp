#include <iostream>
using namespace std;

// Napisz program, który prosi użytkownika o liczbę całkowitą, wczytuje ją pod zmienną x. Następnie program wymusza wprowadzenie przez użytkownika liczby większej od x i wczytuje ją pod zmienną y.
// Wartości zmiennych x, y wyświetla na ekranie. Program od nowego wiersza wypisze wszystkie parzyste z zakresu [x, y], obliczy i wypisze informację, ile jest tych parzystych liczb.

int main() {
    int x, y, ilosc;

    cout << "Podaj liczbe calkowita: ";
    cin >> x;

    do {
        cout << "Podaj liczbe calkowita wieksza od " << x << ": ";
        cin >> y;
    } while (y <= x);

    cout << "x = " << x << "; " << "y = " << y << "\n";
    ilosc = 0;

    for (int i = x; i <= y; i++) {
        if (i % 2 == 0) {
            cout << i << " ";
            ilosc++;
        }
    }

    cout << "\nLiczb parzystych jest: " << ilosc;

    return 0;
}