import React from 'react';
import styles from './categories.module.css';
import PropTypes from 'prop-types';

export const MyCategories = ({ items }) => {

    return (
        <div className={styles.myAccessories} >
            <div>
                {items?.map((item) => {
                    return <div className={styles.categoriesItems}>
                        <p className={styles.categoriesName}>{item}</p>
                        <span className={styles.numbOfItems}>31</span>
                    </div>
                })}
            </div>
        </div>
    );
}
MyCategories.propTypes = {
    items: PropTypes.array,
};