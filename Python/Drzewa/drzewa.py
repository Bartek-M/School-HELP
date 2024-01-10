from random import randint


# 1-5
class Drzewko:
    """Reprezentacja Drzewka"""

    rodzina = "drzewa"
    typ_pnia = "drewno"

    def __init__(self, gatunek, wiek, wysokosc, index=0):
        self.gatunek = gatunek
        self.wiek = wiek
        self.wysokosc = wysokosc
        self.index = index

        print("Zasadzono nowe drzewo o gatunku:", gatunek)

    def info_IN(self):
        print(f"Drzewo - typ pnia: {self.typ_pnia}, gatunek: {self.gatunek}, wysokość: {self.wysokosc} cm, wiek: {self.wiek} rok/lat")

    def rosne_IN(self):
        self.wysokosc += randint(50, 150)
        self.wiek += 1

    def __del__(self):
        print(f"Ścięto drzewo - index: {self.index}, gatunek: {self.gatunek}, wiek: {self.wiek}, wysokość: {self.wysokosc}")


# 6
with open("./drzewa.txt", "r", encoding="UTF-8") as f:
    las_IN = [
        Drzewko(gatunek.strip(), randint(1, 5), randint(20, 150), index=i)
        for i, gatunek in enumerate(f.readlines())  # [(0, gatunek 1), (1, gatunek 2)]
    ]


# 7
def wyswietl_las(las):
    print("\nLAS:")

    for drzewo in las:
        drzewo.info_IN()

    print("")


wyswietl_las(las_IN)

# 8
print("Właściwości klasy:", [element for element in dir(Drzewko) if not element.startswith("__")])
print("Wartości obiektu:", las_IN[0].__dict__, "\n")

# 9
for drzewo in las_IN:
    drzewo.rosne_IN()
    drzewo.rosne_IN()

# 10
del las_IN[-1]

# 11
las_IN.append(Drzewko("bonzai", randint(1, 5), randint(20, 150), index=len(las_IN)))

# 12
wyswietl_las(las_IN)
