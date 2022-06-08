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