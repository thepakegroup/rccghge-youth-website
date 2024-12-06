import { ReactNode } from "react";
import { Link } from "react-router-dom";

export const IconHolder = ({
  children,
  className,
  href,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
}) => {
  return (
    <Link
      className={`h-[30px] w-[30px] rounded-full flex justify-center items-center bg-grey-100/25 p-[6px] ${className}`}
      to={href ? href : "#"}
    >
      {children}
    </Link>
  );
};
export const IconHolder2 = ({
  children,
  className,
  href,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
}) => {
  return (
    <a
      className={`h-[30px] w-[30px] rounded-full flex justify-center items-center bg-grey-100/25 p-[6px] ${className}`}
      href={`mailto:${href}"`}
    >
      {children}
    </a>
  );
};
