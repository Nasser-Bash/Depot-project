
import HeroSection from "../../components/sections/shop/heroSection";
import MainContainer from "../../components/layout/mainContainer";
import Products from "../../components/sections/shop/products";
import Sidebar from "../../components/layout/sidebar";
import baseUrl from "@/public/BaseUrl";

async function  Shop() {
  const GetProducts = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/products`, {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`
        },
        next: {
          revalidate: 60
        }
      });
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  const products = await GetProducts()

   
  return (
    <>
    <HeroSection/>
        <MainContainer>
                <Products products={products} />
        </MainContainer>
    </>
    
  )
}

export default Shop
