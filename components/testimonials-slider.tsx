"use client";

import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { testimonialsData } from "@/lib/data";

import "swiper/css";
import "swiper/css/pagination";

export const TestimonialsSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      className="testimonialSlider h-105 xl:h-135"
    >
      {testimonialsData.map(({ img, name, role, text }, index) => (
        <SwiperSlide key={index} className="h-full">
          <div className="h-full flex items-center justify-center">
            <div className="flex-1 hidden xl:flex">
              <Image src={img} alt={`${name} photo`} />
            </div>
            <div className="w-full max-w-204 px-6 flex flex-col items-center xl:items-start gap-8">
              <h4 className="text-3xl font-secondary font-medium">{name}</h4>
              <p className="text-2xl italic text-center xl:text-left">{text}</p>
              <p className="text-[22px] text-primary/70">{role}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
