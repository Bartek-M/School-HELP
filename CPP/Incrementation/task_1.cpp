#include <iostream>
using namespace std;

int main() {
    int a = 5, b = 7, c = 10;

    cout << a-- % b++ << "\n"; // 5 % 7 = 0 r 5; 
    // cout = 5, a = 4, b = 8  

    cout << b - 2 << "\n";
    // cout = 6, b = 8 (zostaje)

    ++c *= 3;
    // c = 33

    cout << c << "\n";
    cout << "a = " << a << ", b = " << b << ", c = " << c << "\n";
    // a = 4, b = 8, c = 33

    return 0;
}