import { WhiteCalender } from "@/icons/white-calender";
import { Button } from "../base-components/button";
import { useNavigate } from "react-router-dom";
import { Truncate } from "@/utils/truncate";

export const Cta4 = ({ events }: { events: any }) => {
  //
  const navigate = useNavigate();
  //
  return (
    <div className="side-space grid grid-cols-1 476:grid-cols-2 md:grid-cols-3 997:grid-cols-4 gap-4 mt-10 mb-16 justify-items-center items-center">
      <div className="relative 376:w-[300px] 476:w-full min-h-[250px] 476:min-h-[400px] w-full flex flex-col justify-center bg-[linear-gradient(to_right,#12234E,#4473BA)]">
        <div className="flex flex-col gap-2 w-20 mx-auto">
          <WhiteCalender />
          <h3 className="font-playfair-display text-2xl text-light-100">
            Our Upcoming Events
          </h3>
        </div>
        <div className="absolute hidden 476:block -right-4 top-1/2 h-[40px] w-[40px] bg-[#406CB1] 476:rotate-[125deg]" />
      </div>
      {/*  */}
      {events &&
        events?.map((item: any) => (
          <div
            key={item?.id}
            className="w-full 376:w-[300px] 476:w-full border-0 min-h-[250px] 476:min-h-[400px] 476:border-r border-stone-300 last:border-r-0 flex flex-col justify-center gap-3 px-4"
          >
            <h3 className="font-playfair-display text-xl font-semibold">
              {Truncate(item?.title, 30)}
            </h3>
            {item?.description !== null && (
              <p
                dangerouslySetInnerHTML={{
                  __html: Truncate(item?.description, 80),
                }}
              />
            )}
            <Button
              className="self-start bg-[linear-gradient(to_right,#12234E,#4473BA)]"
              label={new Date(item?.eventDate).toDateString()}
              onClick={() => navigate(`/events/${item?.id}`)}
            />
          </div>
        ))}
      {/*  */}
    </div>
  );
};
