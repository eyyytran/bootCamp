import { createClient } from '@supabase/supabase-js'
import { useAppSelector } from '../app/hooks'
import { IProduct } from '../interfaces'
import CartContent from './CartContent'
import EmptyCart from './EmptyCart'
import config from '../../config.json'

const URL = config.SUPABASE_URL
const KEY = config.SUPABASE_KEY
const supabase = createClient(URL, KEY)

const Cart = () => {
    const cart = useAppSelector(state => state.cart)
    const sendToDb = async () => {
        const { data, error } = await supabase
            .from('ProductsDatabase')
            .insert([{ name: 'Andrea', items: cart }])
    }

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
            <button
                disabled={cart.length === 0 ? true : false}
                onClick={sendToDb}
            >
                Checkout
            </button>
        </div>
    )
}

export default Cart
