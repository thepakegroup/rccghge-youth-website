import {
  IconHolder,
  IconHolder2,
} from "@/components/base-components/icon-holder";
import { Mdiv } from "@/components/framer-motions/motion-exports";
import { Instagram } from "@/icons/instagram";
import { Twitter } from "@/icons/twitter";
import api from "@/utils/axios-interceptor";
import { Truncate } from "@/utils/truncate";
import { useQuery } from "@tanstack/react-query";
import { TfiEmail } from "react-icons/tfi";
import { v4 as uuidv4 } from "uuid";
const OurLeaders = () => {
  const { data: leaders, isLoading: loadingLeaders } = useQuery({
    queryKey: ["leaders"],
    queryFn: async () => {
      const res = await api.get("/leader/all?ctx=rccghge-youth");
      return res.data.data;
    },
    select: (data) => data,
  });
  //
  const var1 = {
    hidden: {
      opacity: 0,
      x: -25,
    },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3 * index,
        ease: "easeInOut",
      },
    }),
  };
  //
  return (
    <div className="mt-6 overflow-x-hidden">
      <h1 className="header-one !text-dark-100 text-center">Our Leaders</h1>
      <div className="w-[90%] relative mx-auto bg-[linear-gradient(to_right,#12234E,#4473BA)] h-[3px] mt-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] bg-light-100 px-4 py-2">
          <img className="w-full" src="/logo.svg" alt="" />
        </div>
      </div>
      {/*  */}
      <div className="side-space grid grid-cols-1 480:grid-cols-2 887:grid-cols-3 justify-items-center gap-8 my-20">
        {loadingLeaders &&
          [...Array(6)].map((item: any): any => {
            return (
              <div
                key={String(uuidv4() + item)}
                className="w-full flex flex-col gap-3 h-72 bg-light-100"
              >
                <div className="h-[80%] bg-light-200 animate-pulse rounded-md" />
                <div className="h-[18px] w-[90%] bg-light-200 animate-pulse rounded-md" />
                <div className="h-[15px] w-[80%] bg-light-200 animate-pulse rounded-md" />
                <div className="h-[15px] w-[80%] bg-light-200 animate-pulse rounded-md" />
                <div className="flex items-center gap-4 self-end">
                  <div className="h-[15px] w-[80px] bg-light-200 animate-pulse rounded-md" />
                  <div className="h-[15px] w-[80px] bg-light-200 animate-pulse rounded-md" />
                </div>
                <div className="h-[18px] w-[80%] bg-light-200 animate-pulse rounded-md" />
              </div>
            );
          })}
        {leaders &&
          leaders?.data.map((item: any, index: number) => {
            return (
              <Mdiv
                initial="hidden"
                whileInView="visible"
                custom={index}
                variants={var1}
                viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                key={item?.id}
                className="flex 376:w-[350px] mx-auto 480:w-fit flex-col gap-3"
              >
                <div className="w-full h-full overflow-hidden">
                  <img
                    className="w-full h-full bg-light-200 object-cover"
                    src={item?.image}
                    alt={item?.title}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-[5px] w-[76px] bg-primary-100" />
                  <div className="text-[16px] 576:text-[19px] font-playfair-display font-bold">
                    <span>{item?.name}</span>
                    <span className="text-base text-grey-100">
                      &nbsp;/&nbsp;{Truncate(item?.position, 15)}
                    </span>
                  </div>
                  <p className="text-sm 576:text-base font-normal font-quicksand text-dark-100/80">
                    {Truncate(item?.description, 18)}
                  </p>
                  <div className="flex items-center gap-3">
                    {item?.socialLinks?.x && (
                      <IconHolder href={item?.socialLinks?.x}>
                        <Twitter />
                      </IconHolder>
                    )}
                    {item?.socialLinks?.instagram && (
                      <IconHolder href={item?.socialLinks?.instagram}>
                        <Instagram />
                      </IconHolder>
                    )}
                    {item?.socialLinks?.email && (
                      <IconHolder2 href={item?.socialLinks?.email}>
                        <TfiEmail />
                      </IconHolder2>
                    )}
                  </div>
                </div>
              </Mdiv>
            );
          })}
        {/*  */}
      </div>
    </div>
  );
};

export default OurLeaders;
