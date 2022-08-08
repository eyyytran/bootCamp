//objects
//const user = {name:"joe"}
let user: {
    name: string
} = {
    name: 'joe',
}

//type alias
// for the example above
type User = {
    // name: string
    // username: string
    // age?: number //the ? makes it optional
    [k: string]: any // this gives you a wildcard to add keys and values the k stands for keyboardevent
}

let amanda: User = {
    name: 'Amanda',
    username: 'benjilove',
    age: 22,
    email: 'lizardsrcool@yahoo.com',
}

let west: User = {
    name: 'West',
    username: 'alohaWest',
}

//if you don't know what your keys or types of data will be you can use this
// const obj = {[key:string]:any}

type Carpenter = {
    companyName: string
    readonly id: number //makes the id unchangeable
}

let ethan: Carpenter = {
    companyName: 'Wood Workers Inc',
    id: 12345,
}

let listOfCarpenters: Carpenter[] = [ethan]

type Password = {
    password: string | number
    securityClearance: 'basic' | 'top-secret'
}

type SoftwareEngineer = {
    readonly id: number
    password: Password
}

//*** */

type BasicUser = {
    id: number
    password: number | string
    email: string
    createdAt: Date
    updatedAt: Date
}

type AdminUser = BasicUser & {
    clearanceLevel: 'top-secret' | 'basic'
}

const listOfUsers: AdminUser[] | BasicUser[] = []
