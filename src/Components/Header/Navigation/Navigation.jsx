import { Container } from "../../Layout/Container/Container";
import { Gender } from "./Gender/Gender";
import { Category } from "./Category/Category";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { setActiveGender } from "../../../features/navigationSlice";

export const Navigation = () => {
  const dispatch = useDispatch();
  const { gender } = useParams();
  useEffect(() => {
    dispatch(setActiveGender(gender));
  }, [dispatch, gender]);
  return (
    <nav>
      <Container>
        <Gender />
        <Category />
      </Container>
    </nav>
  );
};
