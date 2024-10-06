// Zadanie_3
// Napisz skrypt, który wczyta 2 liczby i imię z użyciem odpowiednich okien a następnie wypisze powitanie z użyciem tego imienia (w odpowiednim oknie dialogowym) oraz w przeglądarce wyświetli trzy działania wykonane na liczbach całkowitych, niezależnie od typu wprowadzonych liczb (mnożenie, dodawanie, reszta z dzielenia) w stylu:
// 5 + 2 = 7
// (jeśli użytkownik wprowadził liczby 5 i 2)
// Następnie w przeglądarce wyświetlą się poziomo czytelnie wszystkie liczby całkowite zaczynając od mniejszej z nich do większej i wynik ich sumy wraz z odpowiednim komentarzem.

var a, b, imie;

// isNaN - is Not A Number, NaN - Not A Number

do {
    a = parseInt(prompt("Podaj liczbę a:"));
} while (isNaN(a)); // czy a to nie liczba

do {
    b = parseInt(prompt("Podaj liczbę b:"));
} while (isNaN(b)); // czy b to nie liczba

do {
    imie = prompt("Podaj imię:");
} while (!isNaN(imie)); // czy imie to liczba

alert(`Witaj ${imie}!`);

document.write(`<p>${a} + ${b} = ${a + b}</p>`);
document.write(`<p>${a} * ${b} = ${a * b}</p>`);
document.write(`<p>${a} / ${b} = ${a / b}</p>`);

var suma = 0;
var min = Math.min(a, b);
var max = Math.max(a, b);

document.write(`<p>Liczby całkowite z zakresu [${min}; ${max}]:</p>`);
var text = "";

for (var i = min; i <= max; i++) {
    text += i;

    if (i != max) {
        // stawiamy zawsze, dopóki nie jesteśmy na końcu zakresu
        text += ", ";
    }

    suma += i;
}

document.write(text);
