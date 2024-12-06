import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
//
export const Cta3 = () => {
  useEffect(() => {
    gsap.fromTo(
      ".cta3-img",
      { y: -100, opacity: 0.5 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: { trigger: ".cta3-img" },
      }
    );
    gsap.fromTo(
      ".cta3-content",
      { scale: 0.85, opacity: 0.5 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        scrollTrigger: { trigger: ".cta3-content" },
      }
    );
  }, []);
  //
  return (
    <div className="bg-primary-100/5 py-6">
      <div className="side-space mx-auto grid grid-cols-1 sm:grid-cols-[1fr_1fr] lg:grid-cols-[1.3fr_1fr] justify-items-center items-center gap-12 my-12">
        <div className="cta3-content">
          <div className="h-[6px] w-[76px] bg-primary-100" />
          <h2 className="text-[28px] md:text-[32px] lg:text-[48px] font-playfair-display font-bold">
            What is Faith?
          </h2>
          <p className="font-normal font-quicksand text-sm md:text-base">
            Thanks for taking a couple of minutes to check out our website.
            Please, take a look around and explore how you can connect with God,
            grow in community and make a difference by serving others at HGE. My
            wife and I are here because we love God, and we love people. It
            always gives us immeasurable joy watching God change people&apos;s
            lives with His mighty power. We hope to see you soon at
            Heaven&apos;s Glorious Embassy. Upon your visit, please stop by to
            see me before you depart
          </p>
          <div className="flex items-center gap-1">
            <p className="font-semibold">Bro. Samuel Ejiofor</p>
            <p>(president - HGE Men)</p>
          </div>
        </div>
        <img
          src="/cta7.svg"
          className="cta3-img object-cover"
          alt="cta one image"
        />
      </div>
    </div>
  );
};
