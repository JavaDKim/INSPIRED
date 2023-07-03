import cn from "classnames";
import style from "./Container.module.scss";
console.log("style: ", style);
export const Container = ({ className, children }) => (
  <div className={cn(style.container, className)}>{children}</div>
);
