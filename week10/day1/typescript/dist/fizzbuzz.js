"use strict";
const fizzBuzz = (num) => {
    let result = '';
    if (num % 3 === 0) {
        result + 'fizz';
        if (num % 5 === 0) {
            return result + 'buzz';
        }
        else
            return result;
    }
    else if (num % 5 === 0) {
        return result + 'buzz';
    }
    else
        return result + 'bust';
};
