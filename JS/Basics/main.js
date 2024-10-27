// Zadanie/
// | Wymuś wylosowanie trzech liczb dodatnich całkowitych z określonego zakresu, tak aby spełniały warunek trójkąta.

const POCZ = -20, KON = 20


do {
    var a, b, c

    // <;) Math.floor(Math.random() * (KON - POCZ) + POCZ)
    // <;> Math.floor(Math.random() * (KON - POCZ + 1) + POCZ)

    do {
        do { a = Math.floor(Math.random() * (KON - POCZ) + POCZ) } while (a <= 0) // <;)
        do { b = Math.floor(Math.random() * (KON - POCZ) + POCZ) } while (b <= 0) // <;)
        do { c = Math.floor(Math.random() * (KON - POCZ) + POCZ) } while (c <= 0) // <;)
    } while (a + b <= c || a + c <= b || c + b <= a)
    // suma dwóch krótszych boków musi być większa od najdłuższego
    alert(`Wylosowano boki z zakresu <${POCZ}; ${KON}): a=${a}, b=${b}, c=${c}\n`)
    // ` - koło jedynki (1), nad tyldą (~); z ${}

    // | Oblicz pole, obwód tego trójkąta. W oknie przeglądarki, w czytelny sposób wypisz: pole, obwód, rodzaj oraz wszystkie boki tego trójkąta.
    var obw = a + b + c
    var p = obw / 2
    var pole = Math.sqrt(p * (p - a) * (p - b) * (p - c))

    var text = `Obwód: ${obw}
Pole: ${pole.toFixed(2)}
Boki: a=${a}, b=${b}, c=${c}`
    alert(text)

    // | Następnie wypisz malejąco, poziomo, wszystkie liczby parzyste zaczynając od najdłuższego z boków, kończąc na najkrótszym włącznie. Liczby oddziel średnikami, zadbaj, żeby nie pojawił się ostatni.
    // Podaj ile liczb wypisano, ile wynosi ich suma.

    var minBok = Math.min(a, b, c)
    var maxBok = Math.max(a, b, c)

    var ilosc = 0, suma = 0;

    var text2 = `Liczby parzyste, malejąco z zakresu <${minBok}; ${maxBok}>: `
    for (let i = maxBok; i >= minBok; i--) {
        if (i % 2 == 0) {
            text2 += `${i}, `

            ilosc++
            suma += i
        }
    }

    text2 += "\n"
    alert(text2)
} while (confirm("Czy chcesz powtórzyć zabawę?"));
// Zapytaj się użytkownika, za pomocą okna dialogowego, czy chce włączyć jeszcze raz.
// okna dialogowe: alert - informacja, prompt - input (jakieś dane), confirm - tak/nie

// | Określ, czy jest to trójkąt prostokątny, równoboczny czy równoramienny. 