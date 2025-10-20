"use client";

import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import { projectsData } from "@/lib/data";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const ProjectsSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      modules={[Pagination, Navigation]}
      navigation
      pagination={{ clickable: true }}
      className="productSlider h-150 xl:h-217.5"
    >
      {projectsData.map(({ img, alt, description }, index) => (
        <SwiperSlide key={index} className="relative xl:h-full block">
          <div className="h-full xl:h-167.5 bg-accent/10">
            <Image
              src={img}
              alt={alt}
              className="w-full object-contain xl:h-full xl:object-cover"
            />
          </div>
          <div className="h-100 md:h-75 xl:h-50 xl:rounded-bl-[300px] bg-secondary flex items-center absolute bottom-0 w-full">
            <div className="mx-auto flex flex-col xl:flex-row items-center xl:gap-16 px-8 xl:px-0">
              <p className="max-w-150 mb-8 xl:mb-0 xl:text-lg text-center xl:text-left">
                {description}
              </p>
              <button
                type="button"
                className="btn btn-lg btn-accent flex items-center gap-3"
              >
                <span>Explore Now</span>
                <MdArrowRightAlt size={24} />
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
