'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight ,faCartShopping } from "@fortawesome/free-solid-svg-icons";

import Link from 'next/link'
import { usePathname } from "next/navigation";


function Footer() {
  const router = usePathname()
  return (
 
    <div className={`text-white bg-black p-10 mt-10    ${router==="/split-showcase" ? 'hidden':''}`}>
          <div className="container mx-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 p-10  border-b  border-gray-600 text-gray-400 gap-10 justify-items-center text-center sm:text-start">
                <div className="footer1 ">
                      <h4 className="uppercase text-white text-md mb-6 font-bold sm:ps-2 ps-4">customers service</h4>
                      <ul className="space-y-3 text-sm">
                      <li className="group-two
                           ">
                              <Link href='/' className=" items-center  ">
                                            <span className={`group-two-hover:translate-x-[5%] group-two-hover:text-white  transition duration-300  inline-block `}>
                                            <FontAwesomeIcon className={` translate-x-[-200%]  group-two-hover:translate-x-0   opacity-0 invisible  group-two-hover:opacity-100 group-two-hover:visible  transition duration-700 `} icon={faArrowRight}/>
                                              
                                              Help & Contact Us</span>
                                   
                              </Link>
                            </li> 
                            <li className="group-two
                           ">
                              <Link href='/' className=" items-center  ">
                                            <span className={`group-two-hover:translate-x-[5%] group-two-hover:text-white  transition duration-300  inline-block `}>
                                            <FontAwesomeIcon className={` translate-x-[-200%]  group-two-hover:translate-x-0   opacity-0 invisible  group-two-hover:opacity-100 group-two-hover:visible  transition duration-700 `} icon={faArrowRight}/>
                                              
                                              Returns & Refunds </span>
                                   
                              </Link>
                            </li> 
                            <li className="group-two
                           ">
                              <Link href='/' className=" items-center  ">
                                            <span className={`group-two-hover:translate-x-[5%] group-two-hover:text-white  transition duration-300  inline-block `}>
                                            <FontAwesomeIcon className={` translate-x-[-200%]  group-two-hover:translate-x-0   opacity-0 invisible  group-two-hover:opacity-100 group-two-hover:visible  transition duration-700 `} icon={faArrowRight}/>
                                              
                                              Online Store </span>
                                   
                              </Link>
                            </li> 
                            <li className="group-two
                           ">
                              <Link href='/' className=" items-center  ">
                                            <span className={`group-two-hover:translate-x-[5%] group-two-hover:text-white  transition duration-300  inline-block `}>
                                            <FontAwesomeIcon className={` translate-x-[-200%]  group-two-hover:translate-x-0   opacity-0 invisible  group-two-hover:opacity-100 group-two-hover:visible  transition duration-700 `} icon={faArrowRight}/>
                                              
                                              Terms & Conditions </span>
                                   
                              </Link>
                            </li> 
                           
                      </ul>
                </div>
                <div className="footer2 ">
                    <h4 className="uppercase text-white text-md mb-6 font-bold sm:ps-2 ps-4">company</h4>
                      <ul className="space-y-3 text-sm">
                      <li className="group-two
                           ">
                              <Link href='/' className=" items-center  ">
                                            <span className={`group-two-hover:translate-x-[5%] group-two-hover:text-white  transition duration-300  inline-block `}>
                                            <FontAwesomeIcon className={` translate-x-[-200%]  group-two-hover:translate-x-0   opacity-0 invisible  group-two-hover:opacity-100 group-two-hover:visible  transition duration-700 `} icon={faArrowRight}/>
                                              
                                             What We Do</span>
                                   
                              </Link>
                            </li> 
                            <li className="group-two
                           ">
                              <Link href='/' className=" items-center  ">
                                            <span className={`group-two-hover:translate-x-[5%] group-two-hover:text-white  transition duration-300  inline-block `}>
                                            <FontAwesomeIcon className={` translate-x-[-200%]  group-two-hover:translate-x-0   opacity-0 invisible  group-two-hover:opacity-100 group-two-hover:visible  transition duration-700 `} icon={faArrowRight}/>
                                              
                                            Available Services </span>
                                   
                              </Link>
                            </li> 
                            <li className="group-two
                           ">
                              <Link href='/' className=" items-center  ">
                                            <span className={`group-two-hover:translate-x-[5%] group-two-hover:text-white  transition duration-300  inline-block `}>
                                            <FontAwesomeIcon className={` translate-x-[-200%]  group-two-hover:translate-x-0   opacity-0 invisible  group-two-hover:opacity-100 group-two-hover:visible  transition duration-700 `} icon={faArrowRight}/>
                                              
                                            Latest Posts </span>
                                   
                              </Link>
                            </li> 
                            <li className="group-two
                           ">
                              <Link href='/' className=" items-center  ">
                                            <span className={`group-two-hover:translate-x-[5%] group-two-hover:text-white  transition duration-300  inline-block `}>
                                            <FontAwesomeIcon className={` translate-x-[-200%]  group-two-hover:translate-x-0   opacity-0 invisible  group-two-hover:opacity-100 group-two-hover:visible  transition duration-700 `} icon={faArrowRight}/>
                                              
                                            FAQs </span>
                                   
                              </Link>
                            </li> 
                           
                      </ul>
                </div>

                <div className="footer3 ">
                    <h4 className="uppercase text-white text-md mb-6 font-bold sm:ps-2 ps-4">SOCIAL MEDIA</h4>
                      <ul className="space-y-3 text-sm">
                      <li className="group-two
                           ">
                              <Link href='/' className=" items-center  ">
                                            <span className={`group-two-hover:translate-x-[5%] group-two-hover:text-white  transition duration-300  inline-block `}>
                                            <FontAwesomeIcon className={` translate-x-[-200%]  group-two-hover:translate-x-0   opacity-0 invisible  group-two-hover:opacity-100 group-two-hover:visible  transition duration-700 `} icon={faArrowRight}/>
                                              
                                            Twitter</span>
                                   
                              </Link>
                            </li> 
                            <li className="group-two
                           ">
                              <Link href='/' className=" items-center  ">
                                            <span className={`group-two-hover:translate-x-[5%] group-two-hover:text-white  transition duration-300  inline-block `}>
                                            <FontAwesomeIcon className={` translate-x-[-200%]  group-two-hover:translate-x-0   opacity-0 invisible  group-two-hover:opacity-100 group-two-hover:visible  transition duration-700 `} icon={faArrowRight}/>
                                              
                                            Instagram</span>
                                   
                              </Link>
                            </li> 
                            <li className="group-two
                           ">
                              <Link href='/' className=" items-center  ">
                                            <span className={`group-two-hover:translate-x-[5%] group-two-hover:text-white  transition duration-300  inline-block `}>
                                            <FontAwesomeIcon className={` translate-x-[-200%]  group-two-hover:translate-x-0   opacity-0 invisible  group-two-hover:opacity-100 group-two-hover:visible  transition duration-700 `} icon={faArrowRight}/>
                                              
                                            Tumblr</span>
                                   
                              </Link>
                            </li> 
                            <li className="group-two
                           ">
                              <Link href='/' className=" items-center  ">
                                            <span className={`group-two-hover:translate-x-[5%] group-two-hover:text-white  transition duration-300  inline-block `}>
                                            <FontAwesomeIcon className={` translate-x-[-200%]  group-two-hover:translate-x-0   opacity-0 invisible  group-two-hover:opacity-100 group-two-hover:visible  transition duration-700 `} icon={faArrowRight}/>
                                              
                                            Pinterest</span>
                                   
                              </Link>
                            </li> 
                           
                      </ul>
                </div>

                <div className="footer4 ">
                    <h4 className="uppercase text-white text-md mb-6 font-bold sm:ps-2 ps-4">PROFILE</h4>
                      <ul className="space-y-3 text-sm">
                      <li className="group-two
                           ">
                              <Link href='/' className=" items-center  ">
                                            <span className={`group-two-hover:translate-x-[5%] group-two-hover:text-white  transition duration-300  inline-block `}>
                                            <FontAwesomeIcon className={` translate-x-[-200%]  group-two-hover:translate-x-0   opacity-0 invisible  group-two-hover:opacity-100 group-two-hover:visible  transition duration-700 `} icon={faArrowRight}/>
                                              
                                            My Account</span>
                                   
                              </Link>
                            </li> 
                            <li className="group-two
                           ">
                              <Link href='/' className=" items-center  ">
                                            <span className={`group-two-hover:translate-x-[5%] group-two-hover:text-white  transition duration-300  inline-block `}>
                                            <FontAwesomeIcon className={` translate-x-[-200%]  group-two-hover:translate-x-0   opacity-0 invisible  group-two-hover:opacity-100 group-two-hover:visible  transition duration-700 `} icon={faArrowRight}/>
                                              
                                            Checkout</span>
                                   
                              </Link>
                            </li> 
                            <li className="group-two
                           ">
                              <Link href='/' className=" items-center  ">
                                            <span className={`group-two-hover:translate-x-[5%] group-two-hover:text-white  transition duration-300  inline-block `}>
                                            <FontAwesomeIcon className={` translate-x-[-200%]  group-two-hover:translate-x-0   opacity-0 invisible  group-two-hover:opacity-100 group-two-hover:visible  transition duration-700 `} icon={faArrowRight}/>
                                              
                                            Order Tracking</span>
                                   
                              </Link>
                            </li> 
                            <li className="group-two
                           ">
                              <Link href='/' className=" items-center  ">
                                            <span className={`group-two-hover:translate-x-[5%] group-two-hover:text-white  transition duration-300  inline-block `}>
                                            <FontAwesomeIcon className={` translate-x-[-200%]  group-two-hover:translate-x-0   opacity-0 invisible  group-two-hover:opacity-100 group-two-hover:visible  transition duration-700 `} icon={faArrowRight}/>
                                              
                                            Help & Support</span>
                                   
                              </Link>
                            </li> 
                           
                      </ul>
                </div>
          </div>

     
          <p className="  gap-2 pt-10 sm:ps-10 my-auto text-[11px] text-center sm:text-start">© 2023 Designed by Nasser Bash 
         
       , All Rights Reserved</p>
    </div>
  
  )
}

export default Footer

