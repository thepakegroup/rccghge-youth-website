import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="py-12 bg-dark-100 text-light-100">
      <div className="side-space grid grid-cols-1 476:grid-cols-2 md:grid-cols-3 items-start font-quicksand gap-5">
        {/* first col */}
        <div className="flex flex-col gap-2">
          <img className="w-[200px]" src="/footer-logo.svg" alt="footer logo" />
          <div className="flex flex-col gap-1">
            <p className="text-[12px] leading-[18px] font-normal text-light-200">
              HEAVEN'S GLORIOUS EMBASSY 3800 <br /> E. Parker Road <br /> Plano
              TX 75074 <br /> 972-509-5300
            </p>
            <div className="flex items-center gap-1 text-light-200 text-[12px] leading-[18px] font-normal">
              <a href="mailto:info@rccghge.org">info@rccghge.org</a>
              <a href="mailto:events@rccghge.org">events@rccghge.org</a>
            </div>
          </div>
          <small className="flex items-center gap-1 text-light-200 text-[12px] leading-[18px] font-normal">
            Copyright RCCG: Heaven's Glorious Embassy
          </small>
        </div>
        {/* second col */}
        <div className="flex flex-col gap-2 justify-self-start md:justify-self-center text-light-200 text-[12px] leading-[18px] font-normal">
          <h4 className="pb-1 border-b-primary-100 border-b w-[40px] text-sm font-medium">
            Links
          </h4>
          <div className="flex flex-col gap-2">
            <Link
              className="hover:text-light-200/65 transition-all duration-300"
              to="/galleria"
            >
              Galleria
            </Link>
            <Link
              className="hover:text-light-200/65 transition-all duration-300"
              to="/our-leaders"
            >
              Our Leaders
            </Link>
            <Link
              className="hover:text-light-200/65 transition-all duration-300"
              to="/events"
            >
              Our Events
            </Link>
            <Link
              className="hover:text-light-200/65 transition-all duration-300"
              to="/join-us"
            >
              Join Us
            </Link>
          </div>
        </div>
        {/* third col */}
        <div className="flex flex-col gap-2 text-[12px] leading-[18px] font-normal">
          <h4 className="pb-1 border-b-primary-100 border-b w-[70px] text-sm font-medium">
            Calender
          </h4>
          <div>
            <p>JAN11</p>
            <p>
              January 11 @ 7:00 pm - February 29 @ 8:00 pm <br />
              <a
                className="underline"
                href="https://rccghge.org/event/50-days-of-fasting-and-prayers/"
              >
                50 DAYS OF FASTING AND PRAYERS
              </a>
            </p>
            <p>JAN11</p>
          </div>
          <div>
            <p>MAR 1</p>
            <p>8:00 PM - 10:00 PM</p>
            <a
              className="underline"
              href="https://rccghge.org/event/holy-ghost-service-8/"
            >
              HOLY GHOST SERVICE
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
