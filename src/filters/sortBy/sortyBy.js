import React from 'react';
import styles from './sortBy.module.css';


function SortByComponent() {
    return (
        <div className={styles.sortByContainer}>
            <p className={styles.itemsText}>Items</p>
            <p className={styles.sortByText}>Sort By</p>  
            <p className={styles.nameText}>Name</p> 
            <p className={styles.showText}>Show</p>  
        </div>
    );
}

export default SortByComponent;