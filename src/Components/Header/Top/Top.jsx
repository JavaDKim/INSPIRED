import { Container } from "../../Layout/Container/Container";
import s from "./Top.module.scss";
import cn from "classnames";
import logo from "../../../assets/images/logo.svg";
export const Top = () => (
  <div className={s.top}>
    <Container className={cn(Container, s.container)}>
      <a className={cn(s.link, s.phone)} href="tel:+79034034031">
        +7 (903) 490 26 20
      </a>
      <a href="/" className={s.logo}>
        <img src={logo} alt="Логотип Inspired" />
      </a>
      <div className={s.navigation}>
        <ul className={s.navList}>
          <li className={s.link}>
            <button className={s.link}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.4431 16.4438L20.9995 21.0002"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </li>
          <li className={s.link}>
            <button className={s.link}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5787 6.75H4.42128C4.23671 6.75 4.05862 6.81806 3.92109 6.94115C3.78356 7.06425 3.69625 7.23373 3.67587 7.41718L2.34254 19.4172C2.33089 19.522 2.34149 19.6281 2.37363 19.7286C2.40578 19.829 2.45876 19.9216 2.52911 20.0002C2.59945 20.0788 2.68559 20.1417 2.78188 20.1847C2.87818 20.2278 2.98247 20.25 3.08795 20.25H20.9121C21.0175 20.25 21.1218 20.2278 21.2181 20.1847C21.3144 20.1417 21.4006 20.0788 21.4709 20.0002C21.5412 19.9216 21.5942 19.829 21.6264 19.7286C21.6585 19.6281 21.6691 19.522 21.6575 19.4172L20.3241 7.41718C20.3038 7.23373 20.2164 7.06425 20.0789 6.94115C19.9414 6.81806 19.7633 6.75 19.5787 6.75Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.25 6.75C8.25 5.75544 8.64509 4.80161 9.34835 4.09835C10.0516 3.39509 11.0054 3 12 3C12.9946 3 13.9484 3.39509 14.6517 4.09835C15.3549 4.80161 15.75 5.75544 15.75 6.75"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </li>
          <li className={s.link}>
            <button className={s.link}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 20.25C12 20.25 2.625 15 2.625 8.62501C2.62519 7.49826 3.01561 6.40635 3.72989 5.53493C4.44416 4.66351 5.4382 4.06636 6.54299 3.84501C7.64778 3.62367 8.79514 3.79179 9.78999 4.32079C10.7848 4.84979 11.5658 5.70702 12 6.74673L12 6.74673C12.4342 5.70702 13.2152 4.84979 14.21 4.32079C15.2049 3.79179 16.3522 3.62367 17.457 3.84501C18.5618 4.06636 19.5558 4.66351 20.2701 5.53493C20.9844 6.40635 21.3748 7.49826 21.375 8.62501C21.375 15 12 20.25 12 20.25Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </Container>
  </div>
);
