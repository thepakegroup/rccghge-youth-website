import { Mdiv } from "@/components/framer-motions/motion-exports";
import { useLoaderData } from "react-router-dom";
const OurLeaders = () => {
  // const { data: leaders, isLoading: loadingLeaders } = useQuery({
  //   queryKey: ["leaders"],
  //   queryFn: async () => {
  //     const res = await api.get("/leader/all?ctx=rccghge-youth");
  //     return res.data.data;
  //   },
  //   select: (data) => data,
  // });
  const pageData = useLoaderData();
  const data = pageData?.data;
  const { teams } = data;
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
        {teams &&
          teams?.map((team: any, index: number) => {
            return (
              <Mdiv
                initial="hidden"
                whileInView="visible"
                custom={index}
                variants={var1}
                viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                key={team?.id}
                className="flex 376:w-[350px] mx-auto 480:w-fit flex-col gap-3"
              >
                <div className="w-full h-[340px]">
                  <img
                    src={team?.imageUrl}
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
                  <p className="text-sm">{team?.office}</p>
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
