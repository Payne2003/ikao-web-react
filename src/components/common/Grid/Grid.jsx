
import clsx from "clsx";

// eslint-disable-next-line react/prop-types
const Grid = ({ children, cols = 3, rows = 3, gap = 4, className = "" }) => {
  return (
    <div
      className={clsx(
        "grid",
        `sm:grid-cols-${cols}`,
        `sm:grid-rows-${rows}`,
        `gap-${gap}`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Grid;
