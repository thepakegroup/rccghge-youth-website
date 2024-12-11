import { TopIntro } from "../base-components/top-intro";

export const OurProgrammsSection = () => {
  return (
    <div className="bg-[#FFFAF5] py-8 md:py-12 mb-12">
      <div className="side-space">
        <TopIntro text="Our Programmes" />
        {/* boxes here */}
        {/* Box 1 */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10 md:gap-x-12 mb-16"
          // className="flex"
        >
          <div className="h-full w-full order-2 lg:order-1">
            <img
              src="/program1.png"
              className="object-cover object-center rounded-md"
            />
          </div>
          {/*  */}
          <div className="flex flex-col gap-5 order-1 lg:order-2">
            <h2 className="font-semibold text-lg font-playfair-display sm:text-xl md:text-2xl text-dark-100/85 text-center lg:text-left">
              The IMPACT Academy
            </h2>
            <ul className="list-disc ml-5 font-normal text-dark-100/75 font-quicksand text-sm sm:text-base min-[1120px]:text-lg text-center lg:text-left tracking-wider flex flex-col gap-3 lg:gap-2">
              <li>The Impact academy will build your spiritual muscle,</li>
              <li>
                You will gain tangible insights discovering who YOU are & what
                is your PURPOSE here on earth
              </li>
              <li>
                It will equip you with understanding of God's word to enforce
                your life of victory
              </li>
              <li>
                Make you a better believer and you can have confidence to fulfil
                the great commision.
              </li>
              <li>
                The Impact Academy is a place you want to be to make impact
                within your circle of influence
              </li>
            </ul>
          </div>
        </div>
        {/* Box 2 */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-x-10 gap-y-10 md:gap-x-12"
          // className="flex"
        >
          <div className="flex flex-col gap-5 order-1 lg:order-1">
            <div>
              <h2 className="font-semibold text-lg font-playfair-display sm:text-xl md:text-2xl text-dark-100/85 text-center lg:text-left">
                Scripture Unplugged
              </h2>
              <p className="text-sm text-center lg:text-left text-dark-100/75 font-medium font-quicksand">
                Scripture UNPLUGGED is an open contemporary bible study platform
                for young adults; where we encourage one another with biblical
                truth.
              </p>
            </div>
            <ul className="list-disc ml-5 font-normal text-dark-100/75 font-quicksand text-base sm:text-lg min-[1120px]:text-xl text-center lg:text-left tracking-wider flex flex-col gap-2 lg:gap-2">
              <li>
                It will provide us an opportunity to ask questions as it relates
                to our everyday living and grow in our spiritual lives.
              </li>
              <li>
                It&apos;s an interactive platform to connect with and inspire
                each other.
              </li>
            </ul>
          </div>
          {/*  */}
          <div className="h-full w-full order-2 lg:order-2">
            <img
              src="/program2.png"
              className="object-cover object-center rounded-md"
            />
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};
