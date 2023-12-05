import MainContainer from "@/app/components/layout/mainContainer";
import ProductsSlider from "@/app/components/sections/home/productsSlider";
import ProductCard2 from "@/app/components/widgets/productCard2";
import baseUrl from "@/public/BaseUrl";


async function MinimalHome() {
  const GetProducts = async () => {
    try {
        const response = await fetch(`${baseUrl}/api/products`,
        {
            next : {
                revalidate : 60
            }
        }
      )
      const data = await response.json();
      
      return data
    } catch (error) {
      console.error('Error fetching data 1:', error);
      return null;
    }
  };
  const products = await GetProducts()
  return (
    <div>
          <MainContainer>
          <h4 className="text-center text-black text-2xl font-bold mt-28 mb-5">
    WELCOME

        </h4>
        <p className="text-center w-3/4 text-sm text-gray-500 mx-auto mb-28 ">
        Your brand’s power lies in dominance. It is better to have 50% of one market, instead of 10% of five markets.
        </p>
        <div className="md:grid grid-cols-3  gap-5 p-5">

                 {
        products.map((product,index)=>{
          if(index===0){
            return(
            <div className="col-span-2 ">
            <ProductCard2 
               key={product.id}
               id={product.id}
               productName={product.name}
               productPrice={product.price}
               productImage={product.mainImage}
              /> 
              </div>)
          }
         
        })
        }
 <div className="col-span-1 grid grid-flow-row"> 
{
        products.map((product,index)=>{
          if(index===1 || index===2){
            return(
              <>
              <ProductCard2 
               key={product.id}
               id={product.id}
               productName={product.name}
               productPrice={product.price}
               productImage={product.mainImage}
              
              /> 
              </>
               )    
      
          }
         
        })
        } 
        </div>
    </div>
        <h4 className="text-center text-black text-2xl font-bold mt-28 mb-5">
        WHAT THEY’RE SAYING
        </h4>
       

        <p className="text-center w-3/4 text-sm text-gray-500 mx-auto mb-28 ">
        Marketing is not selling. Marketing is building a brand in the mind of the prospect.
        </p>
       
       <ProductsSlider
        products={products}
       />
      </MainContainer>
    </div>
    
  )
}

export default MinimalHome

