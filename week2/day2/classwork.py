#make 3 classes (parent -> child -> sibling)
#add some methods to the classes that are unique to these classes

from random import randint

class Parent:
    def __init__(self, name, occupation, DNA = 100):
        self.name = name
        self.occupation = occupation
        self.DNA = DNA
    def __str__(self):
        print(f"")
        {self.name}
        {self.occupation}
        {self.DNA}

class Child(Parent):
    def __init__(self, name, occupation, gameName, DNA=100):
        super().__init__(name, occupation, DNA)
        self.gameName = gameName

class Sibling(Child):
    def __init__(self, name, occupation, gameName, plotRelevance, DNA=100):
        super().__init__(name, occupation, gameName, DNA)
        self.plotRelevance = plotRelevance

naruto = Parent('Naruto', 'Hokage')
boruto = Child('Boruto', 'Genin', randint(48, 55), 'rock paper scissors')
himawari = Sibling('Himawari', 'Kid', 'hide and seek', 'none', randint(44,58))
print(naruto)
