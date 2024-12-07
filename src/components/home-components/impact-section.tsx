import { Video } from "../base-components/Video";
import { Mdiv } from "../framer-motions/motion-exports";
interface impactProp {
  id: number;
  title: string;
  desc: string;
}
//
export const ImpactSection = () => {
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
  return (
    <div className="side-space gap-x-8 sm:gap-x-14 gap-y-8 mb-12 grid grid-cols-1 lg:grid-cols-2">
      <div className="w-full aspect-video lg:h-[480px] mx-auto">
        <Video url="https://www.youtube.com/embed/j93q9lK8Lz4" />
      </div>
      {/*  */}
      <div className="flex flex-col gap-5">
        {impacts?.map((item: impactProp) => (
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
              dangerouslySetInnerHTML={{ __html: item?.desc }}
            />
          </Mdiv>
        ))}
      </div>
    </div>
  );
};

const impacts: impactProp[] = [
  {
    id: 1,
    title: "Our Mission",
    desc: "To prepare families and individuals, for the second coming of our Lord and Savior Jesus Christ.",
  },
  {
    id: 2,
    title: "Our Vision",
    desc: "To prepare families and individuals, for the second coming of our Lord and Savior Jesus Christ.",
  },
  {
    id: 3,
    title: "Our Mission",
    desc: "- IMPACT Service at 10am (Every Last Sunday of the month) - Scripture UNPLUGGED at 7pm (Every First & Third Tuesday of the month) - Prayers every Thursday from 9 - 9:30pm <span style='color:#1B4E8D;'>(Prayer line (717)-275-8941 Access Code: 8329883)</span>",
  },
];
