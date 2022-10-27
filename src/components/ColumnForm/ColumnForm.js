import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button'
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';
import shortid from 'shortid';


const ColumnForm = (props) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('')
    const handleSubmit = e => {
        e.preventDefault();
        dispatch( addColumn({id:shortid(), title, icon }));
        setTitle('');
        setIcon('')
    }
   
    return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            Title:<input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            Icon: <input type='text' value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>ADD COLUMN</Button>
        </form>
	);
    
}

export default ColumnForm