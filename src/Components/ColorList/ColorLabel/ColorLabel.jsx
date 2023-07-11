import { useEffect, useRef } from "react";
import s from "./ColorLabel.module.scss";
import cn from "classnames";
const ColorLabel = ({ color, check, selectedColor, handleColorChange }) => {
  const refColor = useRef("");
  useEffect(() => {
    refColor.current.style.setProperty("--data-color", color?.code);
  }, [color]);
  return (
    <label className={s.color} ref={refColor}>
      <input
        className={s.input}
        type="radio"
        name="color"
        value={color?.title}
        checked={selectedColor ? selectedColor === color?.title : check}
        onChange={handleColorChange}
      />
      <span className={s.colorCheck}></span>
    </label>
  );
};

export default ColorLabel;
