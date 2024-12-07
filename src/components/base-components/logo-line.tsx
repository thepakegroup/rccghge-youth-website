import { cn } from "@/utils/cn";

export const LogoLine = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "relative mx-auto bg-[linear-gradient(to_right,#12234E,#4473BA)] h-[3px] mt-4",
        className
      )}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] bg-light-100 px-4 py-2">
        <img className="w-full" src="/logo.svg" alt="" />
      </div>
    </div>
  );
};
