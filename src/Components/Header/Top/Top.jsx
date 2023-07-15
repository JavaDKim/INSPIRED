import { Container } from "../../Layout/Container/Container";
import s from "./Top.module.scss";
import cn from "classnames";
import logo from "../../../assets/images/logo.svg";
import { ReactComponent as LikeSVG } from "../../../assets/images/heartMenu.svg";
import { ReactComponent as SearchSVG } from "../../../assets/images/searchMenu.svg";
import { ReactComponent as CartSVG } from "../../../assets/images/cartMenu.svg";
import { NavLink } from "react-router-dom";
export const Top = () => (
  <div className={s.top}>
    <Container className={cn(Container, s.container)}>
      <a className={cn(s.link, s.phone)} href="tel:+79034034031">
        +7 (903) 490 26 20
      </a>
      <a href="/" className={s.logo}>
        <img src={logo} alt="Логотип Inspired" />
      </a>
      <div className={s.navigation}>
        <ul className={s.navList}>
          <li className={s.navItem}>
            <NavLink to="/search" className={s.link}>
              <SearchSVG />
            </NavLink>
          </li>
          <li className={s.navItem}>
            <NavLink to="/cart" className={s.link}>
              <CartSVG />
            </NavLink>
          </li>
          <li className={s.navItem}>
            <NavLink to="/favorite" className={cn(s.like, s.link)}>
              <LikeSVG className={s.likeSVG} />
            </NavLink>
          </li>
        </ul>
      </div>
    </Container>
  </div>
);
