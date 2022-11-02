import styles from './NavBar.module.scss'
import 'font-awesome/css/font-awesome.min.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={styles.wrapper}>
            <a href="/" className={styles.logo}><i className="fa fa-tasks"/></a>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <NavLink className={({isActive}) => isActive ? styles.isActive : styles.link} to="/"> Home </NavLink>
                </li>
                <li className={styles.li}>
                    <NavLink className={({isActive}) => isActive ? styles.isActive : styles.link} to="/favourite" > Favourite </NavLink>
                </li>
                <li className={styles.li}>
                    <NavLink  className={({isActive}) => isActive ? styles.isActive : styles.link} to="/about"> About </NavLink>
                </li>
            </ul>
        </nav>
            
        
    ) 
}

export default NavBar;