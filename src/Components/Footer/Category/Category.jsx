import s from "./Category.module.scss";
import sc from "../Footer.module.scss";

export const Category = () => (
  <div className={s.category}>
    <p className={s.categoryTitle}>
      <h2>КАТАЛОГ</h2>
    </p>
    <ul className={s.categoryList}>
      <li>
        <p className={s.categorySubtitle}>
          <a className={sc.link}>
            <h3>Женщины</h3>
          </a>
        </p>
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
        <p className={s.categorySubtitle}>
          <a className={sc.link}>
            <h3>Мужчины</h3>
          </a>
        </p>
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
