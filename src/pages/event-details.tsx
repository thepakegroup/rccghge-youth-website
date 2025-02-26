import api from "@/utils/axios-interceptor";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { useParams } from "react-router-dom";
const EventDetails = () => {
  const { id } = useParams();
  //
  const { data: event, isLoading: loadingEvent } = useQuery({
    queryKey: ["event", id],
    queryFn: async () => {
      const res = await api.get(`event/all?id=${id}&ctx=rccghge-youth`);
      return res.data.data;
    },
    select: (data) => data.data[0],
    staleTime: 2500,
  });
  //
  const formatTo12Hour = (timeStr: string) => {
    const parts = timeStr.split(":").map(Number);
    const hours = parts[0];
    const minutes = parts[1];

    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;

    return `${formattedHours}:${minutes.toString().padStart(2, "0")} ${period}`;
  };
  //
  return (
    <div className="w-[95%] mx-auto mt-8 mb-8">
      <h1 className="header-one !text-dark-100 text-center">Events</h1>
      <div className="relative mx-auto bg-[linear-gradient(to_right,#12234E,#4473BA)] h-[3px] mt-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] bg-light-100 px-4 py-2">
          <img className="w-full" src="/logo.svg" alt="" />
        </div>
      </div>
      {/*  */}
      <div className="side-space flex flex-col gap-4 mt-5">
        {loadingEvent && (
          <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-5 mt-5">
            <div className="h-[240px] w-full bg-light-200 animate-pulse rounded-md" />
            <div className="flex flex-col gap-8">
              <div className="h-[20px] w-[90%] bg-light-200 animate-pulse rounded-md" />
              <div className="h-[18px] w-[80%] bg-light-200 animate-pulse rounded-md" />
              <div className="h-[15px] w-[80%] bg-light-200 animate-pulse rounded-md" />
              <div className="h-[16px] w-[100%] bg-light-200 animate-pulse rounded-md" />
            </div>
          </div>
        )}
      </div>
      {/*  */}
      {event && (
        <div className="side-space grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-5 my-8 mb-10">
          <img
            src={event?.eventBanner}
            alt={event?.title}
            className="w-full object-cover"
          />
          <div className="flex flex-col gap-3">
            <h1 className="header-two !text-dark-100">{event?.title}</h1>
            <div className="flex flex-wrap items-center gap-2">
              <p className="font-semibold text-dark-100/80">
                {format(new Date(event?.startDate), "MMM do, yyyy")}
              </p>
              <p className="font-semibold text-blue-200">
                {formatTo12Hour(event?.startTime)}
              </p>
              <span>-</span>
              <p className="font-semibold text-dark-100/80">
                {format(new Date(event?.endDate), "MMM do, yyyy")}
              </p>
              <p className="font-semibold text-blue-200">
                {formatTo12Hour(event?.endTime)}
              </p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: event?.description }} />
            <div className="flex items-center gap-5">
              <p className="text-primary-100 border-b-[2px] text-left pb-1 border-b-primary-100">
                Venue
              </p>
              <p>{event?.location}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetails;
