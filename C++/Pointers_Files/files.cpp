// File Operations in CPP
#include <iostream>
#include <fstream>

using namespace std;

int main() {
    const string file_name = "./plik.txt";
    const int n = 5;
    string line;

    cout << "Operacje na plikach\n\n";

    // Tworzenie pliku
    fstream file_1;
    file_1.open(file_name, ios::out);

    if (file_1.is_open()) {
        file_1 << "Hello World!\n\n";
        file_1 << "Learning file operations\n";
        file_1.close();
        cout << "Zapisano plik\n";
    }

    // Dopisywanie do pliku
    file_1.open(file_name, ios::app);

    if (file_1.is_open()) {
        file_1 << "Test dopisywania do pliku\n";
        file_1.close();
        cout << "Dopisano do pliku\n";
    }

    // Czytanie z pliku
    file_1.open(file_name, ios::in);

    if (file_1.is_open()) {
        cout << "\nCzytanie pliku:\n";

        while (getline(file_1, line)) {
            cout << line << "\n";
        }

        file_1.close();
    }


    return 0;
}