import Links from './links/Links'
import styles from "./navbar.module.scss"

export default function Navbar() {
  return (
    <div className={styles.container}>
        <div>StellarV</div>
        <div>
            <Links />
        </div>
    </div>
  )
}
