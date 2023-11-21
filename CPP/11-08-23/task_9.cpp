#include <iostream>
using namespace std;

// Napisz program, który wyświetla kolejne liczby całkowite od 1 do n czytelnie poziomo po k liczb w wierszu. Wartości n, k zdeklaruj jako stałe.

int main() {
    const int k = 4, n = 10;
    int amount = 0;

    for (int i = 1; i < n; i++) {
        cout << i << " ";
        amount++;

        if (amount >= k) {
            cout << "\n";
            amount = 0;
        }
    }

    return 0;
}