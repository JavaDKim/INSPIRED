import { NavLink, useLocation } from "react-router-dom";
import s from "./Category.module.scss";
import cn from "classnames";
import { useSelector } from "react-redux";

export const Category = ({ list }) => {
  const gender = useSelector((state) => state.navigation.activeGender);
  const locate = useLocation().pathname.slice(1).split("/", 1).join();
  return (
    <>
      {list.map((e, i) => (
        <span key={i}>
          {e.link === gender && (
            <div className={s.category}>
              {e.categories.map((el, i) => (
                <NavLink
                  key={i}
                  className={({ isActive }) =>
                    cn(s.link, isActive && s.linkActive)
                  }
                  to={`${e.link}/${el.link}`}
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
