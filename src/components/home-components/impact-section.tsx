import { Video } from "../base-components/Video";
import { Mdiv } from "../framer-motions/motion-exports";
interface ItemsProp {
  our_events: {
    title: string;
    content: string;
  };
  our_mission: {
    title: string;
    content: string;
  };
  our_vision: {
    title: string;
    content: string;
  };
}
//
interface impactsProp {
  title: string;
  content: string;
  id: number;
}
//
export const ImpactSection = ({ items }: { items: ItemsProp }) => {
  const var1 = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: (key: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * key,
      },
    }),
  };
  //
  const impacts: impactsProp[] = [
    { ...items?.our_mission, id: 2 },
    { ...items?.our_vision, id: 3 },
    { ...items?.our_events, id: 1 },
  ];
  //
  return (
    <div className="side-space gap-x-8 sm:gap-x-14 gap-y-8 mb-12 grid grid-cols-1 lg:grid-cols-2">
      <div className="w-full aspect-video lg:h-[480px] mx-auto">
        <Video url="https://www.youtube.com/embed/j93q9lK8Lz4" />
      </div>
      {/*  */}
      <div className="flex flex-col gap-5">
        {items &&
          impacts?.map((item: impactsProp) => (
            <Mdiv
              key={item?.id}
              initial={"hidden"}
              whileInView={"visible"}
              custom={item?.id}
              variants={var1}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              className="p-5 border rounded-md flex flex-col gap-2"
            >
              <h3 className="text-primary-100 font-playfair-display font-semibold text-lg 480:text-xl sm:text-2xl">
                {item?.title}
              </h3>
              <p
                className="text-sm 576:text-base font-normal text-dark-100/75"
                dangerouslySetInnerHTML={{ __html: item?.content }}
              />
            </Mdiv>
          ))}
      </div>
    </div>
  );
};
