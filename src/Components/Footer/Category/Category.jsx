import s from "./Category.module.scss";
import sc from "../Footer.module.scss";

export const Category = () => (
  <div className={s.category}>
    <h2 className={s.categoryTitle}>КАТАЛОГ</h2>
    <ul className={s.categoryList}>
      <li>
        <h3 className={s.categorySubtitle}>
          <a className={sc.link}>Женщины</a>
        </h3>
        <ul className={s.categorySublist}>
          <li>
            <a className={sc.link}>Бюсгалтеры</a>
          </li>
          <li>
            <a className={sc.link}>Трусы</a>
          </li>
          <li>
            <a className={sc.link}>Носки</a>
          </li>
          <li>
            <a className={sc.link}>Халаты</a>
          </li>
          <li>
            <a className={sc.link}>Термобелье</a>
          </li>
          <li>
            <a className={sc.link}>Пижамы</a>
          </li>
        </ul>
      </li>
      <li>
        <h3 className={s.categorySubtitle}>
          <a className={sc.link}>Мужчины</a>
        </h3>
        <ul className={s.categorySublist}>
          <li>
            <a className={sc.link}>Трусы</a>
          </li>
          <li>
            <a className={sc.link}>Носки</a>
          </li>
          <li>
            <a className={sc.link}>Халаты</a>
          </li>
          <li>
            <a className={sc.link}>Термобелье</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
);
