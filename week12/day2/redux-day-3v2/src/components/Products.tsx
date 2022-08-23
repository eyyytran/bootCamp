import { useAppSelector } from '../app/hooks'
import { IProduct } from '../interfaces'
import ProductCard from './ProductCard'

const Products = () => {
    const inventory = useAppSelector(state => state.inventory)
    return (
        <div className='product-container'>
            {inventory.map((product: IProduct) => {
                return (
                    <ProductCard
                        price={product.price}
                        description={product.description}
                        productId={product.productId}
                    />
                )
            })}
        </div>
    )
}

export default Products
