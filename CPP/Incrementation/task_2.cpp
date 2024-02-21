#include <iostream>
using namespace std;

int main() {
    int x = 21, y = 7, z = 30, w;

    w = --x / y;
    // w = 2, x = 20, y = 7
    cout << "w = " << w << "\n";

    z -= x--;
    // z = 10, x = 19
    cout << "z = " << z << "\n";

    w = x + y;
    // w = 26, x = 19, y = 7
    cout << "w = " << w << "\n";

    return 0;
}