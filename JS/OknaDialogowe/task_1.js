// Zadanie_1
// Przez okna dialogowe wyegzekwuj trzy liczby rzeczywiste takie, by spełniały warunek trójkąta. Ponowne wczytywanie tych liczb należy poprzedzić oknem z komunikatem o złych danych. Oblicz jego pole i obwód, a następnie w oknie dialogowym wyświetl boki i wyniki obliczeń (3 miejsca po przecinku) wraz z odpowiednimi komunikatami.

var a, b, c;

do {
    do {
        a = parseFloat(prompt("Podaj bok a trójkąta: "));
    } while (isNaN(a) || a <= 0); // wychodzimy: a jest liczbą I a dodatnia > 0 ==> a nie jest liczbą LUB a <= 0
    do {
        b = parseFloat(prompt("Podaj bok b trójkąta: "));
    } while (isNaN(b) || b <= 0);
    do {
        c = parseFloat(prompt("Podaj bok c trójkąta: "));
    } while (isNaN(c) || c <= 0);

    if (a + b <= c || a + c <= b || b + c <= a) {
        alert("Podane liczby nie mogą tworzyć trójkąta");
    }
} while (a + b <= c || a + c <= b || b + c <= a);

var obwod = a + b + c;
var p = obwod / 2;
var pole = Math.sqrt(p * (p - a) * (p - b) * (p - c));

alert(`Boki:
    a = ${a.toFixed(3)}
    b = ${b.toFixed(3)}
    c = ${c.toFixed(3)}

Pole: ${pole.toFixed(3)}
Obwód: ${obwod.toFixed(3)}`) // ` - znaczek nad tyldą, obok 1
