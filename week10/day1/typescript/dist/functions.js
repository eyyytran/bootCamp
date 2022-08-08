"use strict";
const printTwelve = () => {
    return 12;
};
const printArrayOfNums = (num1, num2) => {
    return [num1, num2];
};
const parsePassword = (password) => {
    if (password) {
        //hash the password with db pasword using bcrypt
        return true;
    }
    return false;
};
const calcIncomeTax = (salary, state) => {
    if (state) {
        const total = salary * 1.5;
        return total * 1.2;
    }
    if (salary > 120000) {
        return salary * 1.25;
    }
    return salary * 1.75;
};
