'use client'
import { useState  , useEffect} from "react";
import { links } from "@/public/links";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { Cross as Hamburger } from "hamburger-react";
import MobileMenu from "./mobileMenu";
import SideGallery from "../widgets/sideGallery";
import { usePathname  } from "next/navigation";
import SmallCart from "../widgets/smallCart";
function MainHeader() {
  const router = usePathname()
  const [isOpen, setisOpen] = useState(false);
  const [isactive, setisactive] = useState(false);
  const handleMenu = () => {
    setisOpen(!isOpen);

  };
  const handleSideGallery = () => {
     setisactive(!isactive);

  };

  return (
     
    <nav className={`${router==="/split-showcase" ? 'bg-transpert	fixed left-0 right-0' : 'bg-white sticky'}     top-0 z-[100]  `}>
      <div className="flex md:justify-around justify-between relative     items-center container mx-auto  px-5">
        <div
          id="mega-menu-icons"
          className=" hidden  items-center justify-between   w-full lg:flex md:w-2/5 "
        >
          <ul className="  flex flex-col text-sm font-medium md:flex-row text-black ">
            {links.map((link) => {
              return (
                <li className="group ">
                  <button className="  p-7">{link.name}</button>

                  {!link.mega && link.dropdown && (
                    <div
                      className={`  absolute  top-[100%]  z-10  opacity-0  invisible   text-sm bg-black  group-hover:opacity-100 group-hover:visible  w-1/5 transition duration-800  `}
                    >
                      <div className="  p-10  text-gray-400 ">
                        <ul
                          className="space-y-2   overflow-hidden "
                          aria-labelledby="mega-menu-icons-dropdown-button "
                        >
                          {link.sublinks.map((sublink) => {
                            return (
                              <li
                                className="group-two
                                xl:text-sm
                                text-[10px]
                              
                              "
                              >
                                <Link
                                  href={sublink.path}
                                  className=" items-center  "
                                >
                                  <span
                                    className={` transition duration-300  inline-block ${
                                      router.pathname === sublink.path
                                        ? "translate-x-[15%]  text-white"
                                        : "group-two-hover:translate-x-[15%] group-two-hover:text-white  "
                                    }`}
                                  >
                                    <FontAwesomeIcon
                                      className={` me-1  ${
                                        router.pathname === sublink.path
                                          ? "translate-x-0"
                                          : "translate-x-[-200%]  group-two-hover:translate-x-0   opacity-0 invisible  group-two-hover:opacity-100 group-two-hover:visible  transition duration-700"
                                      }`}
                                      icon={faArrowRight}
                                    />

                                    {sublink.name}
                                  </span>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  )}
                  {link.mega && link.dropdown && (
                    <div
                      className={` absolute  top-[100%]  z-10  opacity-0  invisible   text-sm bg-black  group-hover:opacity-100 group-hover:visible hover:opacity-100   hover:visible ${
                        link.mega === true
                          ? "grid grid-cols-4 left-20 right-20"
                          : ""
                      }`}
                    >
                      {link.sublinks.map((sublink) => {
                        return (
                          <div className="p-10 text-gray-400  ">
                            <h4 className="text-sm text-white font-bold mb-4 ms-4">
                              {sublink.head}
                            </h4>
                            <ul
                              className="space-y-2  "
                              aria-labelledby="mega-menu-icons-dropdown-button"
                            >
                              {sublink.sublink.map((link) => {
                                return (
                                  <li
                                    className="group-two
                                    xl:text-sm
                                    text-[10px]
                        "
                                  >
                                    <Link
                                      href={link.path}
                                      className=" items-center  "
                                    >
                                      <span
                                        className={` transition duration-300  inline-block ${
                                          router.pathname === link.path
                                            ? "translate-x-[15%]  text-white"
                                            : "group-two-hover:translate-x-[10%] group-two-hover:text-white  "
                                        }`}
                                      >
                                        <FontAwesomeIcon
                                          className={` me-1 ${
                                            router.pathname === link.path
                                              ? "translate-x-0 "
                                              : "translate-x-[-200%]  group-two-hover:translate-x-0   opacity-0 invisible  group-two-hover:opacity-100 group-two-hover:visible  transition duration-700"
                                          }`}
                                          icon={faArrowRight}
                                        />

                                        {link.name}
                                      </span>
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <Link href="/" className="me-8    md:w-1/5 flex md:justify-center ">
          <img className="w-1/2" src="/images/logo.png"/>
        </Link>
        <div className="pt-1 hidden md:block md:w-2/5 text-black font-thin text-[14px] ">
          <ul className="flex justify-center gap-8 items-center">
            <li className="relative group py-6">
              <FontAwesomeIcon icon={faCartShopping} />
              <SmallCart />
            </li>
            <li className="py-6">
              <Link href='/wish-list'>
              <FontAwesomeIcon icon={faHeart} />
              </Link>
              
            </li>
            <li className=" py-6">
            <Link href='/user-dashboard' className="flex gap-3">
              <FontAwesomeIcon className="my-auto" icon={faUser} /> <p>LOGIN</p>
            </Link>
             
            </li>
            <li className="hidden lg:block z-[200]">
              <Hamburger
                color={isactive ? "white" : "black"}
                toggled={isactive}
                toggle={handleSideGallery}
                size={20}
              />
            </li>
          </ul>
        </div>
        <li className="block lg:hidden z-[200]">
          <Hamburger
            color={isOpen ? "white" : "black"}
            toggled={isOpen}
            toggle={handleMenu}
            size={20}
          />
        </li>
      </div>
      <MobileMenu isOpen={isOpen} setisOpen={setisOpen} />
      <SideGallery isactive={isactive} />
    </nav>
  );
}

export default MainHeader;
