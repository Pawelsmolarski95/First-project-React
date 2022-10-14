import styles from './Column.module.scss';
import 'font-awesome/css/font-awesome.min.css';
import Card from '../Card/Card'
import CardForm from '../CardForm/CardForm';


const Column = (props) => {
    
    return (
        <article className={styles.column}>
            <h2 className={styles.title}><span className={styles.icon + " fa fa-" + props.icon}></span> {props.title} </h2>
            <ul className='styles.cards'>
                {props.cards.map(card => 
                <Card key={card.id } title={card.title} />)}
            </ul>
            <CardForm columnId={props.id} action={props.addCard}/>
           
        </article>
    )
}

export default Column