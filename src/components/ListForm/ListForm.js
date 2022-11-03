import { useState } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { addList } from '../../redux/store';
import styles from './ListForm.module.scss';
import Button from '../Button/Button';

const ListForm = () => {
    
    const dispatch = useDispatch();
    const [title, setTitle] = useState();
    const [description, setDescription] =  useState();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch( addList({id:shortid(), title, description}));
        setTitle('');
        setDescription('');
    }
    
    return (
        <form onSubmit={handleSubmit} className={styles.listForm} >
        Title:<input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        Description: <input type='text' value={description} onChange={e => setDescription(e.target.value)} />
        <Button>ADD LIST</Button>
    </form>
    )
}
export default ListForm;