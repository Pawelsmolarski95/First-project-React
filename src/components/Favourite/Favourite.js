import { useSelector } from "react-redux";
import { favouriteCards } from "../../redux/store";
import Card from "../Card/Card";

import PageTitle from "../PageTitle/PageTitle"



const Favourite = () => {
    
    const favouriteCardValue =  useSelector(favouriteCards);
    
    return(
        <>
            <PageTitle>Favourite</PageTitle>
            <ul>
                {favouriteCardValue.map(item => 
                   <Card
                   key={item.id}
                   {...item}
                   /> 
                )}
            </ul>   
        </>
        
    )
    
}
export default Favourite;