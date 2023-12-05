'use client'
import { useState , useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";


import Link from "next/link";
import useCart from "@/app/hooks/useCart";
import MainContainer from "../../layout/mainContainer";
function CartTable() {
  
    const [cartItems, , removeFromCart , changeProductQuantity] = useCart();
    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
      };
    
      const handleChange = (productId , e)=>{
             changeProductQuantity(productId,e.target.value)
      }
      const [subTotal, setsubTotal] = useState(0);
      const [Total, setTotal] = useState(0);
      useEffect(() => {
        let sub = 0;
        
        cartItems.forEach((item) => {
          sub += item.price * item.quantity;
        });
      
        setsubTotal(sub);
        setTotal(sub + 100);
        console.log('update');
      }, [cartItems]);
  return (
    <MainContainer>
        {
             cartItems.length>0 ?
       
        <div className='lg:grid grid-cols-3 my-48 gap-20  p-10 '>
                
                <div className=" overflow-x-auto col-span-2 mb-8 ">
                    <h4 className='text-black text-2xl mb-8 ms-3 '>SHOPPING CART</h4>
                    <table className="w-full text-sm text-left text-black relative table-auto	">
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
                                <th scope="col" className="px-6 py-3">
                                    Quantity
                                </th>
                                <th scope="col" className="px-6 py-3">
                                   Total Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                               
                                cartItems.map((item)=>{
                                    return(
                                        <tr className="bg-white border-b  border-gray-300 text-gray-600">

                                        <td scope="" className=" flex   py-4 font-medium whitespace-nowrap gap-2 me-2">
                                            <FontAwesomeIcon 
                                          
                                          onClick={() => handleRemoveFromCart(item.id)}
                                            className='my-auto text-lg cursor-pointer  ' icon={faXmark}/>
                                            
                                            <img className='w-[100px] h-[100px] object-cover' src={`/images/products/${item.mainImage}`}/>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Link href={`products/${item.id}`}>
                                            {item.name}
                                            </Link>
                                     
                                        </td>
                                        <td className="px-6 py-4">
                                            $ {item.price}	
                                        </td>
        
                                        <td className="px-6 py-4">
                                        <input
                            type="number"
                            defaultValue={item.quantity}
                            onChange={(e)=>handleChange(item.id,e)}
                            className="  border bg-transparent py-2 px-3 h-full leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border border-gray-600"
                            id="exampleFormControlInputNumber"
                            placeholder="Example label" />
                                        </td>
                                        <td className="px-6 py-4">
                                            $ {item.price * item.quantity}
                                        </td>
                                    </tr>
                                    )
                                }) 
                            }
                           
                
                        </tbody>
                    </table>
                </div>
                  <div className='info w-full '>
                <div className='border-b border-gray-400 pb-10 '>
                <h4 className='text-black text-2xl mb-10 font-bold'>CART TOTALS</h4>
                <span className='flex gap-5 mb-5'>
                        <h5 className='text-black font-semibold'>SUBTOTAL</h5>
                        <p className='text-gray-500'>$ {subTotal}</p>
                </span>
                <span className='flex gap-5'>
                        <h5 className='text-black font-semibold'>SHIPPING</h5>
                        <p className='text-gray-500'>$100</p>
                </span>
                </div>
                <div>
                <span className='flex justify-between my-5'>
                        <h5 className='text-black font-semibold'>TOTAL</h5>
                        <p className='text-black font-bold text-2xl'>$ {Total}</p>
                </span>

                            <div className="flex  mb-4 p-2 justify-center gap-5 ">
                                <img className="w-1/6 h-1/6" src="/images/visa.jpeg"/>
                                <img className="w-1/6 h-1/6 " src="/images/master-card.jpeg"/>
                                <img className="w-1/6 h-1/6 " src="/images/paypal.jpeg"/>
                                <img className="w-1/6 h-1/6" src="/images/bitcoin.jpeg"/>
                            </div>

                            <Link href='/checkout'>
                            <button className="w-full bg-black text-white py-2   md:text-lg text-sm hover:bg-gray-700 transition duration-200  lg:mb-0 mb-3">PROCEED TO CHECKOUT</button>
                            </Link>
              
                </div>
                 </div>
        </div>: (
            <div className="text-center">
           
                                    <h4 className="my-10 text-black font-bold text-3xl text-center">OOOOppsss !!!!!! Your Cart is empty </h4>
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

export default CartTable