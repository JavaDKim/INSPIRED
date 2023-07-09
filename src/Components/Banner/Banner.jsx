import { NavLink, useParams } from "react-router-dom";
import { Container } from "../Layout/Container/Container";
import s from "./Banner.module.scss";
import { API_URL } from "../../const";
import { useMedia } from "react-use";
import { useEffect, useState } from "react";

const Banner = ({ data }) => {
  const isMobile = useMedia("(max-width: 540px)");
  const isTablet = useMedia("(max-width: 768px)");
  const isLaptop = useMedia("(max-width: 1024px)");
  const [img, setImg] = useState();
  const { gender, category } = useParams();

  useEffect(() => {
    if (isMobile) {
      setImg(data?.bg.mobile);
    } else if (isTablet) {
      setImg(data?.bg.tablet);
    } else if (isLaptop) {
      setImg(data?.bg.laptop);
    } else {
      setImg(data?.bg.desktop);
    }
  }, [isMobile, isTablet, isLaptop, gender, []]);

  return (
    data?.id &&
    !category && (
      <section
        className={s.banner}
        style={{ backgroundImage: `url(${API_URL}/${img})` }}
      >
        <Container>
          <div className={s.content}>
            <h2 className={s.title}> {data.description}</h2>
            <NavLink className={s.link} to={`/product/${data?.id}`}>
              Перейти
            </NavLink>
          </div>
        </Container>
      </section>
    )
  );
};

export default Banner;
