
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import ProgressBar from "@/app/components/widgets/progressBar";

function ProductShowcase() {
  return (
    <div >
      
            <div className="">
            <div className="   pt-10 grid  md:grid-cols-2 grid-cols-1 ">
                    <div className="info my-auto pt-16 px-10 text-center md:text-start">
                         <h4 className="uppercase text-black text-xl font-bold">Welcome</h4>
                         <p className=" text-md text-gray-500 mx-auto mb-28 ">
                            Marketing is not selling. Marketing is building a brand in the mind of the prospect.
                          </p>
                    </div>
                    <img className="object-contain h-3/2  w-full" src="/images/h8-slide1-img.jpg"/>
                      
            </div>

            <div className=" grid lg:grid-cols-2 grid-cols-1 gap-3 ">
                    <div className="info my-auto px-10  md:flex gap-10">
                    <span className="text-black font-thin text-9xl">
                                <p className="text-3xl text-end">$</p>
                                <h1> 99</h1>
                         </span>
                        <span>
                        <h4 className="uppercase text-black text-3xl mb-5 font-bold">CONCRETE CHAIR
                            </h4>
                         <p className=" text-xl text-gray-500 mx-auto mb-10">
                         Lorem ipsum dolor sit amet, consectetur a elit. In ut ullamcorper leo, eget euismod orci. Cum sociis
                          </p>
                          <ul className="space-y-3">
                            <li className="flex gap-2"> 
                                <FontAwesomeIcon className="my-auto text-black" icon={faCheck}/>
                               <h4 className="text-gray-500">Modern & beautiful design</h4> 
                            </li>
                            <li className="flex gap-2"> 
                                <FontAwesomeIcon className="my-auto text-black" icon={faCheck}/>
                               <h4 className="text-gray-500">Modern & beautiful design</h4> 
                            </li>
                            <li className="flex gap-2"> 
                                <FontAwesomeIcon className="my-auto text-black" icon={faCheck}/>
                               <h4 className="text-gray-500">Modern & beautiful design</h4> 
                            </li>
                          </ul>
                        </span>
                        
                    </div>
                    <div className="">
                    <img className="object-cover h-full w-full" src="/images/h8-product-1-1.jpg"/>
                    </div>
                    
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-3 ">
            <div className="">
                    <img className="object-contain h-full w-full" src="/images/h8-product-2.jpg"/>
                    </div>
                    <div className="info my-auto px-10">
                         <h4 className="uppercase text-black text-xl font-bold mb-4">STRATEGY AND TIMING</h4>
                         <p className=" text-md text-gray-500 mx-auto mb-10 ">
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes
                          </p>
                          <ProgressBar percent={90} title='WEB DESIGN'/>
                    <ProgressBar percent={45} title='DEVELOPMENT'/>
                    </div>
            </div>
                          
           
            </div>
    </div>
  )
}

export default ProductShowcase