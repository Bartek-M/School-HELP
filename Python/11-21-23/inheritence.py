class Pet:
    def __init__(self, name, age):
        self.name = name
        self.age = age

        print("HELLO", name, age)

    def speak(self):
        print("Nie potrafię mówić")

class Dog(Pet):
    def __init__(self, name, age, rasa):
        super().__init__(name, age)
        self.rasa = rasa

        print(f"Pies {name}, rasa: {self.rasa}")

    def speak(self):
        print("Hau! Hau!", self.name)

class Cat(Pet):
    def speak(self):
        print("Miau! Miau!", self.name)

class Fish(Pet):
    def speak(self):
        print("Gul! Gul! Gul!", self.name)

class Bird(Pet):
    pass


Dog("Burek", 4, "jakas_rasa").speak()
Cat("Apollo", 7).speak()
Fish("Rambo", 8).speak()
Bird("Maverick", 2).speak()