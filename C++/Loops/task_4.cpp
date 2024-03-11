#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

// Napisz program, który losuje liczbę z zakresu [a.b) i wyświetla tę liczbę. Wartości a, b zdeklaruj jako stałe.
// Program wypisuje poziomo czytelnie wszystkie kolejne wartości zaczynając od wylosowanej liczby, kończąc na wartości b. Program również oblicza i wyświetla sumę tych wypisanych liczb.


int main() {
    const int a = 10, b = 20;
    int losowe, suma;

    srand(time(0));
    losowe = rand() % (b - a) + a; // [a,b)

    suma = 0;

    for (int i = losowe; i <= b; i++) {
        cout << i << " ";
        suma += i;
    }

    cout << "\nSuma wypisanych liczb wynosi: " << suma;

    return 0;
}