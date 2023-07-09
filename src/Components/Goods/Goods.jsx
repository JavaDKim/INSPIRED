import { useSelector } from "react-redux";
import { Container } from "../Layout/Container/Container";
import Product from "../Product/Product";
import s from "./Goods.module.scss";

const Goods = ({ categoryData }) => {
  const { goodsList } = useSelector((state) => state.goods);
  const title = categoryData?.title ?? "Новинки";
  return (
    <section>
      <Container>
        <h2 className={s.title}>{title}</h2>
        <ul className={s.list}>
          {goodsList.map((e, i) => (
            <li key={i}>
              <Product {...e} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Goods;
