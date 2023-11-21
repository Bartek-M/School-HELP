"""
Klasy i Obiekty w Python'ie
"""

class Pies: # Nazewnictwo z dużej litery
    cztery_lapy = True
    y = 0

    def __init__(self, name, age, x = 0):
        self.imie = name
        self.wiek = age
        self.has_owner = False
        self.x = x

        self.y += 1
        print(self.y)

    def szczekanie(self):
        print("Hau! Hau!")

    def get_name(self):
        return self.imie
    
    def get_info(self):
        print(f"Mam na imie {self.imie} i mam {self.wiek} lat.")

        if self.has_owner:
            print("Mam właściciela")
        else:
            print("Nie mam właściciela")

        print("")

    def set_owner(self):
        self.has_owner = True

    def set_x(self, x):
        self.x = x
            
# Tworzenie obiektów
pies1 = Pies("Apollo", 8)
pies2 = Pies("Burek", 7)

pies1.set_x(10) # <--- lepsze niż to: pies1.x = 10
pies2.set_owner()

pies1.get_info()
pies2.get_info()

print(pies1.imie)