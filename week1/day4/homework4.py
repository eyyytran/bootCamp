
#1) Factorials
import math
def factorials():
    n = int(input('Find the factorial of this number: \n'))
    result = math.factorial(n)
    return print(result)

def factorials_v2(n):
    result = 1
    for i in range(2, n+1):
        result *= i
    return result

#2) Palindrome
def palindrome():
    word = input('Is this word a palindrome? \n')
    reversed = word[::-1]
    if reversed.lower() == word.lower():
        return print('This is a palindrome.')
    return print('This is not a palindrome')

#3) Prime Numbers
def prime():
    n = int(input('Is this a prime number?: \n'))
    for i in range(2, n):
        if (n % i) == 0:
            return print('This is not a prime number.')
        return print('This is a prime number.')
    return print('This is not a prime number.')
prime()