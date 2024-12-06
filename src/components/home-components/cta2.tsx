import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export const Cta2 = () => {
  useEffect(() => {
    gsap.fromTo(
      ".cta2-img",
      { y: -100, opacity: 0.5 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: { trigger: ".cta2-img" },
      }
    );
    gsap.fromTo(
      ".cta2-content",
      { scale: 0.85, opacity: 0.5 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        scrollTrigger: { trigger: ".cta2-content" },
      }
    );
  }, []);
  //
  return (
    <div className="side-space grid grid-cols-1 sm:grid-cols-[1fr_1fr] lg:grid-cols-[1.3fr_1fr] justify-items-center items-center gap-12 my-12">
      <img
        src="/cta2.svg"
        className="cta2-img object-cover"
        alt="cta one image"
      />
      <div className="cta2-content">
        <div className="h-[6px] w-[76px] bg-primary-100" />
        <h2 className="text-[28px] md:text-[32px] lg:text-[48px] font-playfair-display font-bold">
          What We Do
        </h2>
        <p className="font-normal font-quicksand text-sm md:text-base">
          Our fellowship provides a welcoming space for men of all ages to grow
          spiritually, connect with others, and serve our community. Through
          engaging bible studies, heartfelt discussions, powerful prayer
          sessions, and meaningful mentorship opportunities, we aim to support
          each other on our faith journey. Join us as we strengthen our
          relationships with God and each other, and make a positive impact in
          our community.
        </p>
      </div>
    </div>
  );
};
