
import MainContainer from "@/app/components/layout/mainContainer";
import HeroSection from "@/app/components/sections/home/heroSection";
import ProductCard3 from "@/app/components/widgets/productCard3";
import baseUrl from "@/public/BaseUrl";
async function PassepartoutHome(props) {
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
      return [];
    }
  };
  const products = await GetProducts()
  return (
    <>
        <HeroSection/>
        <MainContainer>
        <div className="md:grid grid-cols-4  gap-5 p-5">
        <div className="col-span-2 grid grid-cols-2 grid-flow-row gap-5">
        {
      products && products.map((product,index)=>{
          if(index<=3){
            return(
           
            <ProductCard3 
               key={product.id}
               id={product.id}
               productName={product.name}
               productPrice={product.price}
               productImage={product.mainImage}
              /> 
              )
          }
         
        })
        }
        </div>
        <div className="col-span-2">
        {
       products.map((product,index)=>{
          if(index===4){
            return(
           
            <ProductCard3 
               key={product.id}
               id={product.id}
               productName={product.name}
               productPrice={product.price}
               productImage={product.mainImage}
              /> 
              )
          }
         
        })
        }
        </div>
      
       
        
    
              
        </div>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
        {
       products.map((product,index)=>{
          if(index >= 5 && index <= 8){
            return(
           
            <ProductCard3 
               key={product.id}
               id={product.id}
               productName={product.name}
               productPrice={product.price}
               productImage={product.mainImage}
              /> 
              )
          }
         
        })
        }
        </div>
        <div className="md:grid grid-cols-4  gap-5 p-5">
       
      
       
        <div className="col-span-2">
        {
       products.map((product,index)=>{
          if(index===9){
            return(
           
            <ProductCard3 
               key={product.id}
               id={product.id}
               productName={product.name}
               productPrice={product.price}
               productImage={product.mainImage}
              /> 
              )
          }
         
        })
        }
        </div>
        <div className="col-span-2 grid grid-cols-2 grid-flow-row gap-5">
        {
        products.map((product,index)=>{
          if(index >= 10 && index <= 13){
            return(
            <ProductCard3 
               key={product.id}
               id={product.id}
               productName={index}
               productPrice={product.price}
               productImage={product.mainImage}
              /> 
              )
          }
         
        })
        }
        </div>
    
              
        </div>
       
      
        </MainContainer>
    </>
  )
}

export default PassepartoutHome

