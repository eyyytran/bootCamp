import { IProduct } from '../interfaces'

const productData: Array<IProduct> = [
    {
        description: 'Beauty of Joseon Relief Sun Cream',
        price: 'USD 12.00',
    },
    {
        description: 'Round Lab Birch Juice Sun Cream',
        price: 'USD 15.00',
    },
    {
        description: 'Dr. G Red Blemish Soothing Up Sun',
        price: 'USD 27.00',
    },
    {
        description: 'Cell Fusion C Toning Sunscreen',
        price: 'USD 14.00',
    },
    {
        description: 'goodal Cordata Calming Sun Cream',
        price: 'USD 17.00',
    },
    {
        description: 'ETUDE Soon Jung Moisture Sun Cream',
        price: 'USD 15.00',
    },
]

type State = {
    user: string
    cart: Array<{}>
    inventory: IProduct[]
    // inventory: { description: string; price: string }[]
}

const initialState: State = {
    user: 'Andrea',
    cart: [],
    inventory: productData,
}

type Action = {
    type: string
    payload?: any
}

const rootReducer = (state = initialState, action: Action) => {
    switch (action?.type) {
        case 'ADD_ITEM':
            return { ...state, cart: [...state.cart, action.payload] }
        case 'REMOVE_ITEM':
            state.cart.splice(action.payload, 1)
            return { ...state, cart: state.cart }
        default:
            return state
    }
}

export default rootReducer
