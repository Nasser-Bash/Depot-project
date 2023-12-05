import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight  } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function ProductCard2(props) {
  const { productName, productPrice, productImage ,id } = props;
  return (
    <Link href={`products/${id}`}>
    <div className={`text-black relative group-two mb-3   `}>
            <img className="object-cover w-full h-full" src={`/images/products/${productImage}`}/>
            <div className="absolute top-5 left-10">
            <span className={`group-two-hover:translate-x-[3%] translate-x-[-14%] text-black font-[600] transition duration-300  inline-block `}>
        <FontAwesomeIcon className={` translate-x-[-200%]  group-two-hover:translate-x-[-50%]     opacity-0 invisible  group-two-hover:opacity-100 group-two-hover:visible  transition duration-700 `} icon={faArrowRight}/>
                                              
             {productName}</span>
             <h5 className="text-gray-500 text-sm font-[600]">{productPrice}$</h5>
            </div>
    </div>
    </Link>
  )
}

export default ProductCard2