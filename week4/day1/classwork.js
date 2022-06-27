const lvl5exercise1 = (string) => {
    var arr = [1, 'adam']
    arr.push(string)
    return arr
}

const lvl5exercise2 = () => {
    var arr = [1, 'adam']
    arr.pop()
    return arr
}

function lvl5exercise3() {
    // Return the length of the array
    var arr = [1, 'adam']
    return arr.length
}

function lvl5exercise4() {
    // Return the index of item "adam" in the array
    var arr = [1, 'adam']
    return arr.indexOf('adam')
}

function lvl6exercise1(num) {
    // Return 'hello' if num is 1, 'world' if num is 2, otherwise return 'bye'
    // use a switch statement
    switch (num) {
        case 1:
            return 'hello'
        case 2:
            return 'world'
        default:
            return 'bye'
    }
}

function lvl6exercise2() {
    // Push 10 'hello' strings into the array using a for loop, then return it
    var arr = []
    input = [
        'hello',
        'hello',
        'hello',
        'hello',
        'hello',
        'hello',
        'hello',
        'hello',
        'hello',
        'hello',
    ]
    for (let i = 0; i < input.length; i++) {
        arr.push(input[i])
    }
    return arr
}

function lvl6exercise3() {
    var arr = [
        'hello',
        'hello',
        'hello',
        'hello',
        'hello',
        'hello',
        'hello',
        'hello',
        'hello',
        'hello',
    ]
    while (arr.length > 0) {
        arr.pop()
    }
    return arr
}

const finalFunction = (input = 0) => {
    const result = []
    if (input > 0) {
        for (let i = 0; i < input; i++) {
            result.push('cat')
        }
        return result
    }
    return result
}

//study mul and anonymous functions
