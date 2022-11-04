import styles from './Card.module.scss';
import 'font-awesome/css/font-awesome.min.css';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsRedux';
import { removeCard } from '../../redux/cardsRedux';
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
    
    const handleRemoveCard = e => {
        e.preventDefault();
        dispatch(removeCard(cardId))
        
    }
    
    return (
        <li className={styles.card}>
            {props.title}
            <div>
                <button className={clsx(styles.button, props.isFavorite && styles.isFavourite)} onClick={handleFavoriteCard}>
                    <span className={"fa fa-star-o"} />
                </button>
                <button className={styles.button} onClick={handleRemoveCard}>
                    <span className={"fa fa-trash"} />
                </button>
            </div>
            
            
       </li>
    );
    
};

export default Card