import { ReactNode } from "react";

export const MainPage = ({ children }: { children: ReactNode }) => {
  return <div className="min-h-[100vh]">{children}</div>;
};
