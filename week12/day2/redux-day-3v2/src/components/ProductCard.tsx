import { useAppDispatch } from '../app/hooks'
import { IProduct } from '../interfaces'
const ProductCard = (props: IProduct) => {
    const dispatch = useAppDispatch()
    return (
        <div className='product-card'>
            <div className='description'>{props?.description}</div>
            <div className='price'>{props?.price}</div>
            <button
                onClick={() => dispatch({ type: 'ADD_ITEM', payload: props })}
            >
                Add to Cart
            </button>
        </div>
    )
}

export default ProductCard
