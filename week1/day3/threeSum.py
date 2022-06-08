nums1 = [12,3,1,2,-6,5,-8,6]

def threeSum(list, target):
    list.sort()
    result = []
    A = 0
    B = A+1
    C = len(list) - 1
    while A < B < C:
        if (list[A]+list[B]+list[C]) > target:
            print('if ran')
            C -= 1
        elif (list[A]+list[B]+list[C]) < target:
            print('elif ran')
            B += 1
        else: 
            result.append([list[A],list[B],list[C]])
            A +=1
    return result

print(threeSum(nums1, 0))

        
        


        



