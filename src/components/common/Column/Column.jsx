import clsx from "clsx";

// eslint-disable-next-line react/prop-types
const Column = ({ children, gap = 4, align = "center", justify = "center", className = "" }) => {
  return (
    <div
      className={clsx(
        "flex flex-col",
        `gap-${gap}`,
        `items-${align}`,
        `justify-${justify}`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Column;
