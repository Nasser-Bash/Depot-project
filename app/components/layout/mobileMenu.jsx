'use client'
import { useState } from "react";

import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown  } from "@fortawesome/free-solid-svg-icons";
import { links } from "@/public/links";
function MobileMenu({isOpen , setisOpen}) {
  const [menusublink, setmenusublink] = useState(null);
  const [opensublink, setopensublink] = useState(null);
  const handleClick = (index) => {
    setmenusublink(index === menusublink ? null : index);
  };
  const handleClickSubLinks = (index) => {
    setopensublink(index === opensublink ? null : index);
   
  };
  return (
    <div className={` pt-10 overflow-auto block lg:hidden bg-black fixed w-full right-0 top-0 z-[150] bottom-0 text-white p-5  transition duration-500 ${isOpen===true ? 'translate-x-0 ': 'translate-x-[100%]'}` }>
        <img className="w-1/3 ms-7 mb-10" src="/images/logo-light.png"/>
        <ul className="p-5 text-gray-400  space-y-4 text-xl">
            {
              links.map((link,index)=>{
                return(
                <li key={index} className=" p-3 hover:text-white transition duration-500 group overflow-hidden relative">
                  <span className="flex gap-3 cursor-pointer" onClick={() => handleClick(index)}>
                  <h4  >{link.name}</h4>  
                    <FontAwesomeIcon className="my-auto text-sm" icon={faCaretDown}/>
                  </span>
                 <ul className={`  ps-5 my-5   space-y-3 transition duration-800 ${menusublink===index ? 'relative :w-full:h-full opacity-100 ' : 'absolute w-0 h-0  opacity-0 '}`}>
                  {
                     link.sublinks.map((subLink , i)=>{
                      return(
                        <li key={i} className="text-[15px] group-one"  >

                          {
                            subLink.name &&(
                              <Link  href={subLink.path} onClick={()=>setisOpen(false)}>
                                 {subLink.name }
                             </Link>
                            )
                          }
                         
                          {
                           
                              subLink.head && (
                                <div>
                                
                                <span className="cursor-pointer  flex gap-3 " onClick={() => handleClickSubLinks(i)}>
                                <h4 className="" > { subLink.head}</h4>  
                             <FontAwesomeIcon className="my-auto text-sm" icon={faCaretDown}/>
                          </span>
                          <ul  className={`  ps-5 py-5   space-y-3 transition-opacity duration-800 ${opensublink===i ? 'relative w-full h-full opacity-100 block ' : 'absolute w-0 h-0  opacity-0 hidden'}`}>
                                    {
                                      subLink.sublink.map((link)=>{
                                        return(
                                          <li className="text-[15px]">   
                                            <Link href={link.path} onClick={()=>setisOpen(false)}>
                                              {link.name}
                                              </Link>
                                            </li>
                                        )
                                      })
                                    }
                                       
                                  </ul>
                                  </div>
                              )
                            }
                        </li>
                      )
                     })
                      
                        }
                   
               
                  </ul>
                
                </li>
              )})
            }
           
        </ul>
    </div>
  )
}

export default MobileMenu