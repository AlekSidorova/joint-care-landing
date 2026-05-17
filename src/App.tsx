import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.page}>
      <Header />

      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;