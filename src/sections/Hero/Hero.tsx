import { Button } from "../../ui/Button";
import { HeroBackground } from "./HeroBackground";
import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <HeroBackground />
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>
            Свобода <br />
            движения
          </h1>

          <div className={styles.line} />

          <p className={styles.description}>
            «Complex SW СУСТАВЫ» порошок <br />
            для опорно-двигательного аппарата
          </p>

          <Button size="hero">Купить в 1 клик</Button>

          <div className={styles.bottomText}>
            <h2>1 порция = 17 обычных капсул</h2>
            <p>
              Комплекс, который питает суставы изнутри <br />и способствует
              обновлению хрящевой ткани
            </p>
          </div>
        </div>

        <img
          className={styles.product}
          src="/images/hero/hero-product.png"
          alt="Complex SW суставы"
        />

        <p className={styles.info}>
          420г. / 30 порций <br />
          Месячный курс
        </p>
      </div>
    </section>
  );
};
