import { useSelector } from "react-redux";
import { favoriteCards } from "../../redux/cardsRedux";
import Card from "../Card/Card";
import styles from "./Favourite.module.scss"
import PageTitle from "../PageTitle/PageTitle"



const Favourite = () => {
    
    const favouriteCardValue =  useSelector(favoriteCards);
    
    return(
        <>
            <PageTitle>Favourite</PageTitle>
            <article className={styles.column}>
              <ul>
                {favouriteCardValue.map(item => 
                   <Card
                   key={item.id}
                   title={item.title}
                   isFavorite={item.isFavorite}
                   /> 
                )}
              </ul>    
            </article>
             
        </>
        
    )
    
}
export default Favourite;