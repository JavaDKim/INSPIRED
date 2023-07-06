import { useParams } from "react-router-dom";
import s from "./MainPage.module.scss";
import { Container } from "../Layout/Container/Container";
import { useSelector } from "react-redux";

export const MainPage = ({ gender = "women" }) => {
  const { category } = useParams();
  const { colorsList } = useSelector((state) => state.navigation);
  return (
    <Container>
      <div style={{ marginBottom: "15px" }}>
        <div>MainPage: {gender} </div>
        <div>{category && <p> Категория: {category}</p>}</div>
      </div>
      <ul>
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
    </Container>
  );
};
