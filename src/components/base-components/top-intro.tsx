export const TopIntro = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-col gap-2 mb-6">
      <div className="h-[6px] w-[76px] bg-primary-100" />
      <h3 className="text-dark-100/80 header-three">{text}</h3>
    </div>
  );
};
