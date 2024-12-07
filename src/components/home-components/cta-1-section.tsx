import { Mh2, Mp } from "../framer-motions/motion-exports";
import { LogoLine } from "../base-components/logo-line";

export const Cta1Section = () => {
  return (
    <div className="relative">
      <div className="side-space flex flex-col items-center justify-center gap-3 mb-10">
        <Mh2
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="font-semibold text-lg 376:text-xl sm:text-2xl md:text-3xl font-playfair-display text-center"
        >
          How many times have you thought to yourself how great it{" "}
          <br className="hidden 887:block" /> would be to connect with GOD -
        </Mh2>
        <Mp
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="font-quicksand text-base sm:text-lg text-dark-100/75 text-center font-medium"
        >
          This is NEXT! - The Young Adult and Singles Ministry of Heavens
          Glorious Embassy.
        </Mp>
      </div>
      <LogoLine className="mb-14 w-[90%] mx-auto h-[2px]" />
    </div>
  );
};
