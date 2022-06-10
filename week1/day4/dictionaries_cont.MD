# Dictionaries Continued

```
variable = {
    "key": value
}
```

- Dictionaries can contain a mix of type of variables.

### Accessing the Dictionary

```
print(variable[key][something inside the value])
```

- This is how you access a dictionary.

```
bigData = [{},{},{}]
for data in bigData:
    print(data)
```

- This will print a dictionary.

`print(bigData[0]["key"])`

- This will print a value from within a list of dictionaries.

### Changing things within a dictionary

`dictionary[key] = 'new value'`

### Adding things within a dictionary

`dictionary[new key] = 'new value'`

`dictionary[key].append({'new key':'new value'})`

    - If your value is a list of dictionaries, you can add to it with append.
