import ProductCard from "../../widgets/productCard"


function RelatedProducts({products}) {
  return (
    <div className="mt-10 p-5">
            <h4 className="ms-10 text-gray-400 text-sm font-bold">RELATED PRODUCTS</h4>
            <div className="sm:grid lg:grid-cols-4 mt-10  md:grid-cols-3  sm:grid-cols-2  gap-8">
                   {
                    products.slice(0, 4).map((product)=>{
                      return(
                        <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        mainImage={product.mainImage}
                        description={product.description}
                        galleryimages={product.galleryimages}
                        />
                      )
                    })
                   }
                   
                   
            </div>
    </div>
  )
}

export default RelatedProducts