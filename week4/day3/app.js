// console.log('Howdy')
//ternary operator
const admin = 'joe'
const username = admin === 'joe' ? 'jwfraiser' : 'rrozier'
//if admin is exactly joe, username is jwfraiser. otherwise, it is rrozier

//AND operator &&
const loggedIn = username === 'joe' ? 'jwfraiser' : null
const loggedIn2 = username === 'joe' && 'jwfraiser'
//these say the same thing

//OR operator ||
const permitedToStay = loggedIn || 'child'
//if the first one is falsy, it will go to the second one.

const functionThing = (username) => {
    const userToValidate = username || 'guest'
}

const array1 = ['andrea', 'amanda', 'jason']
const array2 = ['blke', 'stacy', "rahmin's mom"]
// const students = array1.concat(array2)
const students = [...array1, ...array2]
///Spread operator - this can be used an any iterable
// console.log(students)

// for (const student of students) {
//     let newStudent = student.toUpperCase()
//     console.log(newStudent)
// }

// students.forEach((element) => {
//     let newStudent = element.toUpperCase()
//     return newStudent
// })

const upperCaseStudents = students.map((student) => student.toUpperCase())
//this loops over everything, and then it puts an array around the result
//if you can write your logic all in one line, you do not need curly braces or a return statment
// console.log(upperCaseStudents)

const googleEmployee = {
    name: 'Sundar Pichai',
    status: 'ceo',
    salary: '1 billion dollars',
    projects: [{ name: 'project x' }, { name: 'googlefi' }],
}

const noogleEmployess = {
    name: 'Carlos Silva',
    status: 'noogler',
    salary: 'not much',
    department: 'cloud',
}

const allGoogleEmployees = [googleEmployee, noogleEmployess]

//optional chaining will protect your code with similar, but slightly different inputs
allGoogleEmployees.forEach((emp) =>
    console.log(emp?.projects ? emp.projects[0] : emp.department)
)
console.log(allGoogleEmployees)
