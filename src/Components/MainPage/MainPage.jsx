import { useLocation, useParams } from "react-router-dom";
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
  const locate = useLocation();
  const categoryPath = locate.pathname.slice(1).split("/");
  console.log("categoryPath: ", categoryPath);

  useEffect(() => {
    dispatch(fetchGoods(gender));
  }, [dispatch, gender]);

  return (
    <section>
      <Container>
        <h2 className={s.title}>Новинки</h2>
        <ul className={s.list}>
          {(categoryPath.length === 1
            ? goodsList
            : goodsList.filter((item) => item.category === categoryPath[1])
          ).map((e, i) => (
            <li key={i}>
              <Product {...e} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
