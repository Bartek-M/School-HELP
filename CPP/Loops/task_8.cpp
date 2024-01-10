#include <iostream>
using namespace std;

// Zdeklaruj stałe: k o wartości 13, n o wartości 10. Napisz program, który wymusza od użytkownika wprowadzenie z klawiatury wartości całkowitej dodatniej. Następnie program wypisze od nowego wiersza poziomo n liczb podzielnych przez k zaczynając od liczby najmniejszej, ale nie mniejszej od wprowadzonej i podzielnej przez k.

int main() {
    const int k = 13, n = 10;
    int a, amount;

    do {
        cout << "Podaj liczbe calkowita dodatnia: ";
        cin >> a;
    } while (a <= 0);

    amount = 0;

    while (amount != n) {
        if (a % k == 0) {
            cout << a << " ";
            amount++;
        }

        a++;
    }

    return 0;
}