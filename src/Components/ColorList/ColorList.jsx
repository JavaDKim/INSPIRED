import { useSelector } from "react-redux";
import s from "./ColorList.module.scss";
import Color from "./Color/Color";
import ColorLabel from "./ColorLabel/ColorLabel";

const ColorList = ({ colors, selectedColor, handleColorChange }) => {
  const { colorsList } = useSelector((state) => state.colors);
  return handleColorChange ? (
    <div className={s.colorList}>
      {colors?.map((id, i) => {
        const color = colorsList?.find((x) => id === x.id);
        return (
          <ColorLabel
            key={id}
            color={color}
            check={!i}
            selectedColor={selectedColor}
            handleColorChange={handleColorChange}
          />
        );
      })}
    </div>
  ) : (
    <ul className={s.colorList}>
      {colors.map((id, i) => {
        const color = colorsList?.find((x) => id === x.id);
        return <Color key={id} color={color?.code} check={!i} />;
      })}
    </ul>
  );
};

export default ColorList;

{
  /*       <ul>
        {colorsList?.map((e, i) => (
          <li key={i}>
            {`id:${e.id} title: ${e.title} - `}
            <div
              style={{
                backgroundColor: e.code,
                width: "15px",
                height: "15px",
                borderRadius: "50%",
                display: "inline-block",
                border: "1px solid",
              }}
            ></div>
          </li>
        ))}
      </ul>
 */
}
