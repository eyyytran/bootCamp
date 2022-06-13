class User:
    def __init__(self, name, height, weight,greeting, siblings=[]):
        self.name = name
        self.height = height
        self.weight = weight
        self.siblings = siblings
        self.greeting = greeting
    def __str__(self):
        print(f"")
        {self.name}
        {self.height}
        {self.greeting}
        {self.weight}
        {self.siblings}

rahmin = User('Rahmin', '69 in', '180 lbs', 'Hello', ['Joe', 'Sam'])
print(rahmin.height + ' ' + rahmin.name)