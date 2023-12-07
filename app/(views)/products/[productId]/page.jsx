
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faChevronUp,
  faChevronDown,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";


import Link from "next/link";

import MainContainer from "@/app/components/layout/mainContainer";
 import AddInfo from "@/app/components/sections/product/addInfo";

import Gallery from "@/app/components/sections/product/gallery";
import AddToCart from "@/app/components/sections/product/addToCart";
import AddToWishlist from "@/app/components/sections/product/addToWishlist";
import RelatedProducts from "@/app/components/sections/product/relatedProducts";
async function Product(props) {
  const GetProducts = async () => {
    try {
      const response = await fetch(`https://depot-project.vercel.app/api/product/${props.params.productId}`, {
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

  const product = await GetProducts()

 

 

  return (
    <MainContainer>
      <div className="lg:grid grid-cols-2 md:p-10 p-5  gap-5">

        <Gallery product={product}/>
        <div className="product-info    p-8 ">
          <h4 className="text-black text-3xl uppercase mb-3">
            {" "}
            {product.name}{" "}
          </h4>
          <p className="text-gray-500 text-xl mb-16">
            $ {product.price}{" "}
          </p> 
          <span className="text-amber-300 ">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </span>
          <p className="text-gray-400   text-sm my-8">
            {product.description}
          </p> 
           
           <AddToCart product={product}/>
         <span className="flex gap-2 mt-8">
            <h4 className="font-bold">Categories :</h4>
            {product.categories.map((category) => {
              return <p className="text-sm my-auto">{category.name} ,</p>;
            })}
          </span> 

            <AddToWishlist product={product}/>
        </div>
      </div>
      <AddInfo productId={props.params.productId} />
      
      
      
      <RelatedProducts /> 
    </MainContainer>
  );
}

export default Product;

