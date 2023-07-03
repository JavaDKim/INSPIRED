import { Container } from "../Layout/Container/Container";
import { Category } from "./Category/Category";
import { Social } from "./Social/Social";
import { Contacts } from "./Contacts/Contacts";
import { CopyRight } from "./CopyRight/CopyRight";
import { Development } from "./Development/Development";
import s from "./Footer.module.scss";
import cn from "classnames";

export const Footer = () => (
  <footer>
    <Container className={cn(Container, s.container)}>
      <Category />
      <Social />
      <Contacts />
      <CopyRight />
      <Development />
    </Container>
  </footer>
);
