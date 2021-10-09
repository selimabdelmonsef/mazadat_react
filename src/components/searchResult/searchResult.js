import React from 'react';
import styles from './searchResult.module.css';


function SearchResultComponent() {
    return (
        <div className={styles.searchResult}>
            <p className={styles.searchResultText}>Soly</p>  
        </div>
    );
}

export default SearchResultComponent;