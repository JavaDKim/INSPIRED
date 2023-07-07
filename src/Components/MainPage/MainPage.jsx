import { useParams } from "react-router-dom";
import s from "./MainPage.module.scss";
import { Container } from "../Layout/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGoods } from "../../features/goodsSlice";
import Product from "../Product/Product";

export const MainPage = ({ gender = "women" }) => {
  const { category } = useParams();

  const { goodsList } = useSelector((state) => state.goods);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGoods(gender));
  }, [dispatch, gender]);

  return (
    <section>
      <Container>
        <h2 className={s.title}>Новинки</h2>
        <ul className={s.list}>
          {goodsList.map((e, i) => (
            <li key={i}>
              <Product {...e} />
            </li>
          ))}
        </ul>
        {/*         <div style={{ marginBottom: "15px" }}>
          <div>{category && <p> Категория: {category}</p>}</div>
        </div> */}
      </Container>
    </section>
  );
};
