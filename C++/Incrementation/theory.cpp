#include <iostream>
using namespace std;

// Inkrementacja - przed (to wykonuje się na początku)
// Dekrementacja - za (to wykonuje się na końcu)

// Operatory:
// ++
// --

int main() {
    int num_1 = 4, num_2 = 3;
    
    num_2 += ++num_1; 
    // num_1 = 5, num_2 = 8

    num_1 += num_2++; 
    // num_1 = 13, num_2 = 9

    num_1 *= 2; 
    // num_1 = 26

    num_1++;
    ++num_1;
    // num_1 = 28

    num_1 = 2 * num_2++;
    // num_1 = 18, num_2 = 10

    num_1 /= ++num_2 * 2 - 12;
    // num_1 = 1, num_2 = 11

    cout << num_1 << "\n";
    cout << num_2 << "\n";

    return 0;
}