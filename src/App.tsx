import styles from './App.module.css'

function App() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.sidebar}>Sidebar</div>
      <div className={styles.editorContainer}>
        <div className={styles.toolbar}>Toolbar</div>
        Text Editor
      </div>
    </div>
  )
}

export default App
