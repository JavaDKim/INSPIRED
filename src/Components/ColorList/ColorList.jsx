import { useSelector } from "react-redux";
import s from "./ColorList.module.scss";
import Color from "./Color/Color";

const ColorList = ({ colors }) => {
  const { colorsList } = useSelector((state) => state.colors);
  return (
    <ul className={s.colorList}>
      {colors.map((e, i) => {
        const color = colorsList?.find((x) => e === x.id);
        return <Color key={i} color={color?.code} check={!i} />;
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
