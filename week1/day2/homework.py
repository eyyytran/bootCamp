#Coin Flip
import random
def coin():
    side = random.randint(1,2)
    result = ''
    if side == 2:
        result = 'You flipped a coin! \nIt is heads!'
        return result
    else:
        result = 'You flipped a coin! \nIt is tails!'
        return result
print(coin())

#Even Odd
userNum = int(input('Give me a whole number: '))
def evenOdd(userNum):
    result = ''
    if userNum %2 == 0:
        result = "It's even!"
        return result
    else:
        result = "It's odd!"
        return result

print(evenOdd(userNum))

#Dice Roller
import random
sides = int(input("How many sides should it have? \nEnter a number between 2 and 20: "))
minSides = 1

print("Let's roll a die! ")

def dice (minSides,sides):
    print("It's rolling... ")
    result = random.randint(minSides,sides)
    print(minSides,sides)
    return "It's a " + str(result)

print(dice(minSides,sides))
    