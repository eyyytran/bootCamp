#Coin Flip
import random
def coin():
    side = random.randint(1,2)
    if side == 2:
        return 'You flipped a coin! \nIt is heads!'
    return 'You flipped a coin! \nIt is tails!'

print(coin())

#Even Odd
userNum = int(input('Give me a whole number: '))
def evenOdd(userNum):
    if userNum % 2 == 0:
        return "It's even!"
    return "It's odd!"

print(evenOdd(userNum))

#Dice Roller
import random
sides = int(input("How many sides should it have? \nEnter a number between 2 and 20: "))
print("Let's roll a die! ")

def dice (minSides,sides):
    print("It's rolling... ")
    result = random.randint(minSides,sides)
    return "It's a " + str(result)

print(dice(1,sides))
    