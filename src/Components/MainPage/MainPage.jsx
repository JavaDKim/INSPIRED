import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategory, fetchGender } from "../../features/goodsSlice";
import Goods from "../Goods/Goods";
import Banner from "../Banner/Banner";

export const MainPage = () => {
  const dispatch = useDispatch();
  const { gender, category } = useParams();
  const { categories } = useSelector((state) => state.navigation);
  const genderData = categories[gender];

  /*   console.log("categories: ", categories); */
  useEffect(() => {
    if (gender && category) {
      dispatch(fetchCategory({ gender, category }));
      return () => {
        // будет вызываться когда жлемент MainPage демонтируется
      };
    }
    if (gender) {
      dispatch(fetchGender(gender));
      return () => {
        // будет вызываться когда жлемент MainPage демонтируется
      };
    }
  }, [dispatch, category, gender]);

  return (
    <>
      <Banner data={genderData?.banner} />
      <Goods
        categoryData={categories[gender]?.list.find((e) => e.slug === category)}
      />
    </>
  );
};
