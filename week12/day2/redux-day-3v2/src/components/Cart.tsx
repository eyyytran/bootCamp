import { useEffect } from 'react'
import { useAppSelector } from '../app/hooks'

const Cart = () => {
    const cart = useAppSelector(state => state.cart)
    return <div>Cart</div>
}

export default Cart
