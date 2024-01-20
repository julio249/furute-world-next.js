
import { ProductView } from "app/components/Product/ProductView"
import { getProducts } from "app/services/shopify/products"
import { redirect } from "next/navigation"
import { title } from "process"



interface ProductPageProps{
    searchParams:{
        id: string
    }
}

export async function generateMetadata({ searchParams }: ProductPageProps) {
    const id = searchParams.id

    const products = await getProducts(id)

    const product = products[0]

    return {
        title: product.title,
        Description: product.description,
        keywords: product.tags,
        openGraph: {
            images: [product.image]
        }
    }
}



export default async function ProductPage({searchParams}: ProductPageProps){
    
    const id = searchParams.id

    const products = await getProducts(id)

    const product = products[0]

    if(!id){
        redirect('/store')
    }

    // console.log('searchParams ',  id)

    return <ProductView product={product}/>
        
    
}