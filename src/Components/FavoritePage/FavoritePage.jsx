import { useDispatch, useSelector } from "react-redux";
import Goods from "../Goods/Goods";
import { useEffect } from "react";
import { fetchCategory } from "../../features/goodsSlice";
import { usePageFromSearchParams } from "../../hooks/usePageFromSearchParams";

const FavoritePage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const pageURL = usePageFromSearchParams(dispatch);
  useEffect(() => {
    const param = { list: favorites };
    if (pageURL) {
      param.page = pageURL;
    }
    dispatch(fetchCategory(param));
  }, [dispatch, favorites, pageURL]);

  return <Goods title={"Избранное"} />;
};

export default FavoritePage;
