import { stat } from 'fs'
import { IProduct } from '../interfaces'

const productData: Array<IProduct> = [
    {
        description: 'Beauty of Joseon Relief Sun Cream',
        price: 'USD 12.00',
        productId: '1',
    },
    {
        description: 'Round Lab Birch Juice Sun Cream',
        price: 'USD 15.00',
        productId: '2',
    },
    {
        description: 'Dr. G Red Blemish Soothing Up Sun',
        price: 'USD 27.00',
        productId: '3',
    },
    {
        description: 'Cell Fusion C Toning Sunscreen',
        price: 'USD 14.00',
        productId: '4',
    },
    {
        description: 'goodal Cordata Calming Sun Cream',
        price: 'USD 17.00',
        productId: '5',
    },
    {
        description: 'ETUDE Soon Jung Moisture Sun Cream',
        price: 'USD 15.00',
        productId: '6',
    },
]

type State = {
    user: string
    cart: IProduct[]
    inventory: IProduct[]
    order: { user: string; items: IProduct[] }
}

const initialState: State = {
    user: 'Andrea',
    cart: [],
    inventory: productData,
    order: { user: 'Andrea', items: [] },
}

type Action = {
    type: string
    payload?: any
}

const rootReducer = (state = initialState, action: Action) => {
    switch (action?.type) {
        case 'ADD_ITEM':
            state.inventory = state.inventory.filter((product: IProduct) => {
                return product.productId !== action.payload.productId
            })
            return { ...state, cart: [...state.cart, action.payload] }
        case 'REMOVE_ITEM':
            state.cart = state.cart.filter((product: IProduct) => {
                return product.productId !== action.payload.productId
            })
            return {
                ...state,
                inventory: [...state.inventory, action.payload],
                cart: state.cart,
            }
        default:
            return state
    }
}

export default rootReducer
