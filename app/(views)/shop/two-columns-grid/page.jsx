import MainContainer from "../../../components/layout/mainContainer";
import ProductCard from "../../../components/widgets/productCard";
import HeroSection from "../../../components/sections/shop/heroSection";

async function TwoColumnsGrid() {
  const GetProducts = async () => {
    try {
      const response = await fetch(
        `https://depot-project.vercel.app/api/products`,
        {
          next: {
            revalidate: 60,
          },
        }
      );

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };
  const products = await GetProducts();
  return (
    <MainContainer>
      <HeroSection />
      <div className="grid md:grid-cols-2 p-5 gap-5 ">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              mainImage={product.mainImage}
              description={product.description}
              galleryimages={product.galleryimages}
            />
          );
        })}
      </div>
    </MainContainer>
  );
}

export default TwoColumnsGrid;
