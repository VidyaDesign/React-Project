import styles from 'Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.box}>
        <span>@mahavidya</span>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a className={styles.nav_a} href='https://github.com/VidyaDesign'>
              GitHub
            </a>
          </li>
          <li>
            {" "}
            <a className={styles.nav_a} href='https://vidyadesign.com.br'>
              UX Design
            </a>
          </li>
          <li>
            <a
              className={styles.nav_a}
              href='https://www.figma.com/files/team/1324840912746010534/recents-and-sharing/recently-viewed?fuid=1287812351867930952'
            >
              Figma
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header

