# Inheritance
class Employee:
    def __init__(self, name, department, role):
        self.name = name
        self.department = department
        self.role = role

rahmin = Employee('Rahmin', 'IT', 'Grunt')
rayleigh = Employee('Rayleigh', 'IT', 'Grunt')
carlos = Employee('Carlos', 'IT', 'Grunt')
amanda = Employee('Amanda', 'IT', 'Grunt')

class SuperEmployee:
    pass
stacy = SuperEmployee('Stacy', 'IT', 'Manager')