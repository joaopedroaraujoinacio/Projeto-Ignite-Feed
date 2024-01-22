import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://media.licdn.com/dms/image/D4D16AQH2F8S5mwW1tw/profile-displaybackgroundimage-shrink_350_1400/0/1703040095398?e=1711584000&v=beta&t=ihpMjB0eVVmNxmA1uctoiTlskgev_Wz0EK8zKlphp10"
      />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/jpinacio.png" />
        

        <strong>João Pedro Araújo Inácio</strong>
        <span>Front-End Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}