/* eslint-disable react-hooks/exhaustive-deps */
import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getListById } from '../../redux/listsRedux';
import { getAllColumns } from '../../redux/columnsRedux';
import { useParams } from 'react-router';
import SearchForm from "../SearchForm/SearchForm"
import { Navigate} from 'react-router';


const List = () => { 
    
    const { listId } = useParams()
    
    const columns =  useSelector (columns => getAllColumns(columns, listId));
    
    const listData = useSelector(lists => getListById(lists, listId ));
    
    
    
   
    if(!listData) return <Navigate to="/"/>
    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h2 className={styles.title}>
                    {listData.title} <span>soon</span></h2>
            </header>
            <p className={styles.description}>{listData.description}</p>
            <section className={styles.columns}>
               {columns.map(column => 
               <Column 
                    key={column.id} 
                    {...column}
                />)} 
            </section>
            <SearchForm/>
            <ColumnForm listId={listId} />
          
            
        </div>
    );
};

export default List;