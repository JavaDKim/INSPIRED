import { useEffect, useRef } from "react";
import s from "./Color.module.scss";
import cn from "classnames";

const Color = ({ color, check }) => {
  const refColor = useRef("");
  useEffect(() => {
    refColor.current.className = check ? cn(s.color, s.colorCheck) : s.color;
    refColor.current.style = `--data-color: ${color}`;
  }, [color]);

  return (
    <li
      ref={refColor}
      /*      className={check ? cn(s.color, s.colorCheck) : s.color}
      style={{ "--data-color": color }}*/
    ></li>
  );
};

export default Color;
