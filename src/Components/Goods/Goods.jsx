import { useSelector } from "react-redux";
import { Container } from "../Layout/Container/Container";
import Product from "../Product/Product";
import s from "./Goods.module.scss";
import { Pagination } from "../../Pagination/Pagination";

const Goods = ({ title }) => {
  const { goodsList } = useSelector((state) => state.goods);
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
        <Pagination />
      </Container>
    </section>
  );
};

export default Goods;
