import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
export const Cta1 = ({ item }: { item: any }) => {
  useEffect(() => {
    gsap.fromTo(
      `.cta1-img${item?.id}`,
      { y: -100, opacity: 0.5 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: { trigger: `.cta1-img${item?.id}` },
      }
    );
    gsap.fromTo(
      `.cta1-content${item?.id}`,
      { scale: 0.85, opacity: 0.5 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        scrollTrigger: { trigger: `.cta1-content${item?.id}` },
      }
    );
  }, []);
  const even = item?.id % 2 === 0;
  //
  return (
    <div
      className={`side-space mx-auto grid grid-cols-1 sm:grid-cols-[1fr_1fr] justify-items-center items-center gap-12 my-12 ${
        even ? "lg:grid-cols-[1fr_1.3fr]" : "lg:grid-cols-[1.3fr_1fr]"
      }`}
    >
      <img
        src={item?.content?.desc_image}
        className={`cta1-img${item?.id} object-cover ${
          even ? "block" : "hidden"
        }`}
        alt="cta section image"
      />
      <div className={`cta1-content${item?.id}`}>
        <div className="h-[6px] w-[76px] bg-primary-100" />
        <h2 className="text-[28px] md:text-[32px] lg:text-[48px] font-playfair-display font-bold">
          {item?.sectionTitle}
        </h2>
        <p dangerouslySetInnerHTML={{ __html: item?.content?.description }} />
      </div>
      <img
        src={item?.content?.desc_image}
        className={`cta1-img${item?.id} object-cover ${
          !even ? "block" : "hidden"
        }`}
        alt="cta section image"
      />
    </div>
  );
};
