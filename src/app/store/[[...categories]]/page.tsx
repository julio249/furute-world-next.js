import { ProductWrapper } from "app/components/Store/ProductWrapper"
import { getCollectionProducts, getCollections } from "app/services/shopify/collections"
import { getProducts } from "app/services/shopify/products"


export const runtime = "edge"

interface CategoryProps {
    params: {
      categories: string[],
    }
    searchParams?: string
  }
  
  export default async function Category(props: CategoryProps){
    
    let products = []

    const { categories } = props.params
    // const categorias = props.params.categories
    
    const collections = await getCollections()
    console.log('categories: ', categories)
    
    
    console.log('categories: ', categories)
    // console.log('selectedCollectionId: ', selectedCollectionId)
    // const productsByCollection = await getCollectionProducts(selectedCollectionId)
    
    if(categories?.length > 0){
      const selectedCollectionId = collections.find((collection) => collection.handle === categories[0]).id
      products = await getCollectionProducts(selectedCollectionId)
    }
    else{
      products = await getProducts()
    } 
    // throw new Error('Error')

    return(
      
      <ProductWrapper products={ products }/>
    )
  }