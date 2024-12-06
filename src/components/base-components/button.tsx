import { ReactNode } from "react";

export const Button = ({
  label,
  onClick,
  icon,
  className,
  type,
  disabled,
}: {
  label: string;
  onClick?: () => void;
  icon?: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`flex justify-between items-center gap-2 bg-primary-100 text-light-100 rounded-md px-4 py-2 ${className}`}
      disabled={disabled}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};
