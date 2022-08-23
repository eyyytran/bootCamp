import { useAppSelector, useAppDispatch } from '../app/hooks'
import { IProduct } from '../interfaces'
import ProductCard from './ProductCard'

const Products = () => {
    const inventory = useAppSelector(state => state.inventory)
    const dispatch = useAppDispatch()
    return (
        <div className='product-container'>
            {inventory.map((product: IProduct) => {
                return (
                    <ProductCard
                        price={product.price}
                        description={product.description}
                    />
                )
            })}
        </div>
    )
}

export default Products
