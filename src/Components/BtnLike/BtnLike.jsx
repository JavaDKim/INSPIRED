import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as LikeSVG } from "../../assets/images/heartMenu.svg";
import {
  removeFromFavorites,
  addToFavorites,
} from "../../features/favoritesSlice";
import s from "./BtnLike.module.scss";

export const BtnLike = ({ id }) => {
  const dispatch = useDispatch();
  /*   const { removeFromFavorites, addToFavorites } = useSelector(
    (state) => state.favorites
  ); */
  const isFavorite = useSelector((state) => state.favorites.includes(id));
  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites({ id }));
    } else {
      dispatch(addToFavorites({ id }));
    }
  };

  /* useEffect(() => {
    dispatch(fetchCategory({ list: favorites }));
  }, [dispatch, favorites]); */

  return (
    <button
      className={isFavorite ? s.likeFill : s.like}
      aria-label="Добавить в избранное"
      type="button"
      onClick={handleToggleFavorite}
    >
      <LikeSVG className={s.stroke} />
    </button>
  );
};
