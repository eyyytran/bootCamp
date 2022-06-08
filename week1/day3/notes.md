# Lists

```
array = []
list = []
```

- You can store pretty much anything within them.
- You will always access the inside of the list using the INDEX
  - `print(array[i])`

## Adding to Lists

- To add to the end of the list
  ` list.append(x)`
- To add a list to a list there are several methods:

```
list.extend(otherlist)

newlist = list + otherlist

for i in range(len(list)):
    otherlist.append(list[i])
```

# Time Space Complexity

How much space will the data take and how long will it take for us to shove it in the space

In CS, you track the worst case scenario. Because this is point where something will break.

## Big O Notation

### Creating a list takes o(n).

### Reading a list at an index what we know array[i], takes o(1).

### Reading the entire list takes o(n).

### Updating a list at an index takes o(1).

### Updating a list takes linear time o(n).

### Deleting a list at an index takes o(1).

### For computers: o(n+n) = o(2n) = o(n) wtf

### Longest to shortest

- O(1) = Constant/Instant
  - Things that are simple for the computer to do such as:
    - accessing the inside of a list by i
    - simple math
- O(log(n))
- O(n)
  - n = whatever the size of your list is
- O(nlog(n))
- O(n^2)
  - nested loops
- O(n^3)
- O(n!)
  - Wow very slow
