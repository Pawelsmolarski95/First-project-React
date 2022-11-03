import { createStore } from 'redux';
import initialState from './initialState';
import { strContains } from '../utlis/strContains';

export const getFilteredCards = ({ cards, searchString }, columnId) => cards
.filter(card => card.columnId === columnId && strContains(card.title, searchString))
  
export const getAllColumns = ({columns}, listId) => columns.filter(column => column.listId === listId )



export const getListById = ({lists}, listId) => lists.find(list => list.id === listId)

export const getAllLists = state => state.lists ;

export const searchStringValue = state => state.searchString;

export const favouriteCards = state => state.cards.filter( card => card.isFavorite === true);

export const allfavouriteCards = state => state.cards;

export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

export const addCard = payload => ({ type: 'ADD_CARD', payload });

export const addList = payload => ({ type: 'ADD_LIST', payload });

export const toggleCardFavourite = payload => ({ type:'TOGGLE_CARD_FAVORITE', payload});

export const updateSearchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });
  
const reducer = (state, action) => {
   
    switch(action.type) { 
        case 'ADD_COLUMN':
            return  {...state, columns: [...state.columns, action.payload]}
        case 'ADD_CARD':
            return {...state, cards: [...state.cards, action.payload]}
        case 'UPDATE_SEARCHSTRING':
            return {...state, searchString: action.payload}
        case 'ADD_LIST':
            return {...state, lists: [...state.lists, action.payload]}
        case 'TOGGLE_CARD_FAVORITE':
            return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) };
        default:
        return state;
    } 
  };

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;