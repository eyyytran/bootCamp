list1 = [8,5,2,9,5,6,3]

for i in range(len(list1)):
    j = i+1
    for j in range(len(list1)):
        if list1[i] < list1[j]:
            list1[i], list1[j] = list1[j], list1[i]
            j +=1
print(list1)