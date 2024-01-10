"""
1/ (3pkt) 
- napisz funkcję jeden_IN z jednym parametrem, którym będzie nazwa pliku
- funkcja wyświetla zawartość pliku
- (zakładamy, że plik tekstowy znajduje się w tym samym folderze co program)
- uruchom funkcję z parametrem liczby.txt 
"""
print("[TASK 1]")


def jeden(nazwa_pliku):
    with open(nazwa_pliku, "r") as f:  # , encoding="UTF-8")
        print(f.read())


jeden("liczby.txt")


"""
2/ (3pkt)
- program losuje liczbę z zakresu <1000,99999>
- następnie wypisuje z ilu cyfr składa się wpisana wartość
- informuje o iloczynie tworzących ja cyfr; pomija 0
"""
print("\n[TASK 2]")
import random

liczba = random.randint(1000, 99999)  # .randrange() - dla przedziału <;)
cyfry = str(liczba)
iloczyn = 1

for n in cyfry:
    if n == 0:  # not n
        continue

    iloczyn *= int(n)  # iloczyn = iloczyn * int(n)

print(f"Wylosowano liczbę: {liczba}; składa się ona z {len(cyfry)} cyfr")
print("Iloczyn cyfr =", iloczyn)


"""
3/ (4pkt)
- program zamienia wprowadzony przez użytkownika ciąg cyfr na formę tekstową
- znaki nie będące cyframi mają być ignorowane
- konwertuje cyfry, nie liczby
- zatem: 911 to "dziewięć jeden jeden"; 1100 to "jeden jeden zero zero"
"""
print("\n[TASK 3]")

tekst = input("Podaj ciąg cyfr: ")

cyfry = {
    "0": "zero",
    "1": "jeden",
    "2": "dwa",
    "3": "trzy",
    "4": "cztery",
    "5": "pięć",
    "6": "sześć",
    "7": "siedem",
    "8": "osiem",
    "9": "dziewięć",
}
zamienione = " ".join([cyfry[char] for char in tekst if char in cyfry])
print(f"Tekst podany: {tekst} -> {zamienione}")


"""
4/ (4pkt)
- zapisz do pliku dane_IN.txt w pierwszej linii imię podane przez użytkownika
- przypisz podane wartość do zmiennych: x_IN=43; y_IN='napis'
- utwórz zmienną z_IN zawierającą listę z 10 elementami; wypełniona losowymi liczbami całkowitymi z zakresu <3,33>
- wyświetl zmienne i przypisane do nich wartości
- zapisz do pliku dane_IN.txt w kolejnych liniach zmienne x_IN, y_IN oraz liczby z listy z_IN 
- każda liczba w osobnym wierszu. 
"""
print("\n[TASK 4]")
import random

name = input("Podaj imię: ")
x, y = 43, "napis"
z = [random.randint(3, 33) for _ in range(10)]

print(
    f"""Utworzono zmienne:
- x: {x}
- y: {y}
- z: {z}
"""
)

with open("dane_IN.txt", "w", encoding="UTF-8") as f:
    f.write(f"{name}\n")
    f.write(f"{x}\n")  # musimy zamienić x na str + musimy przejść do następnej linii
    f.write(f"{y}\n")

    for num in z:
        f.write(f"{num}\n")

print("Zapisano do pliku")


"""
5/ (2pkt)
- funkcja dwa_IN przyjmie jako parametr listę liczb
- zwraca listę z usuniętymi liczbami nieparzystymi
- wywołaj funkcję, której parametrem będzie lista liczb zawartych w pliku dane_IN.txt
"""
print("\n[TASK 5]")


def dwa_IN(lista):
    return [num for num in lista if num % 2 != 0]


with open("dane_IN.txt", "r", encoding="UTF-8") as f:
    liczby = [int(n) for n in f.readlines() if n.strip().isdigit()]  # if n bez "\n" jest liczbą/cyfrą
    print(dwa_IN(liczby))

# dwa_IN = lambda lista: [num for num in lista if num % 2 != 0]


"""
6/ (4pkt)
- funkcja trzy_IN tworzy i zwraca słownik
- kluczami są wszystkie litery alfabetu bez polskich znaków
- wartości to liczby podzielne przez 7 (zaczynając od 7)
- przypisz słownik do zmiennej slownik_IN
- korzystając ze słownika zaszyfruj (zamiast liter wpisz odpowiadające im liczby, liczby rozdzielaj za pomocą średnika) słowo napis
"""
print("\n[TASK 6]")


def trzy_IN():
    num = 7
    slownik = {}

    for i in range(65, 91):  # ASCII 65 -> "A"; 90 -> "Z"
        slownik[chr(i)] = str(num)
        num += 7

    return slownik


slownik = trzy_IN()

slowo = "napis"
zaszyfrowane = ";".join([slownik[znak.upper()] for znak in slowo])

print(f"{slowo} -> {zaszyfrowane}")


"""
7/ (4pkt)
- napisz funkcje cztery_IN, która dla zadanego argumentu (którym może być lista lub krotka) 
- zwraca indeks i wartość najmniejszego elementu
- wywołaj funkcję, której parametrem będzie lista liczb zawartych w pliku liczby.txt (każda liczba w osobnym wierszu)  
- nie należy używać wbudowanych w Python funkcji max i min 
- należy przejść wszystkie elementy listy i znaleźć szukaną wartość.
"""
print("\n[TASK 7]")


def cztery(arr):
    min_item, ind = None, None

    for index, item in enumerate(arr):
        if min_item is None or item < min_item:
            min_item, ind = item, index

    return min_item, ind


with open("liczby.txt", "r") as f:
    min_val = cztery([int(num) for num in f.readlines()])
    print(min_val)
