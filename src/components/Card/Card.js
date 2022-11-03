import styles from './Card.module.scss';
import 'font-awesome/css/font-awesome.min.css';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { allfavouriteCards } from '../../redux/store';


const Card = (props) => {
    
    const allfavCards = useSelector(allfavouriteCards)
    
    return (
        <li className={styles.card}>
            {props.title}
            <button className={clsx(styles.button, isFavourite && styles.isFavourite )}>
                <span className={"fa fa-star-o"} />
            </button>
       </li>
    );
    
};

export default Card