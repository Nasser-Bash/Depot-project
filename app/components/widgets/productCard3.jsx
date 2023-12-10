import Link from "next/link";

function ProductCard3(props) {
  const { productName, productPrice, productImage , id } = props;
  return (
    <Link href={`products/${id}`}>
        <div className="relative group mb-4">
                        <img className=" w-full h-full " src={`/images/products/${productImage}`}/>
                    <span className="opacity-0 cursor-pointer group-hover:opacity-70 absolute top-0 bottom-0 left-0 bg-black right-0 text-center flex flex-col justify-center items-center font-bold transition duration-600">
                        <h4 className="text-white text-lg">{productName}</h4>
                        <h6 className="text-gray-400 text-md">{productPrice}$</h6>
                    </span>
        </div>
     </Link>
  )
}

export default ProductCard3