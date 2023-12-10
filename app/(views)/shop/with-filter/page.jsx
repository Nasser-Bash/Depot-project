

import HeroSection from "@/app/components/sections/shop/heroSection";
import Products from "@/app/components/sections/home/products";
import MainContainer from "@/app/components/layout/mainContainer";


async function WithFilter() {

  const GetProducts = async () => {
    try {
      const response = await fetch(`https://depot-project.vercel.app/api/products`,{ 
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
  const GetCategories = async () => {
    try {
      const response = await fetch(`https://depot-project.vercel.app/api/categories`, {
      
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


