import { useEffect } from 'react'
import { useAppSelector } from '../app/hooks'
import { IProduct } from '../interfaces'
import CartContent from './CartContent'
import EmptyCart from './EmptyCart'

const Cart = () => {
    const cart = useAppSelector(state => state.cart)
    return (
        <div className='cart'>
            <div className='header'>
                <h2>Your Cart</h2>
            </div>
            <div className='item-container'>
                {cart.length === 0 ? (
                    <EmptyCart />
                ) : (
                    cart.map((product: IProduct) => {
                        return (
                            <CartContent
                                description={product.description}
                                price={product.price}
                                productId={product.productId}
                            />
                        )
                    })
                )}
            </div>
            <button disabled={cart.length === 0 ? true : false}>
                Checkout
            </button>
        </div>
    )
}

export default Cart
