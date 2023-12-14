"use client";

import { useRef, useCallback } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
// Import Swiper styles
import "swiper/css";

import ProductCard2 from "../../widgets/productCard2";
function ProductsSlider({ products }) {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="featured-products  p-10">
      <div className="flex justify-between px-10 ">
        <h4 className="text-gray-500 text-sm">FEATURED ITEMS</h4>
        <span className="flex gap-1 cursor-pointer text-lg">
          <FontAwesomeIcon icon={faCaretLeft} onClick={handlePrev} />
          <FontAwesomeIcon icon={faCaretRight} onClick={handleNext} />
        </span>
      </div>

      <div className=""></div>
      <Swiper
        ref={sliderRef}
        slidesPerView={1}
        breakpoints={{
          1024: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 3,
          },
          450: {
            slidesPerView: 2,
          },
        }}
        spaceBetween={50}
        loop
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className=""
      >
        {products.map((product) => {
          return (
            <SwiperSlide>
              <ProductCard2
                key={product.id}
                id={product.id}
                productName={product.name}
                productPrice={product.price}
                productImage={product.mainImage}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default ProductsSlider;
