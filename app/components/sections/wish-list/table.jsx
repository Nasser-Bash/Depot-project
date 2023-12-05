'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";


import Link from "next/link";
import useWishlist from "@/app/hooks/useWishlist";
import MainContainer from "../../layout/mainContainer";

function Table() {
  const [wishlistItems, , removeFromWishlist] = useWishlist();

  return (
    <MainContainer>
      
              {  
                    wishlistItems.length > 0 ? (
                  
                <div className="relative overflow-x-auto  p-20 ">
                    <h4 className='text-black text-4xl mb-8 ms-3 font-medium'>Wishlist</h4>
                    <table className="w-full text-sm text-left text-black ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50  text-black">
                            <tr>
                            <th scope="col" className="px-6 py-3">
    Product
  </th>
  <th scope="col" className="px-6 py-3">
    Name
  </th>
  <th scope="col" className="px-6 py-3">
    Price
  </th>
  
 
                            </tr>
                        </thead>
                        <tbody>
                          {
                            wishlistItems.map((item)=>{
                              return(
                                <tr className="bg-white border-b  border-gray-300 text-gray-600">
                                <td scope="col" className="flex   py-4 font-medium whitespace-nowrap ">
                                    <FontAwesomeIcon 
                                    onClick={()=>removeFromWishlist(item.id)}
                                    className='my-auto text-lg cursor-pointer' icon={faXmark}/>
                                    <img className='w-[100px] h-[100px] object-cover' src={`/images/products/${item.mainImage}`}/>
                                </td>
                                <td className="px-6 py-4 font-bold">
                                  <Link href={`/products/${item.id}`}>
                                  {item.name}
                                  </Link>
                              
                                </td>
                                <td className="px-16 py-4">
                                    $ {item.price}
                                </td>
                              
                            </tr>
                              )
                            })
                          }
                           
                            
                        </tbody>
                    </table>
                </div> ) :(
            <div className="text-center">
           
                                    <h4 className="my-10 text-black font-bold text-3xl text-center">OOOOppsss !!!!!! Your WishList is empty </h4>
                                    <button className="text-center px-5 bg-black text-white py-2   md:text-lg text-sm hover:bg-gray-700 transition duration-200  lg:mb-0 mb-3">
                                        <Link href='shop'>
                                        RETURN TO SHOPPING
                                        </Link>
                                        
                                        </button>
                                    </div>    )
           }
          
    </MainContainer>
  )
}

export default Table