import { Navigation } from "./Navigation/Navigation";
import { Top } from "./Top/Top";
import s from "./Header.module.scss";

export const Header = ({ list }) => (
  <header className={s.header}>
    <Top />
    <Navigation list={list} />
  </header>
);
