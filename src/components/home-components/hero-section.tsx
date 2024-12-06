import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Button } from "@/components/base-components/button";
import { HeroRightArrow } from "@/icons/hero-right-arrow";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);
export const HeroSection = ({ pageData }: { pageData: any }) => {
  const navigate = useNavigate();
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
    <div className="relative">
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
        {pageData &&
          pageData?.slidesImages?.map((item: any) => {
            return (
              <SwiperSlide key={item?.id}>
                <div className={`relative w-full h-full bg-light-200`}>
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-dark-100/70" />
                  <img
                    className="h-full w-full object-cover 
                    bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4))]"
                    src={item?.imageUrl}
                    alt="hero image"
                  />
                </div>
              </SwiperSlide>
            );
          })}

        <HeroRightArrow />
      </Swiper>
      <div className="hero-main-content absolute w-full z-[888] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-2 text-center">
        {pageData && (
          <h1 className="header-one !w-[98%] md:!w-[90%] lg:!w-[60%] mx-auto">
            {pageData?.page_records?.setting?.heading_text}
          </h1>
        )}
        <Button
          onClick={() => navigate("/join-us")}
          label="Join Us"
          className="px-[32px] py-[14px] font-semibold text-[13px] leading-[15px]"
        />
      </div>
    </div>
  );
};
