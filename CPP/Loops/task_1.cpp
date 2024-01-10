#include <iostream>
using namespace std;

// Napisz program. Który wymusza wprowadzenie od użytkownika liczby całkowitej dodatniej, następnie program wypisuje tę liczbę od końca.

int main() {
    int num;

    do {
        cout << "Podaj liczbe calkowita dodatnia: ";
        cin >> num;
    } while (num <= 0);

    while (num != 0) {
        cout << num % 10 << " ";
        num /= 10;
    }

    return 0;
}