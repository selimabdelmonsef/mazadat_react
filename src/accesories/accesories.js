import React from 'react';
import styles from './accesories.module.css';
import PropTypes from 'prop-types';

export const MyAccesories = ({ titles }) => {

    return (
        <div className={styles.myAccessories} >
            <div className={styles.accessoriesStyles}>
                <p className={styles.accesoriesTitle}>ACCESSORIES</p>
                <div className={styles.accessoriesItems}>
                    <p className={styles.accesoriesName}>Soly</p> 
                    <span className={styles.numbOfItems}>31</span>
                </div>
            </div>
        </div>
    );
}
MyAccesories.propTypes = {
    titles: PropTypes.array,
};