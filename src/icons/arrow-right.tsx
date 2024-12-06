export const ArrowRight = ({
  fill = "#E77400",
  width = "14",
  height = "16",
}: {
  fill?: string;
  width?: string;
  height?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.7175 8.70711C13.108 8.31658 13.108 7.68342 12.7175 7.29289L6.35356 0.928932C5.96303 0.538408 5.32987 0.538408 4.93934 0.928932C4.54882 1.31946 4.54882 1.95262 4.93934 2.34315L10.5962 8L4.93934 13.6569C4.54882 14.0474 4.54882 14.6805 4.93934 15.0711C5.32987 15.4616 5.96303 15.4616 6.35356 15.0711L12.7175 8.70711ZM0 9H12.0104V7H0V9Z"
        fill={fill}
      />
    </svg>
  );
};
