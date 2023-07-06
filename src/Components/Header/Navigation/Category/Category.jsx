import { NavLink, useLocation } from "react-router-dom";
import s from "./Category.module.scss";
import cn from "classnames";
import { useSelector } from "react-redux";

export const Category = () => {
  const { activeGender: gender, categoryList } = useSelector(
    (state) => state.navigation
  );
  return (
    <>
      {categoryList?.map((e, i) => (
        <span key={i}>
          {e[0] === gender && (
            <div className={s.category}>
              {e[1].list?.map((el, i) => (
                <NavLink
                  key={i}
                  className={({ isActive }) =>
                    cn(s.link, isActive && s.linkActive)
                  }
                  to={`${e[0]}/${el.slug}`}
                >
                  {el.title}
                </NavLink>
              ))}
            </div>
          )}
        </span>
      ))}
    </>
  );
};
