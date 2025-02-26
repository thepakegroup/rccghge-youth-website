import {
  Mdiv,
  MLink,
  Mpresence,
} from "@/components/framer-motions/motion-exports";
import { SearchIcon } from "@/icons/search-icon";
import { SmallChevronDown } from "@/icons/small-chevron-down";
import api from "@/utils/axios-interceptor";
import { Truncate } from "@/utils/truncate";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate, useSearchParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Events = () => {
  const [searchParams] = useSearchParams();
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("All");
  const navigate = useNavigate();
  //
  const [searchInput, setSearchInput] = useState<string>("");
  //
  const page = searchParams.get("page") || 1;
  const perPage = searchParams.get("perPage") || 6;
  const search = searchParams.get("search") || "";
  //
  const { data: events, isLoading: loadingEvents } = useQuery({
    queryKey: ["events", page, perPage, search],
    queryFn: async () => {
      const res = await api.get(
        `/event/all?page=${page}&perPage=${perPage}&search=${search}&ctx=rccghge-youth`
      );
      return res.data.data;
    },
    select: (data) => data,
    staleTime: 2500,
  });
  //
  const parseEventTime = (dateStr: string, timeStr: string) => {
    if (!dateStr || !timeStr) return null;

    const [year, month, day] = dateStr.split("-").map(Number);
    const [hours, minutes, seconds] = timeStr.split(":").map(Number);

    return new Date(
      Date.UTC(year, month - 1, day, hours, minutes, seconds || 0)
    );
  };
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
  const handlePageClick = (data: any) => {
    const { selected } = data;
    const params = new URLSearchParams(searchParams);
    params.set("page", String(selected + 1));
    navigate(`?${params.toString()}`);
  };
  //search functionality
  const filteredData = useMemo(() => {
    const now = new Date();
    if (searchInput) {
      return events?.data?.filter((event: any) =>
        event?.title?.toLowerCase().includes(searchInput)
      );
    }
    if (filter === "All") {
      return events?.data;
    } else if (filter === "Recent") {
      return events?.data?.filter((event: any) => {
        const start = parseEventTime(
          event.startDate?.split("T")[0],
          event.startTime
        );
        const end = parseEventTime(event.endDate?.split("T")[0], event.endTime);

        if (!start || !end) return false;

        return start > now || (start <= now && end >= now);
      });
    } else if (filter === "Previous") {
      return events?.data?.filter((event: any) => {
        const end = parseEventTime(event.endDate?.split("T")[0], event.endTime);

        if (!end) return false;

        return end < now;
      });
    }
    return events?.data;
  }, [searchInput, events?.data, filter]);
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
        ease: "easeInOut",
      },
    }),
  };
  //
  return (
    <div className="mt-6 mb-20 overflow-x-hidden">
      <h1 className="header-one !text-dark-100 text-center">Events</h1>
      <div className="w-[90%] relative mx-auto bg-[linear-gradient(to_right,#12234E,#4473BA)] h-[3px] mt-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] bg-light-100 px-4 py-2">
          <img className="w-full" src="/logo.svg" alt="" />
        </div>
      </div>
      {/*  */}
      <div className="side-space mt-14 flex items-start gap-2">
        {/* filter input */}
        <div className="w-[100px] text-grey-100">
          <div
            className="flex justify-between items-center gap-3 border py-2 px-2 cursor-pointer"
            onClick={() => setShowFilter(!showFilter)}
          >
            <span>{filter}</span>
            <SmallChevronDown />
          </div>
          <Mpresence>
            {showFilter && (
              <Mdiv
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                className="overflow-y-hidden"
              >
                <p
                  onClick={() => {
                    setFilter("All");
                    setShowFilter(false);
                  }}
                  className="cursor-pointer"
                >
                  All
                </p>
                <p
                  onClick={() => {
                    setFilter("Recent");
                    setShowFilter(false);
                  }}
                  className="cursor-pointer"
                >
                  Recent
                </p>
                <p
                  onClick={() => {
                    setFilter("Previous");
                    setShowFilter(false);
                  }}
                  className="cursor-pointer"
                >
                  Previous
                </p>
              </Mdiv>
            )}
          </Mpresence>
        </div>
        {/* search input */}
        <div className="w-[250px] flex justify-between items-center gap-1 border px-2">
          <SearchIcon />
          <input
            className="outline-none w-full py-[10px] pl-2 text-sm"
            type="text"
            placeholder="Search"
            onChange={(e) =>
              setSearchInput(e.target.value.toLowerCase().trimStart())
            }
          />
        </div>
      </div>
      {/* grid columns of th events */}
      <div className="side-space mt-10 grid grid-cols-1 576:grid-cols-2 997:grid-cols-3 justify-items-center  gap-6 mb-12">
        {loadingEvents &&
          [...Array(6)].map((item: any): any => {
            return (
              <div
                key={uuidv4() + item}
                className="w-full flex flex-col gap-3 h-72 bg-light-100"
              >
                <div className="h-[400px] bg-light-200 animate-pulse rounded-md" />
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
        {events && filteredData?.length < 1 && (
          <p className="font-semibold text-gray-600 text-lg sm:text-xl col-span-6">
            No events available
          </p>
        )}
        {events &&
          filteredData?.map((item: any, index: number) => {
            const date = new Date(item?.eventDate);
            const month = date.toLocaleString("default", { month: "short" });
            const img = item?.eventBanner?.replace(
              "http://localhost:6001",
              `${import.meta.env.VITE_BASE_URL}`
            );
            return (
              <MLink
                initial="hidden"
                whileInView="visible"
                custom={index}
                variants={var1}
                viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                to={`/events/${item?.id}`}
                key={index}
                className="w-full 376:w-[350px] 576:w-full flex flex-col gap-1"
              >
                <div className="w-full min-h-[240px] max-h-[250px]">
                  <img
                    className="w-full h-full bg-light-200 object-cover"
                    src={img}
                    alt={item?.title}
                  />
                </div>
                <div className="flex gap-6 items-center">
                  <div className="font-bold">
                    <h4 className="font-playfair-display text-primary-100">
                      {month}
                    </h4>
                    <h5 className="font-quicksand font-semibold">
                      {date.getUTCDate()}th
                    </h5>
                  </div>
                  {/*  */}
                  <div>
                    <h3 className="tracking-wide">
                      <span>
                        {formatTo12Hour(item?.startTime)} -{" "}
                        {formatTo12Hour(item?.endTime)}
                        &nbsp;{item?.location ? "/" : ""}&nbsp;
                      </span>
                      <span className="text-gray-500">{item?.location}</span>
                    </h3>
                    <h4 className="font-semibold">
                      {Truncate(item?.title, 35)}
                    </h4>
                  </div>
                </div>
              </MLink>
            );
          })}
      </div>
      {/*  */}
      <div className="my-4">
        &nbsp;
        {events && (
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={Math.ceil(events.meta.lastPage)}
            previousLabel="Previous"
            renderOnZeroPageCount={null}
            className="events-paginate w-full flex justify-center gap-3"
            activeClassName="events-paginate-active"
          />
        )}
        &nbsp;
      </div>
    </div>
  );
};

export default Events;
