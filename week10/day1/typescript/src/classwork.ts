const userIds = [
    {
        id: 'b6809de6-1743-11ed-861d-0242ac120002',
    },
    {
        id: 'b680a0b6-1743-11ed-861d-0242ac120002',
    },
    {
        id: 'b680a1e2-1743-11ed-861d-0242ac120002',
    },
    {
        id: 'b680a2fa-1743-11ed-861d-0242ac120002',
    },
    {
        id: 'b680a3fe-1743-11ed-861d-0242ac120002',
    },
    {
        id: 'b680a7c8-1743-11ed-861d-0242ac120002',
    },
    {
        id: 'b680a8ea-1743-11ed-861d-0242ac120002',
    },
    {
        id: 'b680aa0c-1743-11ed-861d-0242ac120002',
    },
    {
        id: 'b680ab2e-1743-11ed-861d-0242ac120002',
    },
]

const usersToAssign = [
    { name: 'user' },
    { name: 'user' },
    { name: 'user' },
    { name: 'user' },
    { name: 'user' },
    { name: 'user' },
    { name: 'user' },
    { name: 'user' },
    { name: 'user' },
]

const newNames = [
    'Amanda',
    'Stacy',
    'Olivia',
    'Jason',
    'Blake',
    'West',
    'Carlos',
    'Ethan',
    'Rahmin',
]

const getRandInt = (max: number): number => {
    return Math.floor(Math.random() * max)
}

type AssignedUser = {
    name: string
    id: string
}

type FormattedUser = {
    name: string
    dept?: string
    id: string
    createdAt: Date
    updatedAt: Date
    userVerification: boolean
}

const verifyUser = (user: { name: string; id: string }): boolean => {
    if (!userIds.find(({ id }) => id === user.id)) {
        console.log('not found in userIds')
        return false
    }
    if (!newNames.find(element => element === user.name)) {
        console.log('not found in newNames')
        return false
    }
    return true
}

const userVerificationV2 = (user: { name: string; id: string }): boolean =>
    Boolean(userIds.find(({ id }) => id === user.id)) &&
    newNames.includes(user.name)

const assignUsers = (
    names: { name: string }[],
    ids: { id: string }[]
): AssignedUser[] =>
    names.map(({ name }, index) => ({
        name,
        id: ids[index].id,
    }))

const nameUsers = (
    users: { name: string; id: string }[],
    names: string[]
): { name: string; id: string }[] => {
    const results = []
    const namesCopy = [...names]
    let max = 9
    for (let i = 0; i < users.length; i++) {
        let j = getRandInt(max)
        let result = {
            name: namesCopy[j],
            id: users[i].id,
        }
        results.push(result)
        namesCopy.splice(j, 1)
        max -= 1
    }
    return results
}

const updatedUsers: { name: string; id: string }[] = nameUsers(
    assignUsers(usersToAssign, userIds),
    newNames
)

const formatUsers = (users: { name: string; id: string }[]): AssignedUser[] =>
    users.map(user => ({
        name: user.name,
        id: user.id,
        createdAt: new Date(),
        updatedAt: new Date(),
        verification: verifyUser(user),
    }))

formatUsers(updatedUsers)
