// File Operations in CPP
#include <iostream>
#include <fstream>

using namespace std;

int main() {
    const string file_name = "./plik.txt";
    int n = 5;
    string write_text, read_text;

    cout << "Podaj tekst do wpisania w pliku: ";
    cin >> write_text;

    // Zapisywanie do pliku
    ofstream file_1(file_name);

    for (int i = 0; i < n; i++) {
        file_1 << "[" << i << "]" << write_text << endl;
    }

    file_1.close();

    cout << "Zapisano dane do pliku\n";

    // Odczytywanie z pliku
    ifstream file_2(file_name);
    cout << "\nOdczytano plik, zawartosc:\n";

    while (file_2) {
        file_2 >> read_text;
        cout << read_text << "\n";
    }

    file_2.close();


    return 0;
}