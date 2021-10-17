import React from 'react';
import styles from './sortByComponent.module.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useSelector, useDispatch } from 'react-redux';
import { REDUCERS_CONSTANTS } from '../../constants/reducers.constants';

function SortByComponent() {
    const productsState = useSelector(state => state.products);
    const dispatch = useDispatch();


    function sortByKey(array, key, direction = '') {
        return array.sort(function (a, b) {
            var x = a[key]; var y = b[key];
            if (direction === 'asc') {
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            }
            else {
                return ((y < x) ? -1 : ((y > x) ? 1 : 0));
            }
        });
    }
    const handleSortBy = (sortBy) => {
        let sortedPrice = []
        sortedPrice = sortByKey(productsState?.updatedProducts, 'price', sortBy)
        dispatch({
            type: REDUCERS_CONSTANTS.PRODUCTS.UPDATE_PRODUCTS,
            data: sortedPrice
        })
    }
    const options = [
        'asc', 'desc'
    ];
    const defaultOption = options[0];
    return (
        <div className={styles.itemsContainer}>
            <p className={styles.itemsText}>Items</p>
            <div className = {styles.sortByContainer}>
                <p className={styles.sortByText}>Sort By</p>
                <Dropdown options={options} onChange={(e) => handleSortBy(e.value)} value={defaultOption} placeholder="Select an option" />
            </div>

            <p className={styles.nameText}>Name</p>
            <p className={styles.showText}>Show</p>
        </div>
    );
}

export default SortByComponent;