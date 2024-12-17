import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { HeroRightArrow } from "@/icons/hero-right-arrow";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//
interface slidesImages {
  id: number;
  itemUrl: string;
  itemGroup: string;
}
// register plugins
gsap.registerPlugin(ScrollTrigger);
export const HeroSection = ({ heroImages }: { heroImages: slidesImages[] }) => {
  useEffect(() => {
    gsap.fromTo(
      ".hero-main-content",
      { opacity: 0, scale: 0.85 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".hero-main-content",
        },
      }
    );
  }, []);
  //
  return (
    <div className="relative mb-12">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{ nextEl: ".mySwiper1Next" }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="relative mySwiper1 h-[80vh]"
      >
        {heroImages?.map((image) => (
          <SwiperSlide key={image?.id}>
            <div className={`relative w-full h-full bg-light-200`}>
              <div
                className="absolute top-0 left-0 right-0 bottom-0 
            bg-[linear-gradient(rgba(0,0,0,0.46),rgba(0,0,0,0.46))]"
              />
              <img
                className="h-full w-full object-cover"
                src={image?.itemUrl}
                alt={image?.itemUrl}
              />
            </div>
          </SwiperSlide>
        ))}

        <HeroRightArrow />
      </Swiper>
      <div className="hero-main-content absolute w-full z-[888] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-2 text-center">
        <h1 className="header-one select-none !w-[98%] md:!w-[90%] lg:!w-[60%] mx-auto">
          Young Adults Ministry
        </h1>
        <p className="text-sm select-none 376:text-base sm:text-lg text-white">
          “For Children are the heritage of the lord...”
        </p>
      </div>
    </div>
  );
};
