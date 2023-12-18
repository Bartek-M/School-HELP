from random import randint

# Tasks 1-5
print("# Tasks 1-5")


class Drzewko:
    """Klasa reprezentująca drzewo"""

    rodzina = "drzewa"
    typ_pnia = "drewno"
    index: int

    def __init__(self, gatunek, wiek, wysokosc):
        self.gatunek = gatunek
        self.wiek = wiek
        self.wysokosc = wysokosc

        print("Zasadzono nowe drzewo o gatunku", gatunek)

    def info_in(self):
        print(
            f"""Drzewo:
    rodzina: {self.rodzina}
    typ pnia: {self.typ_pnia}
    gatunek: {self.gatunek}
    wysokość: {self.wysokosc} cm
    wiek: {self.wiek} {'rok' if self.wiek == 1 else 'lat'}
        """
        )

    def rosne_in(self):
        self.wysokosc += randint(50, 150)
        self.wiek += 1

    def __del__(self):
        print(f"Drzewo o indeksie: {self.index}, gatunku: {self.gatunek}, wieku: {self.wiek}, wysokości: {self.wysokosc}, zostało ścięte")


print("Utworzono klasę Drzewko")


# Funkcja do wyświetlania lasu
def wyswietl_las(las):
    print("Wyświetlanie lasu:")

    for drzewo in las:
        drzewo.info_in()


# Task 6
print("\n# Task 6")
las_in = []

with open("./drzewa.txt", "r", encoding="UTF-8") as f:
    gatunki = [line.strip() for line in f.readlines()]

for ind, gatunek in enumerate(gatunki):
    drzewo = Drzewko(gatunek, randint(1, 5), randint(20, 150))
    drzewo.index = ind

    las_in.append(drzewo)

print("Utworzono las")

# Task 7
print("\n# Task 7")
wyswietl_las(las_in)

# Task 8
print("\n# Task 8")
print("Właściwości klasy Drzewko:", [item for item in dir(Drzewko) if not item.startswith("__")])
print("\nWłaściwości jednego z drzew:", [item for item in dir(las_in[0]) if not item.startswith("__")])
print("Własności jednego z drzew:", las_in[0].__dict__)

# Task 9
print("\n# Task 9")

for drzewo in las_in:
    drzewo.rosne_in()
    drzewo.rosne_in()

print("Minęły 2 lata")

# Task 10
print("\n# Task 10")
del las_in[-1]
print("Usunięto ostatnie drzewo")

# Task 11
print("\n# Task 11")
drzewo = Drzewko(gatunki[-1], randint(1, 5), randint(20, 150))
drzewo.index = len(las_in)

las_in.append(drzewo)

# Task 12
print("\n# Task 12")
wyswietl_las(las_in)
