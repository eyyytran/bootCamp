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
    # def __eq__(self, other):
    #     return self.priority == other.priority
    # def __ls__(self, other):
    #     return self.priority > other.priority
    

def addTask():
    userTask = input('Type in your task here: ')
    taskPriority = input('Add a Priority:\n 1 = Low\n 2 = Medium\n 3 = High\n ')
    newTask = toDo(userTask, taskPriority)
    taskList.append(newTask)

def removeTask():
    userRemove = int(input('Which task do you want to remove?\n'))-1
    for task in taskList:
        del taskList[userRemove]

def printTasks():
    for toDo in taskList:
        print(toDo.priority + ' - ' + toDo.task)

#adding to to-do list
def toDos():
    runList = True
    while runList:
        userOption = input("Type 1 to Add to the List\nType 2 to Remove a Task\nType 3 to Print List\nType 4 to Exit\n")
        if userOption == '1':
            addTask()
        if userOption == '2':
            removeTask()
        if userOption == '3':
            printTasks()
        if userOption == '4':
            runList = False
toDos()