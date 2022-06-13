#Create a todo list
taskList = []

class toDo:
    def __init__(self, task, priority):
        self.task = task
        self.priority = priority
    def __str__(self):
        print(f"")
        {self.task}
        {self.priority}

def addTask():
    userTask = input('Type in your task here: ')
    taskPriority = input('Add a Priority:\nLow\nMedium\nHigh\nType Here: ')
    newTask = toDo(userTask, taskPriority)
    taskList.append(newTask)

def removeTask():
    userRemove = int(input('Which task do you want to remove?\n'))-1
    taskList.pop(userRemove)

def printTasks():
    for toDo in taskList:
        index = taskList.index(toDo)
        print(str(index+1) + ' - ' + toDo.task + ' - ' + toDo.priority)


#adding to to-do list
def toDos():
    runList = True
    while runList:
        userOption = input("Type 1 to Add to the List\nType 2 to Remove a Task\nType 3 to Print List\nType 4 to Exit\n")
        if userOption == '1':
            addTask()
        elif userOption == '2':
            removeTask()
        elif userOption == '3':
            printTasks()
        elif userOption == '4':
            runList = False
toDos()