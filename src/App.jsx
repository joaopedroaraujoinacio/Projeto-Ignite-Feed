import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'; 

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
          <Sidebar />
        <main>
            <Post 
            author="jj"
            content="aaa"
            />
            <Post 
            author="jj"
            content="aaa"
            />
        </main>
      </div>
    </div>
  )
}


