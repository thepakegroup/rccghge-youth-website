import { MLink } from "@/components/framer-motions/motion-exports";
import { WhiteRightArrow } from "@/icons/white-right-arrow";
import { GalleryItemProp } from "@/types/gallery_item_prop";
import api from "@/utils/axios-interceptor";
import { useQuery } from "@tanstack/react-query";
import { v4 as uuidv4 } from "uuid";
const Galleria = () => {
  // const [filter, setFilter] = useState<string>("All events");
  //
  const { data: galleries, isLoading: loadingGalleries } = useQuery({
    queryKey: ["galleries"],
    queryFn: async () => {
      const res = await api.get(`/folder/list?ctx=rccghge-youth`);
      return res.data;
    },
    select: (data) => data.data,
    staleTime: 2500,
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
        delay: 0.25 * index,
        ease: "easeOut",
      },
    }),
  };
  //
  return (
    <div className="mt-6 overflow-x-hidden">
      <h1 className="header-one !text-dark-100 text-center">
        Our Events Gallery
      </h1>
      {/* <div className="w-[90%] mx-auto flex justify-center gap-8 md:gap-16 items-center font-playfair-display font-semibold mt-4 text-dark-100/80 text-xs md:text-sm">
        <h3
          className={`border-b-[1.5px] transition-all duration-500 pb-1 cursor-pointer ${
            filter.toLowerCase() === "all events"
              ? "border-b-primary-100"
              : "border-b-transparent"
          }`}
          onClick={() => setFilter("All events")}
        >
          All events
        </h3>
        <h3
          className={`border-b-[1.5px] transition-all duration-500 pb-1 cursor-pointer ${
            filter.toLowerCase() === "church programs"
              ? "border-b-primary-100"
              : "border-b-transparent"
          }`}
          onClick={() => setFilter("Church programs")}
        >
          Church programs
        </h3>
        <h3
          className={`border-b-[1.5px] transition-all duration-500 pb-1 cursor-pointer ${
            filter.toLowerCase() === "special programs"
              ? "border-b-primary-100"
              : "border-b-transparent"
          }`}
          onClick={() => setFilter("Special programs")}
        >
          Special programs
        </h3>
      </div> */}
      <div className="relative w-[90%] mx-auto bg-[linear-gradient(to_right,#12234E,#4473BA)] h-[2.5px] mt-4"></div>
      {/* ===================== */}
      {/* ===================== */}
      <div className="side-space my-10 grid grid-cols-1 476:grid-cols-2 md:grid-cols-3 justify-items-center items-center gap-8">
        {loadingGalleries &&
          [...Array(6)].map((item: any) => (
            <div
              className="bg-light-200 rounded-md h-[200px] w-full animate-pulse"
              key={uuidv4() + item}
            />
          ))}
        {galleries &&
          galleries
            ?.filter((item: GalleryItemProp) => item?.totalItems !== 0)
            ?.map((item: GalleryItemProp, index: number) => (
              <MLink
                initial="hidden"
                whileInView="visible"
                custom={index}
                variants={var1}
                viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                to={`/galleria/${item?.id}`}
                key={item?.id}
                className="event-gallery-card h-[300px] w-full 376:w-[350px] 476:w-full mx-auto 476:mx-0 cursor-pointer overflow-hidden relative bg-dark-100/40 backdrop-blur-sm rounded-md"
              >
                <img
                  className="w-full h-full object-cover"
                  src={item?.folderBanner}
                  alt="gallery item"
                />
                <div className="absolute top-0 right-0 left-0 bottom-0 bg-dark-100/35" />
                <div className="w-[90%] mx-auto flex items-center justify-between gap-2 absolute left-1/2 -translate-x-1/2 bottom-4">
                  <h3 className="font-playfair-display text-xl 997:text-3xl text-light-100">
                    {item?.folderName}
                  </h3>
                  <WhiteRightArrow />
                </div>
              </MLink>
            ))}
        {/*  */}
        {/*  */}
      </div>
    </div>
  );
};

export default Galleria;
