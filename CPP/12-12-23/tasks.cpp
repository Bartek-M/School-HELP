/*
Tablice - powtórzenie
Tablica = Array

tab - tablica 
i - index elementu z tablicy
tab[i] - element tablicy

tablica ma: n elementów, n-1 indeksów

Zakresy:
[a; b) (b - a) + a
[a; b] (b - a + 1) + a

(a; b) (b - a) + a + 1
(a; b] (b - a + 1) + a + 1
*/

// I. Zapełnianie tablicy (tab) n-elementowej liczbami całkowitymi

// 1. Losowanie z zakresu [, )
for (int i = 0; i < n; i++) { // n = 10; 0, 1, 2, ..., 9
    tab[i] = rand() % (b - a) + a;
}

// 2. Losowanie z zakresu [, ]
for (int i = 0; i < n; i++) {
    tab[i] = rand() % (b - a + 1) + a;
}

// 3. Losowanie z zakresu [, ) ale tylko np. parzyste i dodatnie > 0
for (int i = 0; i < n; i++) {
    do {
        tab[i] = rand() % (b - a) + a;
    } while ((tab[i] % 2 != 0) || (tab[i] <= 0)); // not (parzyste i dodatnie) -> nieparzyste lub niedodanie
}

// 4. Wczytywanie z klawiatury tylko np. ujemne i nieparzyste
for (int i = 0; i < n; i++) {
    do {
        cin >> tab[i];
    } while ((tab[i] >= 0) || (tab[i] % 2 == 0)); // not (ujemne i nieparzyste) -> nieujemne lub parzyste
}

// 5. Wczytywanie z klawiatury tylko z zakresu [a, b]
for (int i = 0; i < n; i++) {
    do {
        cin >> tab[i]
    } while ((tab[i] < a) || (tab[i] > b)); // not (cin >= a i cin <= b) -> cin < a lub cin > b
}

// 6. Wczytywanie z klawiatury tylko z zakresu [, ) wyłącznie np. parzyste
for (int i = 0; i < n; i++) {
    do {
        cin >> tab[i]
    } while ((tab[i] < a) || (tab[i] >= b) || (tab[i] % 2 != 0)); // not (cin >= a i cin < b i parzyste) -> cin < a lub cin >= b lub nieparzyste
}


// II. Analiza tablicy (tab) n elementowej, która posiada już jakieś liczby

// 1. Sumowanie wszystkich LICZB (tab[i]) w tablicy
suma = 0; // bo jak nie dacie tego, to JEDYNKA, taka motywacyjna ;)

for (int i = 0; i < n; i++) {
    suma += tab[i];
}

// 2. Sumowanie liczb spełniających opisaną własność, np. liczby parzyste
suma = 0; 

for (int i = 0; i < n; i++) {
    if (tab[i] % 2 == 0) {
        suma += tab[i];
    }
}

// 3. Sumowanie LICZB (tab[i]), które są na indeksach (i) np. nieparzystych
suma = 0;

for (int i = 0; i < n; i++) {
    if (i % 2 != 0) {
        suma += tab[i];
    }
}

// 4. Zliczanie liczby wystąpień danej wartości (k) w tablicy
ilosc = 0;

for (int i = 0; i < n; i++) {
    if (tab[i] == k) {
        ilosc++;
    }
}

// 5. Zmiana wszystkich wartości w tablicy, np. zwiększenie ich k razy
for (int i = 0; i < n; i++) {
    tab[i] *= k;
}

// 6. Zmiana wartości będących na MIEJSCACH (i) np. parzystych (np. te wartości zwiększamy o wartość k)
for (int i = 0; i < n; i++) {
    if (i % 2 == 0) {
        tab[i] += k;
    }
}

// 7. Wyszukiwanie min/max w tablicy.
min = tab[0];

for (int i = 1; i < n; i++) {
    if (tab[i] < min) {
        min = tab[i];
    }
}

max = tab[0];

for (int i = 1; i < n; i++) {
    if (tab[i] > max) {
        max = tab[i];
    }
}

// 8. Wypisanie numerów indeksów tablicy, na których są liczby np. parzyste
for (int i = 0; i < n; i++) {
    if (tab[i] % 2 == 0) {
        cout << i << ", ";
    }
}

// 9. Wpisanie do drugiej tablicy wartości z opisaną własnością będące w danej tablicy (np. tylko dodatnie nieparzyste). Wypisać informację o ilości liczb w drugiej tablicy.
tab_2[n];
index = 0;

for (int i = 0; i < n; i++) {
    if ((tab[i] > 0) && (tab[i] % 2 != 0)) {
        tab_2[index] = tab[i];
        index++;
    }
}

cout << "Ilosc liczb w tab_2: " << index;