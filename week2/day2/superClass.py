# Inheritance
class Employee:
    def __init__(self, name, department, role):
        self.name = name
        self.department = department
        self.role = role
    def talkAboutWork(self):
        print('eww')

class SuperEmployee(Employee):
    def __init__(self, name, department, role, security):
        super().__init__(name, department, role) #this allows for inheritance of the previous class attributes
        self.securitylevel = security #and now we can add more attributes
    def leadStandUp():
        print('Let us have stand up.')
    pass

rahmin = Employee('Rahmin', 'IT', 'Grunt')
rayleigh = Employee('Rayleigh', 'IT', 'Grunt')
carlos = Employee('Carlos', 'IT', 'Grunt')
amanda = Employee('Amanda', 'IT', 'Grunt')
stacy = SuperEmployee('Stacy', 'IT', 'Manager', 'top level')