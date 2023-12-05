'use client'
import { faBell, faBookmark, faComment, faGem, faHourglass } from "@fortawesome/free-regular-svg-icons"
import { faMagic } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Fade } from "react-reveal"



function Services() {
  return (
    <div className=" lg:flex mt-16">
        <div className="lg:p-16 p-10  lg:block md:flex ">
                         <Fade >
                        <div className="flex gap-5   md:mb-32 mb-10 ">
                            <span className="text-end">
                            <h4 className="text-black font-bold text-lg mb-4">FUTURE LEADERS</h4>
                            <p className="text-gray-600 text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper</p>
                            </span>
                        
                            <FontAwesomeIcon className="text-3xl" icon={faHourglass}/>
                        </div>
                        </Fade>
          
                        <Fade delay={200}>

                       
                        <div className="flex gap-5   md:mb-32 mb-10">
                            <span className="text-end">
                            <h4 className="text-black font-bold text-lg mb-4">CREATIVE PROJECTS</h4>
                            <p className="text-gray-600 text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper</p>
                            </span>
                        
                            <FontAwesomeIcon className="text-3xl" icon={faMagic}/>
                        </div>
                        </Fade>

                        <Fade delay={300}>
                        <div className="flex gap-5   md:mb-10 mb-10">
                            <span className="text-end">
                            <h4 className="text-black font-bold text-lg mb-4">POWERFUL SOLUTIONS</h4>
                            <p className="text-gray-600 text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper</p>
                            </span>
                        
                            <FontAwesomeIcon className="text-3xl" icon={faComment}/>
                        </div>
                        </Fade>
             
        </div>
        <div className=" lg:w-3/4 w-full">
        <img className="  mx-auto" src="/images/services-img-1.png"/>
        </div>
           

            <div  className="lg:p-16 p-10  lg:block md:flex">
            <Fade >
            <div className="flex gap-5   md:mb-32 mb-10">
                <FontAwesomeIcon className="text-3xl" icon={faBookmark}/>
                    <span className="text-start">
                    <h4 className="text-black font-bold text-lg mb-4">LEADING STRATEGIES</h4>
                    <p className="text-gray-600 text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper</p>
                    </span>
                   
                  
                </div>
            </Fade>

               

            <Fade delay={200}>
            <div className="flex gap-5   md:mb-32 mb-10">
                <FontAwesomeIcon className="text-3xl" icon={faBell}/>
                    <span className="text-start">
                    <h4 className="text-black font-bold text-lg mb-4">PROGRESSIVE TOOLS</h4>
                    <p className="text-gray-600 text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper</p>
                    </span>
                   
                  
                </div>
            </Fade>

            <Fade delay={300}>
            <div className="flex gap-5    mb-10">
                <FontAwesomeIcon className="text-3xl" icon={faGem}/>
                    <span className="text-start">
                    <h4 className="text-black font-bold text-lg mb-4">INNOVATION EXPERTS</h4>
                    <p className="text-gray-600 text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper</p>
                    </span>
                   
                  
                </div>
            </Fade> 
        </div>
    </div>
  )
}

export default Services