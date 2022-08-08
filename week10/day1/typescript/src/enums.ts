//enum
const enum Directions {
    up = 1,
    down = 1,
    left = 1,
    right = 1,
}

const right = Directions.up

const enum TshirtSizes {
    small = 's',
    medium = 'm',
    large = 'l',
}

const joeSize = TshirtSizes.small

if (TshirtSizes.medium === 'm') {
    console.log('medium shirt')
}

const enum Ages {
    young = 1,
    adult,
    old,
}

const oldMan = Ages.old
