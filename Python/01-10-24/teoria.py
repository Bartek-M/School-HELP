# # Python
import random

print("Hello") # ''
print(f"Hello {2 + 2}")

# Operatory
x = 8
y = 3

print(f"{x} + {y} =", x + y) # Addition +
print(f"{x} - {y} =", x - y) # Subtraction -
print(f"{x} * {y} =", x * y) # Multiplication *
print(f"{x} / {y} =", x / y) # Division /
print(f"{x} ** {y} =", x ** y) # Exponentiation **
print(f"{x} // {y} =", x // y) # Floor division //
print(f"{x} % {y} =", x % y) # Modulus %

"""
y % 2 == 1 # Nieparzysta
x % 2 == 0 # Parzysta
"""

# Warunki
"""
Conditions in python
| ==    equal to
| !=    not equal to
| >=    greater or equal to
| <=    less or equal to
| >     more then
| <     less then

bool --^

AND
OR
NOT
"""
# 1
num = int(input("Podaj liczbę do sprawdzenia czy jest parzysta: "))

if num % 2 == 0:
    print("Liczba jest parzysta")
else:
    print("Liczba jest nieparzysta")

if num > 0:
    print("Liczba jest dodatnia")
elif num < 0:
    print("Liczba jest ujemna")
else:
    print("Liczba jest równa 0")

# 2
opcja = input("Wybierz jedną z opcji (niebieski, zielony, czerwony, pomarańczowy, biały, czarny): ").lower() # przeciwieństwo .upper()

if opcja in ["niebieski", "zielony", "czerwony", "pomarańczowy", "biały", "czarny"]:
    print("Wybrano kolor:", opcja)
    # TO WŁĄCZAMY ZAWSZE JAK WYBRANO DOBRĄ OPCJE

if opcja == "niebieski" or opcja == "zielony":
    print("Wybrano kolor zimny")
elif opcja == "czerwony" or opcja == "pomarańczowy":
    print("Wybrano kolor ciepły")
else:
    print("Wybrany kolor nie jest ani taki, ani taki")

# 3
num = int(input("Podaj liczbę: "))

if num > 0 and num % 2 == 0: # dodatnia, parzysta
    print("Liczba dodatnia parzysta")
elif num > 0 and num % 2 != 0: # dodatnia, nieparzysta
    print("Liczba dodatnia nieparzysta")
elif num < 0 and num % 2 == 0: # ujemna, parzysta
    print("Liczba ujemna parzysta")
elif num < 0 and num % 2 != 0: # ujemna, nieparzysta
    print("Liczba ujemna nieparzysta")
else: # 0
    print("Liczba jest 0")

# 4
x = None

# FALSE: 0, False, "", [], {}, (), None
# bool -> Boolean (True/False)

if x is None:
    print("x jest None")

if not x: # x jest pusty / nieprawdziwy
    print("x jest pusty / nieprawdziwy")
else:
    print("x istnieje")

# Listy, Słowniki
lista = [1, 2, "hello", "world", "world", 2.2]   
print(lista[0]) # adres listy + index
lista.append(3) # dodaj na koniec listy 3
print(lista.pop(2))
print(lista)

if "world" in lista:
    print("Słowo jest w liście, na indeksie:", lista.index("world"))
else:
    print("Słowo nie jest w liście")

slownik = {"klucz": "wartość"} # klucz tylko str, int, tuple, nie może się powtarzać; wartość: wszystko
print(slownik["klucz"])
print(slownik.get("nie ma tego klucza", "Nie ma elementu"))
slownik["nowy"] = "nowy element"
print(slownik)

if "klucz" in slownik:
    print("Słowo jest w kluczach słownika")
else:
    print("nie ma")

if "wartość" in slownik.values(): # .keys() - lista kluczy; .values() - lista wartość; czasami trzeba zmienić na liste - list(dict.values())
    print("Wartość jest w słownikach")

del slownik["klucz"]
print(slownik)

# (element_1, element_2, ...) tupla - lista, której nie można edytować
# set() - zbiór unikatowych wartości; .add(element), .remove(element)

# Pętle - for, while
print("FOR")
for i in range(5):
    print(i)

print("")
for dziesiec in range(10, 51, 10): # <10; 50>; (start, koniec otwarty, przeskok)
    print(dziesiec)

print("")
for _ in range(2):
    print("Hello")

print("")
lista_1 = ["test", "hello", "world", "1234"]

for element in lista_1:
    print(element)

print("")
for i in range(len(lista_1)):
    print(i, lista_1[i])

print("")
for i, element in enumerate(lista_1):
    print(i, element)

print("")
slownik_1 = {"test": "1234", "hello": "world"}

for key in slownik_1: # to samo: for key in slownik_1.keys()
    print(key, slownik_1[key])

for val in slownik_1.values():
    print(val)

print("\nWHILE")

while (num := random.randint(20, 30)) % 2 != 0:
    pass

print(f"Wylosowano liczbę parzystą {num}\n")

num, ilosc = int(input("Podaj liczbę parzystą z zakresu [10, 20): ")), 1

# z zakresu [10, 20) -> 10<=num AND num<20 , parzysta
# num % 2 == 0 AND num >= 10 AND num < 20 ->
# NOT (num % 2 == 0 AND num >= 10 AND num < 20) ->
# num % 2 != 0 OR num < 10 OR num >= 20

while num % 2 != 0 or num < 10 or num >= 20: 
    print("\nSpróbuj ponownie")
    num = int(input("Podaj liczbę parzystą z zakresu [10, 20): "))
    ilosc += 1

print(f"Wybrano liczbę: {num} po {ilosc} próbach")
    
# Pliki
print("Tworzenie plików")
with open("./test.txt", "w", encoding="UTF-8") as f: # w - nadpisanie pliku, a - dopisanie do pliku
    f.write("Hello\n")
    f.write("World!")
print("zapisano")

print("\nOtwieranie plików")
with open("./test.txt", "r", encoding="UTF-8") as f:
    linie = [linia.strip() for linia in f.readlines()]

print(linie)

# Funkcje
def add(num_1, num_2, num_3=0, num_4=0):
    if num_2 % 2 == 0:
        return "num_2 jest parzysty"

    return num_1 + num_2 + num_3 + num_4

print(add(3, 2))
print(add(2, 3, 5)) # 5 jako num_3
print(add(2, 3, num_4=5)) # 5 jako num_4

# Comprehensions
lista = [i for i in range(10) if i % 3 == 0]
print(lista)

slownik = {i: 2**i for i in range(6)}
print(slownik)