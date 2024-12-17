import { cn } from "@/utils/cn";
import { TopIntro } from "../base-components/top-intro";
interface programProp {
  createdAt: string;
  description: string;
  flyerUrl: string;
  id: number;
  name: string;
  updatedAt: string;
}
export const OurProgrammsSection = ({
  programs,
}: {
  programs: programProp[];
}) => {
  return (
    <div className="bg-[#FFFAF5] py-8 md:py-12 mb-12">
      <div className="side-space">
        <TopIntro text="Our Programmes" />
        {/* boxes here */}
        {/* Box 1 */}
        {programs &&
          programs?.map((program: programProp, index: number) => {
            const isEven = index % 2 ? true : false;
            console.log(isEven);
            return (
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10 md:gap-x-12 mb-16"
                key={program?.id}
              >
                <div
                  className={cn(
                    "h-full w-full order-2",
                    isEven ? "lg:order-2" : "lg:order-1"
                  )}
                >
                  <img
                    src={program?.flyerUrl}
                    alt={program?.name}
                    className="object-cover object-center rounded-md"
                  />
                </div>
                {/*  */}
                <div
                  className={cn(
                    "flex flex-col gap-5 order-1",
                    isEven ? "lg:order-1" : "lg:order-2"
                  )}
                >
                  <h2 className="font-semibold text-lg font-playfair-display sm:text-xl md:text-2xl text-dark-100/85 text-center lg:text-left">
                    {program?.name}
                  </h2>
                  <div
                    className="programs-content"
                    dangerouslySetInnerHTML={{ __html: program?.description }}
                  />
                </div>
              </div>
            );
          })}
      </div>
      {/*  */}
    </div>
  );
};
