import { TopIntro } from "../base-components/top-intro";
//
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Fragment } from "react";
import { MoveLeft, MoveRight } from "lucide-react";

interface teamProp {
  createdAt: string;
  id: number;
  imageUrl: string;
  name: string;
  office: string;
  updatedAt: string;
}

export const OurTeamSection = ({ teams }: { teams: teamProp[] }) => {
  //
  return (
    <div className="side-space">
      {/* <TopIntro text="Our Great Team" /> */}
      <TopIntro text="Our Leaders" />
      <Fragment>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          // custom nav
          navigation={{
            nextEl: ".go_next",
            prevEl: ".go_prev",
          }}
          modules={[Navigation]}
          breakpoints={{
            140: {
              slidesPerView: 1,
            },
            568: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper w-[99%] mx-auto"
        >
          {/* {teams?.map((team: teamProp) => { */}
          {teams?.map((team: any) => {
            return (
              <SwiperSlide key={team?.id}>
                <div className="w-full h-[340px]">
                  <img
                    // src={team?.imageUrl}
                    src={team?.image}
                    alt={team?.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1 mt-2">
                  <div className="line bg-primary w-16 h-1" />
                  <h3 className="font-semibold font-playfair text-lg md:text-xl">
                    {team?.name}
                  </h3>
                  <p className="text-sm">{team?.position}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="w-[99%] mx-auto flex justify-between items-center !mt-5">
          <MoveLeft className="go_prev cursor-pointer text-white bg-[#FF8412] rounded-full p-1 size-10" />
          <MoveRight className="go_next cursor-pointer text-white bg-[#FF8412] rounded-full p-1 size-10" />
        </div>
      </Fragment>
    </div>
  );
};
