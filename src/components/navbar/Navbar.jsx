import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.scss"
import { auth } from "@/lib/auth";

const Navbar = async () => {

  const session = await auth();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Stellar <span>Voyagers</span></Link>
      <div>
        <Links session={session}/>
      </div>
    </div>
  )
}

export default Navbar