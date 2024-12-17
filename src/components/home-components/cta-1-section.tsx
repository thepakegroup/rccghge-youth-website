import { Mh2, Mp } from "../framer-motions/motion-exports";
import { LogoLine } from "../base-components/logo-line";
interface contentType {
  subheading_text: string;
  subheading_description: string;
}
export const Cta1Section = ({ content }: { content: contentType }) => {
  return (
    <div className="relative">
      <div className="side-space flex flex-col items-center justify-center gap-3 mb-10">
        <Mh2
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="font-semibold text-lg 376:text-xl sm:text-2xl md:text-3xl font-playfair-display text-center"
        >
          {content && content?.subheading_text}
        </Mh2>
        <Mp
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="font-quicksand text-base sm:text-lg text-dark-100/75 text-center font-medium"
        >
          {content && content?.subheading_description}
        </Mp>
      </div>
      <LogoLine className="mb-14 w-[90%] mx-auto h-[2px]" />
    </div>
  );
};
