'''#Small Assignment'''
'''#Assignment 1
regularName = input('What is your name?')
print('Hello ' + regularName + '!')'''

'''#Assignment 2
bigName = input('WHAT IS YOUR NAME?')
print('HELLO ' + bigName.upper() + '!')'''

'''#Assignment 3
name = input('What is your name?')
subject = input('What is your favorite topic in school?')
print(name + "'s" + ' favorite subject in school is ' + subject + '.')'''

'''#5x5 Squares
star = '*'
N = int(input("How big do you want it? "))
for x in range(N):
    print(star*N)'''

'''#Tip Calculator
moola = float(input('What was your bill? '))
desiredTip = float(input('How much would you like to tip? Enter as a percentage of your bill(ex. 0.15): '))

def tipCalc(moola):
    totalBill = moola * (1+desiredTip)
    print('This is your bill: ' + str(moola))
    print('This is your bill plus tip: ' + str(round(totalBill, 2)))
    
tipCalc(moola)'''

#Random Guessing Game
from operator import truediv
import random

intro = "I'm thinking of a number between 1 and 10."
print(intro)

# randomNumber = random.randint(1,10)
# print(randomNumber)

limit = 3

'''#Game.v1 - Just guessing the number and starting over when wrong
def Game.v1(pythonNum):
    userInput = int(input('Pick a number between 1 and 10: '))
    print(userInput) 
    if pythonNum == userInput:
        print('Yes! You Win!')
    else:
        print('Nope, try again!')
        while pythonNum != userInput:
            Game.v1(pythonNum)
            break

Game.v1(pythonNum)'''

'''#Game.v2 - Add too high or too low
def gameV2(pythonNum):
    userInput = int(input('Pick a number between 1 and 10: '))
    print(userInput) 
    if userInput == pythonNum:
        print('Yes! You Win!')
    else:
        print('Nope, try again!')
        if userInput < pythonNum:
            print('Your guess is too low.')
        else:
            print('Your guess is too high.')
        while userInput != pythonNum:
            gameV2(pythonNum)
            break
gameV2(pythonNum)'''   

#Game.v3 - Limit the number of guesses a user can have
def gameV3():
    randomNumber = random.randint(1,10)
    print('the rand num', randomNumber)
    guesses = 0
    while True: #This basically tells Python to always run the loop, BUT stop at the following two breaks
        if guesses == limit:
            print("You're out of guesses.")
            if input("Play again? (Enter Y/N) ") == 'Y':
                gameV3()
            break
    
        currentGuess = int(input('Pick a number between 1 and 10: '))
        guesses += 1

        if currentGuess == randomNumber:
            print('You won!')
            if input("Play again? (Enter Y/N) ") == 'Y':
                gameV3()
            break
        elif currentGuess < randomNumber:
            print('Nope, try again! Your guess is too low.')
        else:
            print('Nope, try again! Your guess is too high.')

gameV3()   









