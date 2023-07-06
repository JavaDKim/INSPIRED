import { Container } from "../../Layout/Container/Container";
import { Gender } from "./Gender/Gender";
import { Category } from "./Category/Category";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { setActiveGender } from "../../../features/navigationSlice";

export const Navigation = ({ list }) => {
  const dispatch = useDispatch();
  const locate = useLocation();
  const gender = locate.pathname.slice(1).split("/", 1).join() || woman;
  useEffect(() => {
    dispatch(setActiveGender(gender));
  }, [dispatch, gender]);
  return (
    <nav>
      <Container>
        <Gender list={list} />
        <Category list={list} />
      </Container>
    </nav>
  );
};
