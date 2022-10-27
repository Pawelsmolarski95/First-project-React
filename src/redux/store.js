import { createStore } from 'redux';
import initialState from './initialState';

const reducer = (state, payload) => {
   
    switch(payload.type) { 
        case 'ADD_COLUMN':
            return  {...state, columns: [...state.columns, payload.newColumn]}
        case 'ADD_CARD':
            return {...state, cards: [...state.cards, payload.newCard]}
        case 'UPDATE_SEARCHSTRING':
            return {...state, searchString: payload.searchValue}
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