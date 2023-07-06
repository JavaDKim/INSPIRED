import s from "./Category.module.scss";
import sc from "../Footer.module.scss";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export const Category = () => {
  const { categoryList } = useSelector((state) => state.navigation);
  return (
    <div className={s.category}>
      <h2 className={cn(sc.title, s.categoryTitle)}>КАТАЛОГ</h2>
      <ul className={s.categoryList}>
        {categoryList?.map((e, i) => (
          <li className={s.categorySublist} key={i}>
            <h3 className={s.categorySubtitle}>
              <NavLink className={sc.link} to={e[0]}>
                {e[1].title}
              </NavLink>
            </h3>
            <ul className={s.categorySublist}>
              {e[1].list?.map((el, i) => (
                <li key={i}>
                  <NavLink className={sc.link} to={`${e[0]}/${el.slug}`}>
                    {el.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
