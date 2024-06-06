import Link from "next/link"
import styles from "../styles/navbar.module.css"
import Navbar from "./Navbar"
import Image from 'next/image'
function Header() {
  return (
    <div className={styles.main_header}> 
     <div className={styles.navbar_brand}>
            <Link href='/' >
                <Image src="/logo.png" alt="my logo image" width={250} height={40}/>

            </Link>
            </div>
            <Navbar/>
    </div>
  )
}

export default Header
