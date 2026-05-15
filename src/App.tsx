import styles from './App.module.scss'

function App() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Landing page</p>
            <h1 className={styles.title}>Project starter</h1>
            <p className={styles.text}>
              A clean base for building responsive, pixel-perfect landing pages
              with React, TypeScript, Vite, and SCSS Modules.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
