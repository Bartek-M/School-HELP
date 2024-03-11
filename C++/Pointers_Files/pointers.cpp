// Pointers in CPP
#include <iostream>
using namespace std;

int main() {
    // Basics
    cout << "Basic pointer stuff\n";

    int x = 2;
    int* y = &x;

    cout << "x: " << x << "\n";
    cout << "y: " << y << "\n\n";

    cout << "&y: " << &y << "\n";
    cout << "*y: " << *y << "\n\n";


    // Arrays
    cout << "Working with arrays\n";

    const int n = 4;
    int arr[n] = { 1, 2, 3, 4 };
    int* head = arr;

    for (int i = 0; i < n; i++) {
        head = arr + i;
        cout << "[" << head << "] " << *head << "\n";
    }

    return 0;
}