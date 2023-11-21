#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

// Zdeklaruj stałą k o wartości 13. Napisz program, który wymusza od użytkownika wprowadzenie z klawiatury wartości całkowitej dodatniej. Następnie program wypisze od nowego wiersza poziomo czytelnie wszystkie liczby całkowite zaczynając od wprowadzonej wartości a kończąc na liczbie podzielnej przez k (jeśli wprowadzona wartość jest podzielna przez k, to tylko ona jest wypisana na ekranie).

int main() {
    const int k = 13;
    int a, num;

    do {
        cout << "Podaj liczbe calkowita dodatnia: ";
        cin >> a;
    } while (a <= 0);

    num = a;
    cout << num << " ";

    while (num % k != 0) {
        num++;
        cout << num << " ";
    }

    return 0;
}