#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

// Napisz program, który losuje liczbę z zakresu [a.b) i wyświetla tę liczbę. Wartości a, b zdeklaruj jako stałe.
// Program wypisuje od nowego wiersza poziomo czytelnie wszystkie kolejne wartości zaczynając od a,  kończąc na wylosowanej liczbie. Program również oblicza i wyświetla sumę tych wypisanych liczb.

int main() {
    const int a = 10, b = 20;
    int losowe, suma;

    srand(time(0));
    losowe = rand() % (b - a) + a; // [a,b)

    suma = 0;

    for (int i = a; i <= losowe; i++) {
        cout << i << " ";
        suma += i;
    }

    cout << "\nSuma wypisanych liczb wynosi: " << suma;

    return 0;
}