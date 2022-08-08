const printTwelve = (): number => {
    return 12
}

const printArrayOfNums = (num1: number, num2: number): number[] => {
    return [num1, num2]
}

const parsePassword = (password: string | number): boolean => {
    if (password) {
        //hash the password with db pasword using bcrypt
        return true
    }
    return false
}

const calcIncomeTax = (salary: number, state?: string): number => {
    if (state) {
        const total = salary * 1.5
        return total * 1.2
    }
    if (salary > 120_000) {
        return salary * 1.25
    }
    return salary * 1.75
}
