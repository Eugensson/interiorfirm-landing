"use client";

import { useEffect, useState } from "react";
import { TbChevronsUp } from "react-icons/tb";
import { animateScroll as scroll } from "react-scroll";

export const BackToTopBtn = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          type="button"
          className="fixed right-8 bottom-16 lg:bottom-8 z-10 size-12 flex justify-center items-center bg-accent text-white rounded-sm cursor-pointer"
        >
          <TbChevronsUp size={30} />
        </button>
      )}
    </>
  );
};
