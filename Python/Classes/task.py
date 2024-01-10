"""
- Utwórz klasę PetIN, która będzie przypisywała zmienne name, age, has_owner. 
- Napisz w niej funkcję, która będzie wypisywała: "Mam na imię {name}, mam {age} lat"
- dodatkowo ma wypisać, czy zwierzę ma właściciela (has_owner).
- Napisz w niej funkcję, która będzie zmieniała właściciela (has_owner). 
- Utwórz nowe obiekty z klasy PetIN, z wartościami podanymi w pliku plik.txt, są one rozdzielone spacjami. 
- Zwierzętom o parzystych wiekach zmień wartość has_owner za pomocą utworzonej funkcji.
- Wypisz po kolei informacje o zwierzętach.
"""


class PetIN:
    def __init__(self, name, age, has_owner):
        self.name = name
        self.age = age
        self.has_owner = has_owner  # True | False

    def get_info(self):
        print(f"Mam na imię {self.name}, mam {self.age} lat")
        print("Mam właściciela:", self.has_owner)

    def zmiana_wlasciciela(self):
        self.has_owner = not self.has_owner  # True -> False; False -> True


with open("./plik.txt", "r", encoding="UTF-8") as f:
    lines = f.readlines()

for line in lines:
    """
    line.strip() - usunięcie "\n"
    line.split(" ") - rozdzielenie elementów na listę
    """
    dane = line.strip().split(" ") # Utworzenie listy z elementów z pliku

    # Utworzenie obiektu
    pies = PetIN(dane[0], int(dane[1]), True if dane[2] == "True" else False)  # line.strip().split(" ") -> lista

    if not (pies.age % 2): # pies.age % 2 == 0
        pies.zmiana_wlasciciela()

    pies.get_info()
    print()  # Dodanie pustej lini, żeby było czytelnie
