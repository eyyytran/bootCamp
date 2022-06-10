#Find the first non-repeating or return -1
# O(n)

string1 = 'bbabc'

def repeating(string):
    counter = {}
    for char in string:
        counter[char] = counter.get(char,0) + 1
    for char in counter:
        if counter[char] == 1: 
            index = list(string).index(char)
            print(index)
            return print (char + ' is the first nonrepeating character')
    return print('-1')
        
repeating(string1)
