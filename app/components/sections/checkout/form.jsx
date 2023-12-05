'use client'

import useCart from "@/app/hooks/useCart";



function CheckoutForm() {
    const [cartItems] = useCart();
  return (
    <div className="py-8 lg:py-16 p-5   w-full">
        <h4 className="text-black text-3xl mb-8">BILLING DETAILS</h4>
      <form action="#" className="space-y-8">
        <div className="grid lg:grid-cols-2 gap-8">
       
        <div className="form-data mb-5">

     
            <div className="flex gap-5">
                <div className="mb-5 w-1/2">
                    <label for="FisrtName" className="block mb-2 text-sm font-medium text-black">Fisrt Nane *</label>
                    <input type="text" id="FisrtName" className="block p-3 w-full text-sm text-black  border border-gray-300  "  required/>
                </div>

                <div className="mb-5 w-1/2">
                    <label for="LastName" className="block mb-2 text-sm font-medium text-black">Last Nane *</label>
                    <input type="text" id="LastName" className="block p-3 w-full text-sm text-black  border border-gray-300  "  required/>
                </div>
            </div>

            <div className="mb-5">
                <label for="Company" className="block mb-2  text-sm font-medium text-black"> Company name (optional)</label>
                <input type="text" id="Company" className="block p-3 w-full text-sm text-black  border border-gray-300  "  />
            </div>

            <div className="mb-5">
            <label for="address" className="block mb-2 text-sm font-medium text-black">Street address 
    *</label>
            <div className="mb-3">
            
                <input type="text" id="address" className="block p-3 w-full text-sm text-black  border border-gray-300  "  required/>
            </div>

            <div>
        
                <input type="text" id="address" className="block p-3 w-full text-sm text-black  border border-gray-300  "  required/>
            </div>
            </div>

            <div className="mb-3">
            <label for="town" className="block mb-2 text-sm font-medium text-black">Town / City * 
    </label>
            <input type="text" id="town" className="block p-3 w-full text-sm text-black  border border-gray-300  "  required/>
            </div>
        </div>
        <div class=" mb-5">
              <label for="message" className="block mb-2 text-sm font-medium ttext-black">Order notes (optional)</label>
              <textarea id="message" rows="6" className="block p-3 w-full text-sm text-black  border border-gray-300  " ></textarea>
        </div>
        </div>
        <div className="order-info my-8">
        <h4 className="text-black text-3xl mb-8">YOUR ORDER</h4>
           
            <table className="w-full text-sm text-left text-black">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50  text-black">
                            <tr>
                                <th colSpan={7} className="  py-3 ">
                                    Product 
                                </th>
                                <th colSpan={2} className="text-end px-6 py-3 ">
                                    SubTotal
                                </th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItems.map((product)=>{
                                        return(
         
                            <tr className="bg-white border-b  border-gray-300 text-gray-600">
                                <td colSpan={7}  className="  py-4 font-medium ">
                                    
                               {product.name} x {product.quantity} 
                                </td>
                                <td colSpan={2}  className="pe-9 text-end py-4">
                                ${product.price * product.quantity}  
                                </td>
                             

                               
                                
                            </tr>  
                             )
                                })
                            }
                        <tr className="bg-white border-b  border-gray-300 text-gray-600">
                                <td colSpan={7}  className="  py-4 font-medium ">
                                    
                               Shipping
                                </td>
                                <td colSpan={2}  className="pe-9 text-end py-4">
                                $100
                                </td>
                            </tr>  
                        </tbody>
            </table>

        </div>
      
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white  bg-black sm:w-fit hover:bg-primary-800 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Place order</button>
      </form>
        </div>
  )
}

export default CheckoutForm