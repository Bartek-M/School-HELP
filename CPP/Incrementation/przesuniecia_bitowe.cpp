#include <iostream>
using namespace std;

int main() {
    int x = 8, y = 2;

    // IDZIEMY W LEWO, dodajemy y zer
    // 8 = 1000
    // 1000<<2 = 1000 00 = 32

    x <<= y; 
    cout << x << "\n";

    // IDZIEMY W PRAWO, usuwamy y zer
    // 32 = 100000
    // 100000>>1 = 10000 = 16

    x >>= 1;
    cout << x << "\n";

    return 0;
}