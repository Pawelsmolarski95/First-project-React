import styles from './NavBar.module.scss'
import 'font-awesome/css/font-awesome.min.css';

const NavBar = () => {
    return (
        <nav className={styles.wrapper}>
            <a href="/" className={styles.logo}><i className="fa fa-tasks"/></a>
            <ul className={styles.ul}>
                <li className={styles.li}><a href="/" className={styles.link}>Home</a></li>
                <li className={styles.li}><a href="/favourite" className={styles.link}>Favourite</a></li>
                <li className={styles.li}><a href="/about" className={styles.link}>About</a></li>
            </ul>
        </nav>
            
        
    ) 
}

export default NavBar;