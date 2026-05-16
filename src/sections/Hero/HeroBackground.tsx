import boneImage from "./assets/hero-bg-bone.png";
import bubblesImage from "./assets/hero-bubbles.png";
import styles from "./Hero.module.scss";

export const HeroBackground = () => {
  return (
    <div className={styles.background} aria-hidden="true">
      <div className={styles.glow} />

      <img className={styles.bone} src={boneImage} alt="" />

      <img className={styles.bubbles} src={bubblesImage} alt="" />
    </div>
  );
};

там в макенте много слоев в фоне 