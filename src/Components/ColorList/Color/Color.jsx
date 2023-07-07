import s from "./Color.module.scss";
import cn from "classnames";

const Color = ({ color, check }) => {
  return (
    <li
      className={check ? cn(s.color, s.colorCheck) : s.color}
      style={{ "--data-color": color }}
    ></li>
  );
};

export default Color;
