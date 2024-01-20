import { ProductCard } from "../ProductCard"
import styles from './ProductWrapper.module.sass'

interface ProductWrapperProps{
    products: ProductType[]
}

export const ProductWrapper = ({ products } : ProductWrapperProps ) =>{
    return(
        <div className={styles.ProductsWrapper}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}