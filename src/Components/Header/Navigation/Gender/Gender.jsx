import { NavLink, useLocation } from "react-router-dom";
import s from "./Gender.module.scss";
import cn from "classnames";
import { useSelector } from "react-redux";

export const Gender = () => {
  // этот location излишний но для примера работы isActive
  //как у автора курса нужно для понимания как работает isActive
  // мною он был размещен в компоненте Navigation/Category
  //  const gender = useLocation().pathname.split("/")[1] || "woman";

  const { categoryList } = useSelector((state) => state.navigation);

  return (
    <ul className={s.gender}>
      {categoryList?.map((e, i) => (
        <li className={s.item} key={i}>
          <NavLink
            className={({ isActive }) =>
              cn(
                s.link,
                isActive /*(isActive || gender === e.link)*/ && s.linkActive
              )
            }
            to={e[0]}
          >
            {e[1].title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
