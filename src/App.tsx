import { Header } from './components/Header';
import styles from './App.module.scss';

function App() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Header />
      </section>
    </main>
  );
}

export default App;