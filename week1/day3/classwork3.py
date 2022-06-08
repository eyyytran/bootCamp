# Square the numbers in this list
numbers = [1, 2, 3, 4, 5, 6, 7]
# Output [1, 4, 9, 16, 25, 36, 49]
def squares(list):
    newList = []
    for num in list:
        squared = num*num
        newList.append(squared)
    return newList

           
# Remove all empty strings in this list
list1 = ["Mike", "", "Emma", "Kelly", "", "Brad"]
# output ["Mike", "Emma", "Kelly", "Brad"]
def cropped(list):
    crops = []
    for name in list:
        if name != "":
            crops.append(name)
    return crops


def cropped_v2(list):
    for name in list:
        if name == "":
            list.remove(name)
    return list

# # Add new item to list after a specified item
list2 = [10, 20, [300, 400, [5000, 6000], 500], 30, 40]
# # output [10, 20, [300, 400, [5000, 6000, 7000], 500], 30, 40]
list2[2][2].append(7000)

# Replace list's item with new value if found
list3 = [5, 10, 15, 20, 25, 50, 20]
# output [5, 10, 15, 200, 25, 50, 20]
def find(list):
    for i in range(len(list3)):
        if list[i] == 20:
            list.remove(list[i])
            list.insert(i,200)
            break
    return list


# Remove all occurrences of a specific item from a list.
list4 = [5, 20, 15, 20, 25, 50, 20]
# output [5, 15, 25, 50]
def find(list):
    for i in range(len(list)):
        if list[i] == 20:
            list.remove(list[i])
            list.insert(i,200)
    return list

#Sequence Practive
list5 = [4,6,1,2,-1,-2]
#Small1
print(sum(list5))

#Small2
list6 = list5.copy()
list6.sort()
print(list6[-1])

#Small3
print(list6[0])

#Small4
def evens(list):
    for num in list:
        if num % 2 == 0:
            return num
print(evens(list5))

#Small5
def pos(list):
    for num in list:
        if num > 0:
            return num
print(pos(list5))

#Small6
def pos2(list):
    newList = []
    for num in list:
        if num > 0:
            newList.append(num)
    return newList
print(pos2(list5))

#Small7
def mults(list, factor):
    newList = []
    for num in list:
        mult = factor * num
        newList.append(mult)
    return newList
print(mults(list5,5))

#Small8
string1 = 'coolio'
def rev(string):
    newString = string[::-1]
    return newString
print(rev(string1))

#Large Tic-Tac-Toe
def makeBoard(size):
    board = []
    for y in range(size): #making rows
        board.append([])
        for x in range(size):
            board[y].append("[%s][%s]" % ('',''))
    for row in board: #making columns
        for column in row:
            print("%s " % column, end="")
        print("\n")
    return board
makeBoard(3)
