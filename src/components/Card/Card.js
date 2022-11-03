import styles from './Card.module.scss';
import 'font-awesome/css/font-awesome.min.css';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';
import { useState } from 'react';

const Card = (props) => {
    const cardId = props.cardId;
    
    const [favoriteValue, setFavoriteValue] = useState(props.isFavorite);
    
    const dispatch = useDispatch();
    
    const handleFavoriteCard = e => {
        e.preventDefault();
        setFavoriteValue(!favoriteValue);
        dispatch(toggleCardFavorite(cardId))
    }
    
    return (
        <li className={styles.card}>
            {props.title}
            <button className={clsx(styles.button, props.isFavorite && styles.isFavourite)} onClick={handleFavoriteCard}>
                <span className={"fa fa-star-o"} />
            </button>
       </li>
    );
    
};

export default Card