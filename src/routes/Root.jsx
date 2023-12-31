import { Outlet } from "react-router-dom";
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";
import { Main } from "../Components/Layout/Main/Main";
/* const list = [
  {
    link: "women",
    title: "Женщины",
    categories: [
      { link: "bras", title: "Бюстгалтеры" },
      { link: "panties/", title: "Трусы" },
      { link: "socks/", title: "Носки" },
      { link: "bathrobes/", title: "Халаты" },
      { link: "thermal/", title: "Термобелье" },
      { link: "pijamas/", title: "Пижамы" },
    ],
  },
  {
    link: "men",
    title: "Мужчины",
    categories: [
      { link: "panties/", title: "Трусы" },
      { link: "socks/", title: "Носки" },
      { link: "bathrobes/", title: "Халаты" },
      { link: "thermal/", title: "Термобелье" },
    ],
  },
]; */
export const Root = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};
