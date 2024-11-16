// Iteracja - przechodzenie pętli, (for, while)
// for (n razy przez coś) {
// }

// Rekurencja - wołanie funkcji przez nią samą
// function fun1(parametry) {
//     if () return 1;
//     return fun1(zmienione parametry)
// }


// NWD
console.log("\n[NWD]")
function nwdOdej(a, b) {
    // dopóki a != b -> od większej odejmij mniejszą
    while (a != b) {
        if (a > b) a -= b; // == a = a - b
        else b -= a;
    }

    return a;
}

function nwdDziel(a, b) {
    while (b != 0) {
        let reszta = a % b;
        a = b;
        b = reszta;
    }

    return a;
}

function nwdRek(a, b) {
    // == - sprawdzanie wartości; === - sprawdzanie typów
    if (b == 0) return a;
    return nwdRek(b, a % b)
}

console.log(nwdOdej(48, 18))
console.log(nwdDziel(48, 18))
console.log(nwdRek(48, 18))


// SILNIA
console.log("\n[SILNIA]")
function silniaIte(num) { // iteracja
    wynik = 1;

    while (num > 1) {
        wynik *= num;
        num--;
    }

    return wynik;
}

function silniaRek(num) { // rekurencja
    if (num <= 1) return 1;
    return num * silniaRek(num - 1);
}

console.log(silniaRek(0)); // 0
console.log(silniaRek(1)); // 1
console.log(silniaRek(2)); // 2 * [silnia(1) = 1] -> 2
console.log(silniaRek(3)); // 3 * [silnia(2) = 2 * [silnia(1) = 1] -> 2] -> 6
console.log(silniaRek(4)); // 4 * [silnia(3) = 3 * [silnia(2) = 2 * [silnia(1) = 1] -> 2] -> 6] -> 24 
console.log(silniaRek(5)); // 5 * [4 * [silnia(3) = 3 * [silnia(2) = 2 * [silnia(1) = 1] -> 2] -> 6] -> 24 ] -> 120

// POTĘGOWANIE
console.log("\n[POTĘGOWANIE]")
function potIte(num, x) {
    // return num ** x;
    let wynik = 1;

    for (let i = 0; i < x; i++) {
        wynik *= num
    }

    return wynik;
}

function potRek(num, x) {
    if (!x) return 1; // 0 === false, !0 === true
    return num * potRek(num, x - 1)
}

console.log(potRek(2, 0))
console.log(potRek(2, 1))
console.log(potRek(2, 2))
console.log(potRek(2, 3))