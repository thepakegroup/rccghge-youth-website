import { Msvg } from "@/components/framer-motions/motion-exports";

export const CloseIcon = ({
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
        d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
      />
    </Msvg>
  );
};
