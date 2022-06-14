#make 3 classes (parent -> child -> sibling)
#add some methods to the classes that are unique to these classes

from turtle import window_height
from unicodedata import name


class Parent:
    def __init__(self, name, occupation, DNA = 100):
        self.name = name
        self.occupation = occupation
        self.DNA = DNA

class Child(Parent):
    def __init__(self, name, occupation, DNA=100, game):
        super().__init__(name, occupation, DNA)
        self.game = game

class Sibling(Child):
    def __init__(self):
        pass 

naruto = Parent('Naruto', 'Hokage')
print(naruto)