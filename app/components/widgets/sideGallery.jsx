import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram , faTwitter , faFacebookF} from "@fortawesome/free-brands-svg-icons";
function SideGallery({isactive}) {
  return (
    <div className={` hidden  lg:block bg-black fixed w-1/2 right-0 top-0 z-[150] bottom-0 text-white  text-center py-20 px-10  transition duration-500 ${isactive===true ? 'translate-x-0 ': 'translate-x-[100%]'}` }>
        <h4 className="text-lg mb-5 font-bold">Welcome</h4>
        <h3 className="text-white text-xl">Advertising is the way great brands get to be great brands.</h3>
        <div className="grid grid-cols-4 p-16 gap-2 mb-5">
          
                <a className="relative group" href="#">
                    <img className="object-cover " src="/images/gallery1.jpg"/>
                    <span className="bg-black absolute top-0 left-0 right-0 bottom-0 text-2xl py-11 opacity-0  group-hover:opacity-50  transition duration-700">
                            <FontAwesomeIcon icon={faInstagram}/>
                    </span>
                </a>
                <a className="relative group" href="#">
                    <img className="object-cover " src="/images/gallery2.jpg"/>
                    <span className="bg-black absolute top-0 left-0 right-0 bottom-0 text-2xl py-11 opacity-0  group-hover:opacity-50  transition duration-700">
                            <FontAwesomeIcon icon={faInstagram}/>
                    </span>
                </a>
                <a className="relative group" href="#">
                    <img className="object-cover " src="/images/gallery3.jpg"/>
                    <span className="bg-black absolute top-0 left-0 right-0 bottom-0 text-2xl py-11 opacity-0  group-hover:opacity-50  transition duration-700">
                            <FontAwesomeIcon icon={faInstagram}/>
                    </span>
                </a>
                <a className="relative group" href="#">
                    <img className="object-cover " src="/images/gallery4.jpg"/>
                    <span className="bg-black absolute top-0 left-0 right-0 bottom-0 text-2xl py-11 opacity-0  group-hover:opacity-50  transition duration-700">
                            <FontAwesomeIcon icon={faInstagram}/>
                    </span>
                </a>
                <a className="relative group" href="#">
                    <img className="object-cover " src="/images/gallery5.jpg"/>
                    <span className="bg-black absolute top-0 left-0 right-0 bottom-0 text-2xl py-11 opacity-0  group-hover:opacity-50  transition duration-700">
                            <FontAwesomeIcon icon={faInstagram}/>
                    </span>
                </a>
                <a className="relative group" href="#">
                    <img className="object-cover " src="/images/gallery6.jpg"/>
                    <span className="bg-black absolute top-0 left-0 right-0 bottom-0 text-2xl py-11 opacity-0  group-hover:opacity-50  transition duration-700">
                            <FontAwesomeIcon icon={faInstagram}/>
                    </span>
                </a>
                <a className="relative group" href="#">
                    <img className="object-cover " src="/images/gallery7.jpg"/>
                    <span className="bg-black absolute top-0 left-0 right-0 bottom-0 text-2xl py-11 opacity-0  group-hover:opacity-50  transition duration-700">
                            <FontAwesomeIcon icon={faInstagram}/>
                    </span>
                </a>
                <a className="relative group" href="#">
                    <img className="object-contain " src="/images/products/16/h6-product-47-505x505.jpg"/>
                    <span className="bg-black absolute top-0 left-0 right-0 bottom-0 text-2xl py-11 opacity-0  group-hover:opacity-50  transition duration-700">
                            <FontAwesomeIcon icon={faInstagram}/>
                    </span>
                </a>
        </div>
        <h4 className="text-sm mb-5 font-bold"> WE ARE AWESOME FOLOW US</h4>
        <div className="social flex justify-center gap-4 text-white">
            <a href="#">
            <FontAwesomeIcon icon={faInstagram}/>
            </a>
            <a href="#">
            <FontAwesomeIcon icon={faFacebookF}/>
            </a>
            <a href="#">
            <FontAwesomeIcon icon={faTwitter}/>
            </a>
        </div>

    </div>
  )
}

export default SideGallery