"use client";
import { useState } from "react";
import ProductCard from "../../widgets/productCard";
import Filter from "../shop/filter";

function products({ products, categories }) {
  const [allProducts, setallProducts] = useState(products);

  return (
    <>
      <Filter
        products={products}
        categories={categories}
        setallProducts={setallProducts}
      />
      {allProducts.length > 0 ? (
        <div className="sm:grid lg:grid-cols-4 mt-10  md:grid-cols-3  sm:grid-cols-2  gap-8">
          {allProducts.map((product) => {
            return (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                mainImage={product.mainImage}
                description={product.description}
                galleryimages={product.galleryimages}
              />
            );
          })}
        </div>
      ) : (
        <h4 className="text-center text-black text-xl font-bold mt-20 p-10  ">
          No products found
        </h4>
      )}
    </>
  );
}

export default products;
