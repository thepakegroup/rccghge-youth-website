import { CloseQuote, OpenQuote } from "@/icons/text-quotes";
import { Truncate } from "@/utils/truncate";
import { useState } from "react";

export const PresidentSpeech = ({ item }: { item: any }) => {
  const [showMore, setShowMore] = useState(false);
  // const even = item?.id % 2 === 0;
  //
  return (
    <div className="my-12 w-[90%] sm:w-[600px] mx-auto flex flex-col justify-center items-center gap-5">
      <h3 className="text-[28px] md:text-[32px] lg:text-[48px] font-playfair-display font-bold">
        {item?.title}
      </h3>
      <div className="w-[200px] h-[200px] rounded-full overflow-hidden">
        <img className="w-full h-full object-cover" src={item?.headerImage} />
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <h2 className="font-semibold text-xl">{item?.leaderData?.name}</h2>
        <p className="text-lg tracking-wide text-dark-100/70">
          ({item?.leaderData?.position})
        </p>
        <div className="relative">
          <OpenQuote className="absolute top-2 -left-4" />
          <div
            className="w-[82%] mx-auto"
            dangerouslySetInnerHTML={{
              __html: showMore ? item?.body : Truncate(item?.body, 300),
            }}
          />
          <CloseQuote className="absolute bottom-2 -right-4" />
          <div
            className="text-primary-100 absolute left-1/2 -bottom-8 -translate-x-1/2 cursor-pointer"
            onClick={() => setShowMore(!showMore)}
          >
            Read more
          </div>
        </div>
      </div>
    </div>
  );
};
