import { NavLink } from "react-router-dom";
import { API_URL } from "../../const";
import { ReactComponent as Like } from "../../assets/images/heart.svg";
import s from "./Product.module.scss";
import ColorList from "../ColorList/ColorList";

const Product = ({ id, title, colors, price, pic }) => {
  return (
    <article className={s.product}>
      <NavLink to={`/product/${id}`} className={s.link}>
        <img className={s.image} src={`${API_URL}/${pic}`} />
        <h3 className={s.title}>{title}</h3>
      </NavLink>
      <div className={s.row}>
        <p className={s.price}>{`руб ${price}`}</p>
        <button className={s.favorite}>
          <Like />
        </button>
      </div>
      <ColorList colors={colors} />
    </article>
  );
};

export default Product;
