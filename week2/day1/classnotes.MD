# Classes

```user = {
    'name': 'Rahmin'
}

print(user['name'])
//Rahmin
user['name'] = 'Amanda'
print(user['name'])
//Amanda
```

What if you wanted to have more than one user? Ex:

```
rahmin = newPerson()
rahmin.attack()
\\Rahmin Attacked (-5)
amanda = nowPerson()
amanda.attack()
\\Amanda Attacked (-80)
```

How to instantiate a new class:

```
class User:
    pass
rahmin = User()
print(rahmin)
\\<_main_.User object at faksfhjksd> #this is some kind of storage space, but Rahmin is now a user object.
```

A constructor needs to be added to give the class a blueprint:

```
class User:
    def__init_(self):
    #self is always the first argument
        self.attribute: 'example'
    def function(self)
        print(self.attribute)

rahmin = User()
print(rahmin.attribute)
\\'example
rahmin.function()
\\'example'
```

When you run a class, the instantiation runs first.

A functin within a class is called a METHOD.
