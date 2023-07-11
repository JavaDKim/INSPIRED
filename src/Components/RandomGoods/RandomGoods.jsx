import s from "./RandomGoods.module.scss";
import { useEffect } from "react";
import { Container } from "../Layout/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomGoods } from "../../features/goodsSlice";
import Product from "../Product/Product";
import { useMedia } from "react-use";

const RandomGoods = () => {
  const isMobile = useMedia("(max-width: 320px)");
  const isTablet = useMedia("(max-width: 768px)");
  const isLaptop = useMedia("(max-width: 1024px)");

  const { activeGender } = useSelector((state) => state.navigation);
  const { goodsRandomList } = useSelector((state) => state.goods);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isMobile) {
      dispatch(fetchRandomGoods({ gender: activeGender, count: 4 }));
    } else if (isTablet) {
      dispatch(fetchRandomGoods({ gender: activeGender, count: 4 }));
    } else if (isLaptop) {
      dispatch(fetchRandomGoods({ gender: activeGender, count: 3 }));
    } else {
      dispatch(fetchRandomGoods({ gender: activeGender, count: 4 }));
    }
  }, [isMobile, isTablet, isLaptop, dispatch]);
  return (
    <section>
      <Container>
        <p className={s.title}>Вам также может понравиться</p>
        <ul className={s.list}>
          {goodsRandomList?.map((e, i) => (
            <li key={i}>
              <Product {...e} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default RandomGoods;
