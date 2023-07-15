import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCategory, fetchGender } from "../../features/goodsSlice";
import Goods from "../Goods/Goods";
import Banner from "../Banner/Banner";
import { usePageFromSearchParams } from "../../hooks/usePageFromSearchParams";
export const MainPage = () => {
  const dispatch = useDispatch();
  const { gender, category } = useParams();
  const { categories } = useSelector((state) => state.navigation);
  const genderData = categories[gender];
  const [title, setTitle] = useState("НОВИНКИ");
  /*   console.log("categories: ", categories); */
  const pageURL = usePageFromSearchParams(dispatch);

  useEffect(() => {
    if (gender && category) {
      const param = { gender, category };
      if (pageURL) {
        param.page = pageURL;
      }
      dispatch(fetchCategory(param));
      setTitle(categories[gender]?.list.find((e) => e.slug === category).title);
      return () => {
        // будет вызываться когда жлемент MainPage демонтируется
      };
    }
    if (gender) {
      dispatch(fetchGender(gender));
      setTitle("НОВИНКИ");
      return () => {
        // будет вызываться когда жлемент MainPage демонтируется
      };
    }
  }, [dispatch, category, gender, pageURL]);

  return (
    <>
      <Banner data={genderData?.banner} />
      <Goods title={title} />
    </>
  );
};
