import { useAppSelector } from '../app/hooks'
import { IProduct } from '../interfaces'
import ProductCard from './ProductCard'

const Products = () => {
    const inventory = useAppSelector(state => state.inventory)
    return (
        <div className='product-container'>
            <div className='header'>
                <h2>Suncare</h2>
            </div>
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
