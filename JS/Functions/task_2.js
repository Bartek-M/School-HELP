// 1. a)
// Tworzenie tablicy n- elementowej (funkcja zwraca tę tablicę)
// Losując dowolne liczby całkowite z zakresu [a,b]
function fun1A (a, b, n) {
    let arr = [];
    
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * (b - a + 1) + a));
    }

    return arr;
}

// 1. b)
// Tworzenie tablicy n- elementowej (funkcja zwraca tę tablicę)
// Losując liczby całkowite np. podzielne przez k z zakresu [a,b]
function fun1B (a, b, n, k) {
    let arr = [];
    
    for (let i = 0; i < n; i++) {
        let num;
        do { num = Math.floor(Math.random() * (b - a + 1) + a); } while (num % k);

        arr.push(num);
    }

    return arr;
}


// 2. a)
// Zapełnienie tablicy losowymi liczbami aż do wylosowania wartości stop włącznie (funkcja zwraca tę tablicę).
function fun2A(a, b, stop) {
    let arr = [], num;

    do {
        num = Math.floor(Math.random() * (b - a + 1) + a);
        arr.push(num); 
    } while (num != stop);

    return arr;
}

// 2. b)
// Zapełnienie tablicy losowymi liczbami aż do wylosowania wartości stop wyłącznie (funkcja zwraca tę tablicę).
function fun2B(a, b, stop) {
    let arr = [], num;

    while (true) {
        num = Math.floor(Math.random() * (b - a + 1) + a);
        
        if (num == stop) return arr;
        arr.push(num); 
    } 
}


// 3.
// Wypisanie na stronie n elementów tablicy.
function fun3(n, arr) {
    let formArr = [];

    for (let i = 0; i < n; i++) {
        formArr.push(arr[i])
    }

    document.write(`${n} elementy tablicy: ${formArr.join(", ")}<br/>`)
}


// 4.
// Wypisanie na stronie dowolnej tablicy (nie znamy jej rozmiaru).
function fun4(arr) {
    document.write(`Elementy tablicy: ${arr.join(", ")}<br/>`)
}


// 5. Poszukiwanie min / max w tablicy, której rozmiaru nie znamy (iteracyjnie) (funkcja zwraca tę wartość)
function fun5Min(arr) {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }

    return min;
}

function fun5Max(arr) {
    let max = arr[0];

    for (let num of arr) {
        if (num > max) max = num;
    }

    return max;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 0]
console.log(fun5Min(arr))
console.log(fun5Max(arr))


// 6.
// Sumowanie liczb w tablicy n- elementowej (lub w tablicy o nieznanej długości) (funkcja zwraca tę sumę).
function fun6(arr) {
    let sum = 0;

    for (let num of arr) {
        sum += num;
    }

    return sum;
}


// 7.
// Wypisanie z tablicy liczb podzielnych przez k (w oknie alert).
function fun7(arr, k) {
    let formArr = [];

    for (let num of arr) {
        if (num % k) continue;
        formArr.push(num);
    }

    alert(`Elementy tablicy podzielne przez ${k}: ${formArr.push(", ")}`);
}


// 8.
// Wypisanie liczb np. dodatnich z tablicy o nieznanej długości (w oknie alert).
function fun8(arr) {
    let formArr = [];

    for (let num of arr) {
        if (num <= 0) continue;
        formArr.push(num);
    }

    alert(`Elementy dodatnie tablicy: ${formArr.push(", ")}`);
}


// 9. Zliczanie ile razy wystąpiła dana wartość w tablicy i wypisanie na stronie zarówno tablicę jak i wynik obliczeń.
function fun9(tab, val) {
    let ilosc = 0;

    for (let el of tab) {
        if (el == val) ilosc++;
    }

    console.log(`Elementy tablicy: ${tab.join(", ")}`);
    console.log(`Liczby wystąpień wartości '${val}' w tablicy: ${ilosc}<br/>`);
}

// 10.
// Sumowanie w tablicy liczb podzielnych przez k (funkcja zwraca tę wartość)
function fun10(arr, k) {
    let sum = 0;

    for (let num of arr) {
        if (num % k) continue;
        sum += num;
    }

    return sum;
}

// 11.
// Zliczanie liczby liczb podzielnych przez k w tablicy (funkcja zwraca tę wartość)
function fun11(arr, k) {
    let ilosc = 0;

    for (let num of arr) {
        if (num % k) continue;
        ilosc++;
    }

    return ilosc;
}

// 12. Funkcje obliczające obwody i pola podstawowych figur, funkcje zwracają wyniki obliczeń:

// a. kwadrat
function fun12Kwadrat(a) {
    return {
        obw: a * 4,
        pole: a ** 2
    };
}

let kw = fun12Kwadrat(2)
console.log(kw)

// b. romb
function fun12Romb1(a, h) {
    return {
        obw: a * 4,
        pole: a * h
    }
}

function fun12Romb2(d1, d2) {
    let a = Math.sqrt((d1 / 2) ** 2 + (d2 / 2) ** 2)
    // d1/2, d2/2 - przyprostokątne
    // a - przeciwprostokątna

    return {
        obw: a * 4,
        pole: (d1 * d2) / 2
    }
}

// c. trapez
function fun12Trapez(a, b, h) { // równoramienny
    let c = Math.sqrt((Math.abs(a - b) / 2) ** 2 + h ** 2)

    return {
        obw: a + b + c + c,
        pole: (a + b) * h / 2
    }
}

// d. różne trójkąty
function fun12Trojkat(a, b, c) { // dowolny
    let obw = a + b + c;
    let p = obw / 2;

    return {
        obw: obw,
        pole: Math.sqrt(p * (p - a) * (p - b) * (p - c))
    }
}

function fun12TrojkatP(a, b) { // prostokątny
    let c = Math.sqrt(a ** 2 + b ** 2)

    return {
        obw: a + b + c,
        pole: a * b / 2
    }
}

function fun12TrojkatRR(a, c) { // równoramienny
    let h = Math.sqrt(a ** 2 - (c / 2) ** 2);

    return {
        obw: a + a + c,
        pole: a * h / 2
    }
}

function fun12TrojkatRB(a) { // równoboczny
    let h = a * Math.sqrt(3) / 2

    return {
        obw: a * 3,
        pole: a * h / 2
    }
}

// 16, 17 Wypisywanie na stronie argumentów funkcji i ich sumy
const fun16 = function () {
    let suma = 0, text = "";

    for (let arg of arguments) {
        suma += arg;
        text += `${arg}, `
    }   
    
    // for (let i = 0; i < arguments.length; i++) {
    //     console.log(arguments[i])
    // }   

    console.log("Suma wynosi:", suma);
    console.log("Argumenty:", text)
} 

fun16(16, 17, 4, 2)