import { Link } from "react-router-dom";
import { Mdiv, Mh3 } from "../framer-motions/motion-exports";
import { useQuery } from "@tanstack/react-query";
import api from "@/utils/axios-interceptor";

//
interface itemProp {
  id: number | string;
  title: string;
  content: string;
  resourceUrl: string;
}
//

export const Cta2Section = () => {
  //
  const { data: resources, isLoading } = useQuery({
    queryKey: ["resources"],
    queryFn: async () => {
      const res = await api.get(`/resource/all?ctx=rccghge-youth`);
      return res.data.data;
    },
    select: (data) => data,
    staleTime: 2500,
  });

  //
  const var1 = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.28 * index, ease: "easeInOut" },
    }),
  };
  //
  return (
    <div className="bg-[#FFFAF5] py-8 md:py-12 mb-12 overflow-x-hidden">
      <div className="side-space">
        <Mh3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -250px 0px" }}
          className="font-playfair-display font-semibold text-xl sm:text-2xl md:text-3xl text-dark-100/85 text-center mb-6"
        >
          “ Information is the bedrock of Transformation.{" "}
          <br className="hidden sm:block" /> We have resources to help you grow
          in your walk with God”
        </Mh3>
        {/* slides items here */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-3">
          {isLoading &&
            Array.from({ length: 3 }).map((_, index) => (
              <div
                className="h-[300px] bg-gray-200 animate-pulse rounded-md"
                key={index}
              />
            ))}
          {resources &&
            resources?.map((resource: itemProp, index: number) => (
              <Mdiv
                initial="hidden"
                whileInView="visible"
                variants={var1}
                custom={index}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                key={resource?.id}
                className="flex bg-white flex-col"
              >
                <div className="bg-gradient-to-tr text-lg sm:text-xl md:text-2xl lg:text-3xl flex justify-center items-center font-playfair-display font-semibold text-white py-4 px-4 rounded-t-md from-[#12234E] to-[#4473BA]">
                  {resource?.title}
                </div>
                <div className="flex flex-col gap-y-10 py-16 px-3">
                  <p className="font-playfair-display text-base sm:text-lg md:text-xl lg:text-2xl text-dark-100/75 font-medium text-center">
                    {resource?.content}
                  </p>
                  <Link
                    to={resource?.resourceUrl}
                    target="_blank"
                    className="bg-primary-100 self-center px-12 text-white py-2 text-sm rounded-md text-center"
                  >
                    Download
                  </Link>
                </div>
              </Mdiv>
            ))}
        </div>
      </div>
    </div>
  );
};
