import { TopIntro } from "../base-components/top-intro";
//
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Grid, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Fragment } from "react";
import { MoveLeft, MoveRight } from "lucide-react";

interface galleryProp {
  id: number;
  itemUrl: string;
}

export const OurGallery = ({ galleries }: { galleries: galleryProp[] }) => {
  return (
    <div className="side-space mb-12">
      <TopIntro text="Our Gallery" />
      <Fragment>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          // custom nav
          navigation={{
            nextEl: ".go_next_two",
            prevEl: ".go_prev_two",
          }}
          modules={[Grid, Navigation]}
          breakpoints={{
            140: {
              slidesPerView: 1,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
            678: {
              slidesPerView: 2,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
            997: {
              slidesPerView: 3,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
          }}
          grid={{
            rows: 2,
            fill: "row",
          }}
          className="mySwiper w-[99%] mx-auto"
        >
          {galleries?.map((item: galleryProp, index: number) => {
            return (
              <SwiperSlide key={index}>
                <div className="w-full h-[340px]">
                  <img
                    className="w-full h-full object-cover"
                    src={item?.itemUrl}
                    alt={item?.itemUrl}
                    width={300}
                    height={300}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="w-[99%] mx-auto flex justify-between items-center !mt-5">
          <MoveLeft className="go_prev_two cursor-pointer text-white bg-[#FF8412] rounded-full p-1 size-10" />
          <MoveRight className="go_next_two cursor-pointer text-white bg-[#FF8412] rounded-full p-1 size-10" />
        </div>
      </Fragment>
    </div>
  );
};
