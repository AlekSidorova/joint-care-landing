import { Button } from "../../ui/Button";
import logo from "../../assets/icons/logo.svg";
import styles from "./Header.module.scss";

const navItems = ["О продукте", "Состав", "Для кого", "Цена", "Вопросы"];

export function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <a className={styles.logo} href="/" aria-label="На главную">
            <img src={logo} alt="FMF" />
          </a>

          <nav className={styles.nav} aria-label="Основная навигация">
            {navItems.map((item) => (
              <a className={styles.navLink} href="#" key={item}>
                {item}
              </a>
            ))}
          </nav>

          <Button className={styles.cta}>Оставить заявку</Button>
        </div>
      </div>
    </header>
  );
}
