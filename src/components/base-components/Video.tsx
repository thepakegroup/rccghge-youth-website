import { cn } from "@/utils/cn";

export const Video = ({
  url,
  title = "YouTube video player",
  ...props
}: {
  url: string;
  title?: string;
}) => {
  return (
    <iframe
      className={cn("w-full h-full")}
      src={url}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      loading="lazy"
      {...props}
    />
  );
};
