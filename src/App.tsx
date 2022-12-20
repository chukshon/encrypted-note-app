import styles from './App.module.css'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

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
