"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ProductSlider({ products }) {

    const productList = Array.isArray(products)
        ? products
        : products?.images.edges || [];    

    return (
        <Swiper navigation modules={[Navigation]} className="product_sliders">
            {productList.map(({ node }) =>
                <SwiperSlide>
                    <a href="#" className="aspect-[16/22.4] block">
                        <img
                            src={node.src}
                            alt={node.altText || node.title}
                            className="w-full h-full object-cover"
                        />
                    </a>
                </SwiperSlide>
            )}
        </Swiper>
    );
}
