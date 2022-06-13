class User:
    def __init__(self, firstName, lastName, address = []):
        self.firstName = firstName
        self.lastName = lastName
        self.address = address
    def addAddress(self,Address):
        self.address.append(Address)
    def changeFirstName (self, newName):
        self.firstName = newName
        
class Address:
    def __init__(self, street, city, state, zipcode):
        self.street = street
        self.city = city
        self.state = state
        self.zipcode = zipcode

fakeAddress = Address('123 Street', 'City', 'GA', '30305')
Andrea = User('Andrea', 'Tran')
Andrea.addAddress(fakeAddress)
print(Andrea.address[0].street)