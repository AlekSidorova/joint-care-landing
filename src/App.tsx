import styles from "./App.module.scss";
import { Button } from "./ui/Button";

function App() {
  return (
    <main className={styles.page}>
      <section className={styles.preview}>
        <Button>Оставить заявку</Button>
      </section>
    </main>
  );
}

export default App;
