import {
  IconHolder,
  IconHolder2,
} from "@/components/base-components/icon-holder";
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
      const res = await api.get("/leader/all");
      return res.data.data;
    },
    select: (data) => data,
  });
  //
  //
  return (
    <div className="w-[90%] mx-auto mt-6">
      <h1 className="header-one !text-dark-100 text-center">Our Leaders</h1>
      <div className="relative mx-auto bg-[linear-gradient(to_right,#12234E,#4473BA)] h-[3px] mt-4">
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
          leaders?.data.map((item: any) => {
            return (
              <div
                key={item?.id}
                className="w-full 376:w-[300px] 480:w-full mx-auto 480:mx-0 flex flex-col gap-3"
              >
                <div className="w-full h-full 576:h-full overflow-hidden">
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
              </div>
            );
          })}
        {/*  */}
      </div>
    </div>
  );
};

export default OurLeaders;
