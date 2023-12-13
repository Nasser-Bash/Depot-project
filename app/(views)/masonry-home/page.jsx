import MainContainer from "@/app/components/layout/mainContainer";
import HeroSection2 from "@/app/components/sections/home/heroSection2";
import ProductCard3 from "@/app/components/widgets/productCard3";

async function MasonryHome() {
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
    <div>
      <HeroSection2 />
      <h4 className="text-center text-black text-2xl font-bold mt-28 mb-5">
        BRAND-CENTERED BUYING
      </h4>
      <p className="text-center w-3/4 text-sm text-gray-500 mx-auto mb-28 ">
        Lorem ipsum dolor sit amet, consectetur a elit. In ut ullamcorper leo,
        eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient
        nasceturidiculus mus. Vestibulum ultricies aliquam convallis. Maecenas
        ut tellus mi. Proin tincidunt, lectus eu volutpat mattis, ante metus
        lacinia tellus, vitae condimentum nulla enim bibendum nibh. Praesent
        turpis risus, interdum nec venenatis
      </p>
      <div className="md:grid grid-cols-3 ">
        {products.map((product, index) => {
          if (index === 0) {
            return (
              <div className="col-span-2 ">
                <ProductCard3
                  key={product.id}
                  id={product.id}
                  productName={product.name}
                  productPrice={product.price}
                  productImage={product.mainImage}
                />
              </div>
            );
          }
        })}
        <div className="col-span-1 grid grid-flow-row ">
          {products.map((product, index) => {
            if (index === 1 || index === 2) {
              return (
                <>
                  <ProductCard3
                    key={product.id}
                    id={product.id}
                    productName={product.name}
                    productPrice={product.price}
                    productImage={product.mainImage}
                  />
                </>
              );
            }
          })}
        </div>
        {products.map((product, index) => {
          if (index === 3) {
            return (
              <div className="col-span-2 ">
                <ProductCard3
                  key={product.id}
                  id={product.id}
                  productName={product.name}
                  productPrice={product.price}
                  productImage={product.mainImage}
                />
              </div>
            );
          }
        })}

        <div className="col-span-1 grid grid-flow-row ">
          {products.map((product, index) => {
            if (index === 4 || index === 5) {
              return (
                <>
                  <ProductCard3
                    key={product.id}
                    id={product.id}
                    productName={product.name}
                    productPrice={product.price}
                    productImage={product.mainImage}
                    productdescription={product.description}
                    productgalleryimages={product.galleryimages}
                  />
                </>
              );
            }
          })}
        </div>
      </div>
      <MainContainer>
        <h4 className="text-center text-black text-2xl font-bold mt-28 mb-5">
          SUBSCRIBE TO NEWSLETTER
        </h4>
        <p className="text-center w-3/4 text-sm text-gray-500 mx-auto mb-28 ">
          Your brand’s power lies in dominance. It is better to have 50% of one
          market, instead of 10% of five markets.
        </p>
      </MainContainer>
    </div>
  );
}

export default MasonryHome;
