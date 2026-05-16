import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import styles from './App.module.scss';

function App() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Header />
        <Hero />
      </section>
    </main>
  );
}

export default App;