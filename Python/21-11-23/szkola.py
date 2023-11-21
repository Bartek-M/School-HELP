# Klasy (takie szkolne, np. 3Ti, 8A), z uczniami

class Uczen:
    def __init__(self, name, age, grade):
        self.name = name
        self.age = age
        self.grade = grade # 1 - 6

    def get_info(self):
        print(f"Uczeń: {self.name}; Wiek: {self.age}")

    def get_grade(self):
        return self.grade
    
class Klasa:
    def __init__(self, name, max_uczniow):
        self.name = name
        self.max_uczniow = max_uczniow
        self.uczniowie = []

    def add_uczen(self, uczen):
        if len(self.uczniowie) < self.max_uczniow:
            self.uczniowie.append(uczen)
            return True
        
        return False
    
    def get_average(self):
        suma = 0 # ZERUJEMY

        for uczen in self.uczniowie:
            suma += uczen.get_grade()

        return suma / len(self.uczniowie)
    
klasa_ti = Klasa("3Ti", 4) # Inicjujemy Obiekt

uczniowie = [
    Uczen("Uczen1", 17, 6),
    Uczen("Uczen2", 17, 5),
    Uczen("Uczen3", 17, 5),
    Uczen("Uczen4", 17, 5),
    Uczen("Uczen5", 17, 2)
]

for uczen in uczniowie:
    added = klasa_ti.add_uczen(uczen)

    if not added:
        print(f"Dodanie ucznia '{uczen.name}' nie udało się")

print(f"Średnia uczniów klasy {klasa_ti.name} = {klasa_ti.get_average()}")
