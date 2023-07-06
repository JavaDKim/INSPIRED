import { NavLink, useLocation } from "react-router-dom";
import s from "./Gender.module.scss";
import cn from "classnames";

export const Gender = ({ list }) => {
  // этот location излишний но для примера работы isActive
  //как у автора курса нужно для понимания как работает isActive
  // мною он был размещен в компоненте Navigation/Category
  //  const gender = useLocation().pathname.split("/")[1] || "woman";
  return (
    <ul className={s.gender}>
      {list.map((e) => (
        <li className={s.item} key={e.link}>
          <NavLink
            className={({ isActive }) =>
              cn(
                s.link,
                isActive /*(isActive || gender === e.link)*/ && s.linkActive
              )
            }
            to={e.link}
          >
            {e.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
