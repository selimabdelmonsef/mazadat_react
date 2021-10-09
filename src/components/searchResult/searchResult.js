import React, { useState } from 'react';
import styles from './searchResult.module.css';


function SearchResult() {
    return (
        <div className={styles.searchResult}>
            <p className={styles.searchResultText}>Soly</p>  
        </div>
    );
}

export default SearchResult;