

import HeroSection from "@/app/components/sections/shop/heroSection";
import Products from "@/app/components/sections/home/products";
import MainContainer from "@/app/components/layout/mainContainer";
import baseUrl from "@/public/BaseUrl";
import Filter from "@/app/components/sections/shop/filter";

async function WithFilter() {

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
  const GetCategories = async () => {
    try {
        const response = await fetch(`${baseUrl}/api/categories`,
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
  const categories = await GetCategories()
  return (
    <div className="">
      <HeroSection />
      <MainContainer>
      
        <Products products={products} categories={categories}/>
      </MainContainer>
    </div>
  );
}

export default WithFilter;


