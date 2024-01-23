import { getMainProducts } from 'app/services/shopify/products'
import styles from './MainProducts.module.sass'
import Image from 'next/image'



export const MainProducts = async () => {

    // const response = await fetch('http://localhost:3001/api')

    // const {products} = await response.json()

     const products = await getMainProducts()

    console.log(products)
    //env variables
    // console.log("env var: ", process.env.SHOPIFY_API_KEY)
    return(
        <section className={styles.MainProducts}>
            <h3>✨ New products released!</h3>
                <div className={styles.MainProducts__grid}>
                    {products?.map((product: {
                        id: string,
                        title: string,
                        images: {
                        src: string
                        }[]
                    }) => {
                    const imageSrc = product.images[0].src
                    return (
                        <article key={product.id}>
                            <p>{product.title}</p>
                            <Image src={imageSrc} fill alt={product.title} loading="eager" />
                        </article>
                    )
                    })}
                </div>
        </section>
    )
}