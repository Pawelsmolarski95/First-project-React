import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput'
import Button from '../Button/Button'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearchString } from '../../redux/store';


const SearchForm = (props) => {
    const [searchValue, setSearchValue] = useState('');
    
    const dispatch = useDispatch();
    
    const filterCards = e => {
        e.preventDefault();
        dispatch( updateSearchString(searchValue))
        
    }
    
    return (
        <form className={styles.searchForm} onSubmit={filterCards} >
            <TextInput value={searchValue} onChange={e => setSearchValue(e.target.value)} placeholder="Search..."/>
            <Button onClick={filterCards} ><span className="fa fa-search" /></Button>
        </form>
    );
  };

  export default SearchForm;