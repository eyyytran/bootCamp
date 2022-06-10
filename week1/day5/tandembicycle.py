#tandemSpeed = max(speedA, speedB)
#fastest = true/false
redShirtSpeeds = [5,5,3,9,2]
blueShirtSpeeds = [3,6,7,2,1]

def tandem(groupA,groupB,fastest):
    groupA.sort()
    groupB.sort()
    speed = []
    if fastest == True:
        groupB.reverse()
    for i in range(len(groupA)):
        if groupA[i] > groupB[i]:
            speed.append(groupA[i])
        if groupA[i] == groupB[i]:
            speed.append(groupA[i])
        if groupA[i] < groupB[i]:
            speed.append(groupB[i])
    result = sum(speed)
    return result

