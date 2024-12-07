import { Msvg } from "@/components/framer-motions/motion-exports";

export const Hamburger = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void | Promise<void>;
}) => {
  return (
    <Msvg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      className={className}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <path
        fill="currentColor"
        d="M3 8h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2m18 8H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m0-5H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2"
      />
    </Msvg>
  );
};
