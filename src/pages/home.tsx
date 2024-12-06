import { Cta4 } from "@/components/home-components/cta-4";
import { Cta5 } from "@/components/home-components/cta-5";
import { Cta1 } from "@/components/home-components/cta1";
import { EventsGallery } from "@/components/home-components/events-gallery";
import { HeroSection } from "@/components/home-components/hero-section";
import { PresidentSpeech } from "@/components/home-components/president-speech";
import api from "@/utils/axios-interceptor";
import { useQuery } from "@tanstack/react-query";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const { data: pageData, isLoading: loadingPageData } = useQuery({
    queryKey: ["pageData"],
    queryFn: async () => {
      const res = await api("/page/landing-page");
      return res.data.data;
    },
    select: (data) => data,
    staleTime: 2500,
  });
  //
  //
  const { data: events } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await api.get(`/event/all?page=1&perPage=3&search=`);
      return res.data.data;
    },
    select: (data) => data.data,
    staleTime: 2500,
  });
  // president speeches
  const { data: presidentSpeech, isLoading: loadingPresidentSpeech } = useQuery(
    {
      queryKey: ["presidentSpeech"],
      queryFn: async () => {
        const res = await api.get(`/president-corner/all?page=1&perPage=10`);
        return res.data.data;
      },
      select: (data) => data,
      staleTime: 2500,
    }
  );
  //
  return (
    <div className="">
      {loadingPageData && (
        <div className="relative top-0 left-0 right-0 bottom-0 z-50 h-full w-full bg-light-200 animate-pulse" />
      )}
      <HeroSection pageData={pageData} />
      {loadingPresidentSpeech && (
        <div className="flex flex-col gap-4 mt-5 justify-center items-center">
          <div className="h-[30px] w-[60%] 376:w-[250px] rounded-md bg-zinc-300 animate-pulse" />
          <div className="w-[160px] h-[160px] rounded-full bg-zinc-300 animate-pulse" />
          <div className="w-[120px] h-[18px] rounded-md bg-zinc-300 animate-pulse" />
          <div className="w-[180px] h-[18px] rounded-md bg-zinc-300 animate-pulse" />
          <div className="w-[70%] 476:w-[460px] h-[10px] rounded-sm bg-zinc-300 animate-pulse" />
          <div className="w-[70%] 476:w-[460px] h-[10px] rounded-sm bg-zinc-300 animate-pulse" />
          <div className="w-[70%] 476:w-[460px] h-[10px] rounded-sm bg-zinc-300 animate-pulse" />
        </div>
      )}
      {presidentSpeech &&
        presidentSpeech?.data?.map((item: any) => {
          return <PresidentSpeech item={item} key={item?.id} />;
        })}

      {/*  */}
      <div className="flex flex-col gap-4 mt-5">
        {loadingPageData &&
          [...Array(3)].map((item: any) => (
            <div
              key={uuidv4() + item}
              className="w-[95%] mx-auto flex items-center gap-8 justify-between"
            >
              <div className="h-[240px] w-full bg-light-200 animate-pulse rounded-md" />
              <div className="h-[240px] w-full bg-light-200 animate-pulse rounded-md" />
            </div>
          ))}
      </div>
      {pageData &&
        pageData?.sections?.map((item: any) => {
          return <Cta1 item={item} key={item?.id} />;
        })}
      <Cta4 events={events} />
      <EventsGallery />
      <Cta5 />
    </div>
  );
};

export default Home;
