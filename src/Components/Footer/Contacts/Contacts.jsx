import s from "./Contacts.module.scss";
import sc from "../Footer.module.scss";

export const Contacts = () => (
  <div className={s.contacts}>
    <p className={s.contactsTitle}>
      <a className={sc.link} href="mailto:inspired@gmail.com">
        inspired@gmail.com
      </a>
    </p>
    <p>
      <a className={sc.link} href="tel:+79034902620">
        8 903 490 26 20
      </a>
    </p>
  </div>
);
