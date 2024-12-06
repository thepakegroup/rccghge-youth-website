import { WhiteRightArrow } from "@/icons/white-right-arrow";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "@/icons/arrow-right";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "@/utils/axios-interceptor";
import { v4 as uuidv4 } from "uuid";

gsap.registerPlugin(ScrollTrigger);
export const EventsGallery = () => {
  const navigate = useNavigate();
  //
  useEffect(() => {
    gsap.fromTo(
      ".event-gallery-card",
      { x: 50, opacity: 0 },
      {
        x: 0,
        stagger: 0.65,
        opacity: 1,
        scrollTrigger: { trigger: ".event-gallery-card" },
      }
    );
  }, []);
  //
  const { data: galleries, isLoading: loadingGalleries } = useQuery({
    queryKey: ["galleries"],
    queryFn: async () => {
      const res = await api.get(`/folder/list`);
      return res.data;
    },
    select: (data) => data.data,
    staleTime: 2500,
  });

  //
  return (
    <div className="my-12 side-space">
      <h2 className="header-one !text-dark-100 text-center mb-6">
        Our Events Gallery
      </h2>
      {/*  */}
      <div className="overflow-x-hidden grid grid-cols-1 476:grid-cols-2 md:grid-cols-3 justify-items-center items-center gap-8">
        {/*  */}
        {loadingGalleries &&
          [...Array(3)].map((item: any) => (
            <div
              className="bg-light-200 rounded-md h-[200px] w-full animate-pulse"
              key={uuidv4() + item}
            />
          ))}
        {galleries &&
          galleries?.slice(0, 3)?.map((item: any) => (
            <Link
              to={`/galleria/${item?.id}`}
              key={item?.id}
              className="event-gallery-card w-full 376:w-[350px] 476:w-full mx-auto 476:mx-0 cursor-pointer overflow-hidden relative bg-dark-100/40 backdrop-blur-sm rounded-md"
            >
              <img
                className="w-full h-full object-cover"
                src={item?.folderBanner}
                alt=""
              />
              <div className="absolute top-0 right-0 left-0 bottom-0 bg-dark-100/35" />
              <div className="w-[90%] mx-auto flex items-center justify-between gap-2 absolute left-1/2 -translate-x-1/2 bottom-4">
                <h3 className="font-playfair-display text-xl 997:text-3xl text-light-100">
                  {item?.folderName}
                </h3>
                <WhiteRightArrow />
              </div>
            </Link>
          ))}
        {/*  */}
      </div>
      <p
        className="mr-auto flex items-center font-semibold text-base justify-end gap-1 mt-2  text-primary-100 cursor-pointer"
        onClick={() => navigate("/galleria")}
      >
        <span>See more</span>
        <ArrowRight />
      </p>
      {/*  */}
    </div>
  );
};
